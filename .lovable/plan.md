

# Plan naprawy buildu GitHub Actions + Vercel deployment

## Diagnoza problemu

Po analizie konfiguracji zauważyłem potencjalne problemy:

1. **GitHub Actions SEO workflow** - obecna wersja wygląda poprawnie, ale logi które widzę to końcówka jobu (Post Checkout), nie pokazują właściwego błędu
2. **Vercel deployment** - może mieć problem z konfiguracja build output directory

## Planowane zmiany

### 1. Upewnij się że Vercel ma poprawne ustawienia buildu
W panelu Vercel sprawdź:
- **Build Command**: `npm run build` lub `vite build`
- **Output Directory**: `dist` (Vite buduje do `dist/`, nie `public/`)
- **Install Command**: `npm install`

### 2. Dodaj jawną konfigurację outputDirectory do vercel.json

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  ...reszta konfiguracji
}
```

### 3. Workflow SEO - dodaj timeout i continue-on-error (zabezpieczenie)

```yaml
- name: Validate sitemap exists
  timeout-minutes: 1
  continue-on-error: false
  run: |
    if [ -f "public/sitemap.xml" ]; then
      echo "✅ sitemap.xml exists"
    else
      echo "❌ sitemap.xml not found"
      exit 1
    fi
```

## Część techniczna

### Pliki do modyfikacji

| Plik | Zmiana |
|------|--------|
| `vercel.json` | Dodanie `buildCommand` i `outputDirectory` |
| `.github/workflows/seo.yml` | Dodanie timeout i lepszego logowania |

### Konfiguracja vercel.json
Obecna konfiguracja nie określa jawnie gdzie jest output buildu. Vite buduje do `dist/`, a Vercel może szukać w `public/` - stąd błąd "Missing public directory".

### Kroki implementacji

1. Dodaj do `vercel.json`:
   ```json
   "buildCommand": "npm run build",
   "outputDirectory": "dist"
   ```

2. Sprawdź w panelu Vercel → Project Settings → General:
   - Framework Preset: Vite
   - Output Directory: dist

3. Re-deploy projekt

## Alternatywne rozwiązanie

Jeśli problem dotyczy samego GitHub Actions (nie Vercel), mogę całkowicie wyłączyć SEO workflow zmieniając trigger na `workflow_dispatch` only - wtedy testy SEO będą uruchamiane tylko ręcznie i nie będą blokować deploymentu.

