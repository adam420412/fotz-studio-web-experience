

## Plan: Test integracji Vercel

### Co zrobię
Dodam mały, nieszkodliwy komentarz do pliku `vercel.json` (lub innego pliku konfiguracyjnego), który wywoła commit do GitHub.

### Zmiana testowa
Plik: `vercel.json`
- Dodam komentarz w nagłówku pliku lub drobną zmianę formatowania

### Po wykonaniu zmiany
1. Commit zostanie automatycznie wysłany do GitHub (branch `main`)
2. Jeśli integracja działa - Vercel powinien w ciągu 1-2 minut wykryć nowy commit i rozpocząć build
3. Sprawdź w Vercel: **Deployments** → powinna pojawić się nowa pozycja ze statusem "Building" lub "Ready"

### Jak zweryfikować sukces
- W Vercel Dashboard → Deployments pojawi się nowy deployment
- Status zmieni się z "Building" → "Ready" 
- Commit message będzie widoczny przy deploymencie

### Co jeśli nie zadziała
Jeśli po 5 minutach nie pojawi się nowy deployment:
1. Sprawdź zakładkę **Activity** w Vercel
2. Sprawdź **Settings → Git** czy webhook jest aktywny
3. Możliwe że trzeba będzie ponownie połączyć repo

