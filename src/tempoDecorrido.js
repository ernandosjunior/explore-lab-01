console.time("declarando variavel")
for (let i = 0; i < 1000000; i++) {
  const currentYear = String(new Date().getFullYear()).slice(2)
  let tempo = {
    inicial: currentYear,
    final: currentYear + 10,
  }
}
console.timeLog("declarando variavel")
console.timeEnd("declarando variavel")
