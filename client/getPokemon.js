async function getPokemon (pokemon) {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  await page.goto(`https://www.pokemon.com/us/pokedex/${pokemon}`)
  await page.waitFor(1000)
  await page.setViewport({width: 1000, height: 1150})
  await page.screenshot({path: `./server/public/pokedex/${pokemon}.jpg`})

  await browser.close()
}

module.exports = getPokemon