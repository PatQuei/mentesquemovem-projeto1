const axios = require('axios');

const [, , valorStr, criptoOrigem, moedaDestino] = process.argv;

if (!valorStr || !criptoOrigem || !moedaDestino) {
  console.log("❌ Uso: node cripto.js <valor> <criptoOrigem> <moedaDestino>");
  process.exit(1);
}

const valor = parseFloat(valorStr);

async function converterCriptoParaMoeda(valor, cripto, moeda) {
  try {
    const url = `https://api.coingecko.com/api/v3/simple/price?ids=${cripto}&vs_currencies=${moeda}`;
    const { data } = await axios.get(url);

    const taxa = data[cripto]?.[moeda];

    if (!taxa) {
      console.log("❌ Criptomoeda ou moeda inválida ou não suportada.");
      return;
    }

    const convertido = valor * taxa;

    console.log(`🔁 ${valor} ${cripto.toUpperCase()} = ${convertido.toFixed(2)} ${moeda.toUpperCase()}`);
  } catch (erro) {
    console.error("❌ Erro ao buscar dados da API:", erro.message);
  }
}

converterCriptoParaMoeda(valor, criptoOrigem.toLowerCase(), moedaDestino.toLowerCase());