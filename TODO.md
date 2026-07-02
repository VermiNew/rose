# TODO — Rose

## Branding
- [x] Logo wybrane (gradient, wariant z liśćmi)
- [x] Paleta kolorów ustalona (rose / red / green / amber / neutral, 32 odcienie)
- [x] Zapisać paletę jako CSS variables w `src/styles/`
- [ ] Wyeksportować logo do SVG (obecnie tylko PNG)
- [ ] Favicon + app icon na bazie logo
- [ ] Animowane stany logo (idle → thinking → done) — później, wymaga SVG

## Layout (szkielet)
- [x] Wyczyścić domyślny scaffold Vite (App.tsx, App.css, zbędne assets)
- [x] Bazowy `.app-layout`: `.sidebar` + `.main-area` (puste, kolory Rose)

## Sidebar
- [x] Przycisk „New chat" (statyczny)
- [x] Lista czatów (statyczny markup, placeholdery)
- [x] Stylowanie listy (hover, stan aktywny)
- [x] Sekcja profilu użytkownika na dole

## Główny obszar — ekran powitalny
- [x] Nagłówek powitalny
- [x] Input na środku (statyczny)

## Główny obszar — ekran rozmowy
- [x] Przełączanie widoku: nowy czat / aktywna rozmowa
- [x] Kontener na wiadomości (mock dane)
- [x] Bąbelek wiadomości użytkownika
- [x] Blok odpowiedzi asystenta
- [x] Input przyklejony na dole

## Później
- [ ] Obsługa PL / EN w UI (i18n)
- [ ] Integracja z providerami np. NVIDIA NIM
