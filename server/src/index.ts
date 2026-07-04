import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { fileURLToPath } from 'node:url'
import { dirname, resolve } from 'node:path'

// Load .env from the server directory regardless of the current working dir,
// so `tsx watch` works whether started from /server or the repo root.
const __dirname = dirname(fileURLToPath(import.meta.url))
dotenv.config({ path: resolve(__dirname, '../.env') })

// Centralized configuration. Reading env once at startup keeps the rest of the
// code free of scattered process.env reads and makes the contract visible.
const config = {
  port: Number(process.env.PORT) || 3001,
  corsOrigin: (process.env.CORS_ORIGIN ?? 'http://localhost:5173')
    .split(',')
    .map((origin) => origin.trim())
    .filter(Boolean),
  nvidiaNimApiKey: process.env.NVIDIA_NIM_API_KEY ?? '',
} as const

// Wrap async handlers so thrown errors land in Express's error pipeline
// instead of becoming unhandled promise rejections. Boilers down to one
// reusable wrapper as more endpoints are added.
type AsyncHandler = (
  req: express.Request,
  res: express.Response,
) => Promise<express.Response | void>

function asyncHandler(handler: AsyncHandler): express.RequestHandler {
  return (req, res, next) => {
    Promise.resolve(handler(req, res)).catch(next)
  }
}

// Dev-only request logger: method, path, status, response time in ms.
// Skips in production to avoid noisy logs and a small per-request cost.
function requestLogger(
  req: express.Request,
  res: express.Response,
  next: express.NextFunction,
): void {
  if (process.env.NODE_ENV === 'production') {
    next()
    return
  }

  const start = performance.now()
  res.on('finish', () => {
    const ms = Math.round(performance.now() - start)
    console.info(`${req.method} ${req.originalUrl} ${res.statusCode} ${ms}ms`)
  })
  next()
}

const app = express()

app.use(cors({ origin: config.corsOrigin }))
app.use(express.json())
app.use(requestLogger)

app.get(
  '/health',
  asyncHandler(async (_req, res) => {
    res.json({ status: 'ok' })
  }),
)

// Centralized error handler. Express detects it by its 4-arg signature.
// Keeps route handlers thin and guarantees a consistent error shape.
app.use(
  (
    err: unknown,
    _req: express.Request,
    res: express.Response,
    _next: express.NextFunction,
  ) => {
    console.error('Unhandled error:', err)
    res.status(500).json({ error: 'Internal server error' })
  },
)

app.listen(config.port, () => {
  console.log(`Rose server listening on http://localhost:${config.port}`)
  if (!config.nvidiaNimApiKey) {
    console.warn(
      'Warning: NVIDIA_NIM_API_KEY is not set. /api/chat will reject requests.',
    )
  }
})
