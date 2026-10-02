# Clínica Dra. Laís Santiago | Estética Avançada (protótipo)

Protótipo comercial estático em React + Vite. Todo o conteúdo é DEMONSTRATIVO.

## Rodar
```
npm install
npm run dev      # desenvolvimento
npm run build    # gera /dist
```

## Antes de publicar (procure por `TODO (REAL DATA)`)
- `src/data/site.js`: `WHATSAPP_NUMBER`, Instagram, endereço, procedimentos, depoimentos, FAQ.
- `src/data/images.js`: trocar as imagens demonstrativas por fotos reais e autorizadas.
- `index.html`: adicionar `og:image` e `og:url`.
- Mapa: só adicionar depois de confirmar o endereço real.

## Publicar
Vercel, Netlify ou Cloudflare Pages: build `npm run build`, pasta de saída `dist`.
