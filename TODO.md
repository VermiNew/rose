# TODO — Rose

## Zrobione
- [x] Branding: logo, paleta kolorów (32 odcienie), SVG, favicon + PWA app icons
- [x] Layout: `.app-layout` (sidebar + main-area), scaffold Vite wyczyszczony
- [x] Sidebar: New chat, lista czatów (statyczna), profil użytkownika
- [x] Ekran powitalny + ekran rozmowy z przełączaniem
- [x] Lokalne wysyłanie wiadomości użytkownika (mock, bez backendu)
- [x] Server: szkielet Express + TypeScript w `/server`, endpoint `/health`

## Easy win — szybkie i małe
- [ ] `.env.example` (server) + wczytanie klucza NVIDIA NIM z env
- [ ] CORS w Express ograniczony do origin frontendu (obecnie otwarty na wszystko)
- [ ] Prosty request logger w Express (metoda, path, status, czas odpowiedzi)
- [ ] `GET /api/models` — statyczna lista dostępnych modeli NIM
- [ ] `VITE_API_URL` w `.env` frontendu zamiast hardcodowanego `localhost:3001`
- [ ] Wskaźnik „Rose pisze…" w UI (statyczny tekst, bez animacji logo)
- [ ] Przycisk kopiowania treści przy wiadomości asystenta
- [ ] Empty state, gdy lista czatów w sidebarze jest pusta
- [ ] React error boundary na wypadek crasha komponentu

## Średnie
- [ ] `POST /api/chat` — proxy do NVIDIA NIM (na start bez streamingu)
- [ ] Podłączenie `ConversationScreen` do prawdziwego backendu zamiast mocka
- [ ] Stan ładowania i stan błędu w UI podczas oczekiwania na odpowiedź
- [ ] Anulowanie trwającego zapytania (`AbortController`)
- [ ] Renderowanie Markdown w odpowiedziach asystenta (bloki kodu, listy, linki)
- [ ] Zapis historii czatu w `localStorage`
- [ ] Prawdziwa lista czatów w sidebarze (tworzenie, wybór, usuwanie, nie mock)
- [ ] Regenerowanie ostatniej odpowiedzi asystenta
- [ ] Edycja wysłanej wiadomości użytkownika i ponowne wysłanie
- [ ] Prosty selektor modelu (dropdown — ręczny wybór, zanim powstanie orchestrator)
- [ ] System prompt / osobowość Rose skonfigurowana po stronie serwera
- [ ] i18n — infrastruktura + przełącznik PL/EN

## Trudne
- [ ] Streaming odpowiedzi (SSE) z NIM przez proxy do frontendu, token po tokenie
- [ ] Animowane stany logo (idle → thinking → done) zsynchronizowane ze stanem rozmowy
- [ ] Rate limiting na proxy (per IP / per klucz)
- [ ] Persystencja czatów w bazie danych zamiast `localStorage` (np. SQLite)
- [ ] Ekran ustawień (klucz API, domyślny model, motyw)
- [ ] Załączniki / upload plików w konwersacji
- [ ] Testy jednostkowe (komponenty frontendu + endpointy serwera)
- [ ] CI: lint + build na każdym pushu (GitHub Actions)

## Bardzo trudne
- [ ] Smart orchestrator — automatyczna delegacja do wyspecjalizowanego modelu wg treści zapytania
- [ ] Obsługa tool use / function calling dla modeli, które to wspierają
- [ ] Współpraca wielu modeli w jednej odpowiedzi (orchestrator + specjalista razem)
- [ ] Wdrożenie produkcyjne (hosting proxy, domena, HTTPS)
- [ ] Uwierzytelnianie użytkownika (gdyby projekt stał się multi-user)
- [ ] Voice input/output

## Później / niezdecydowane
- [ ] Integracja z innymi providerami poza NVIDIA NIM (Cerebras, Groq, Mistral)
