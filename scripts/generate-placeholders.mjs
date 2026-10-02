// Gera imagens SVG demonstrativas (arcos em tons de rosé). Servem apenas como placeholder.
// Substitua as referências em src/data/images.js por fotos reais quando houver autorização.
import fs from 'node:fs'
const OUT = 'src/assets/img'
fs.mkdirSync(OUT, { recursive: true })

const PAL = {
  a: ['#F2E8E6', '#E4C9C6', '#B98583', '#8F6261', '#FAF8F6'],
  b: ['#FAF8F6', '#EBDDD3', '#D8B8B2', '#B98583', '#F2E8E6'],
  c: ['#E9D3D0', '#C99B98', '#8F6261', '#6B4846', '#F2E8E6'],
  d: ['#F5EDE6', '#E8D5C4', '#C9A98E', '#B98583', '#FAF8F6'],
}
// [cx, largura, altura, índice da cor, opacidade]
const LAYOUT = [
  { arches: [[.46, .62, .74, 2, .9], [.8, .34, .5, 3, .75]], sphere: [.24, .2, .12] },
  { arches: [[.3, .4, .62, 2, .85], [.7, .4, .8, 3, .85]], sphere: [.5, .16, .1] },
  { arches: [[.5, .8, .78, 2, .8], [.5, .5, .5, 3, .85]], sphere: [.78, .18, .1] },
  { arches: [[.2, .26, .4, 2, .8], [.5, .26, .58, 3, .85], [.8, .26, .76, 2, .9]], sphere: [.8, .16, .09] },
]
const arch = (cx, base, w, h) => {
  const r = w / 2
  return `M${cx - r} ${base}V${base - h + r}A${r} ${r} 0 0 1 ${cx + r} ${base - h + r}V${base}Z`
}
function make(name, w, h, pal, v) {
  const [bg1, bg2, c1, c2, light] = PAL[pal]
  const L = LAYOUT[v]
  const base = h * 0.92
  const col = [bg1, bg2, c1, c2, light]
  let body = ''
  L.arches.forEach(([cx, wf, hf, ci, op], i) => {
    const aw = w * wf, ah = Math.min(h * hf, base - 20)
    body += `<path d="${arch(w * cx, base, aw, ah)}" fill="${col[ci]}" opacity="${op}"/>`
    if (i === 0) body += `<path d="${arch(w * cx + w * 0.03, base, aw, ah)}" fill="none" stroke="#B89A6A" stroke-width="1.5" transform="translate(0 ${-h * 0.025})"/>`
  })
  const [sx, sy, sr] = L.sphere
  body += `<circle cx="${w * sx}" cy="${h * sy}" r="${w * sr}" fill="url(#s)"/>`
  body += `<line x1="${w * 0.08}" x2="${w * 0.92}" y1="${base}" y2="${base}" stroke="#B89A6A" stroke-width="1.5"/>`
  body += `<text x="${w / 2}" y="${h - h * 0.035}" text-anchor="middle" font-family="Inter,Arial,sans-serif" font-size="${w * 0.016}" letter-spacing="${w * 0.004}" fill="#8F6261" opacity=".6">IMAGEM DEMONSTRATIVA</text>`
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" width="${w}" height="${h}"><defs><linearGradient id="g" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${bg1}"/><stop offset="1" stop-color="${bg2}"/></linearGradient><radialGradient id="s"><stop offset="0" stop-color="${light}"/><stop offset="1" stop-color="${light}" stop-opacity=".25"/></radialGradient></defs><rect width="${w}" height="${h}" fill="url(#g)"/>${body}</svg>`
  fs.writeFileSync(`${OUT}/${name}.svg`, svg)
}
const P = [
  ['hero', 800, 1000, 'a', 0], ['about', 800, 1000, 'b', 2],
  ['proc-harmonizacao', 800, 1000, 'a', 1], ['proc-facial', 800, 1000, 'b', 0],
  ['proc-corporal', 800, 1000, 'd', 3], ['proc-skincare', 800, 1000, 'c', 2],
  ['res-1', 800, 1000, 'b', 1], ['res-2', 800, 800, 'a', 3], ['res-3', 800, 1000, 'd', 2],
  ['res-4', 800, 600, 'c', 1], ['res-5', 800, 1000, 'a', 2], ['res-6', 800, 800, 'b', 3],
]
P.forEach((p) => make(...p))
console.log(`${P.length} imagens geradas em ${OUT}`)
