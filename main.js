require('dotenv').config();

const URL_BASE = "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent";
const URL_FINAL = `${URL_BASE}?key=${process.env.GOOGLE_API_KEY}`;

async function requisicaoAPI() {
    try {
        const prompt = process.argv[2];
        const objetoParaEnviar = {
           "contents": [
            {
              "parts": [
                {
                   "text": prompt
                 }
               ]
            }
           ]
         }
        const parametros = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-goog-api-key': process.env.GOOGLE_API_KEY
            },
            body: JSON.stringify(objetoParaEnviar)
        };
        const resposta = await fetch(URL_FINAL, parametros);
        const dadosDaIA = await resposta.json();
        const textoResposta = dadosDaIA.candidates[0].content.parts[0].text;
        console.log(textoResposta);
    } catch(error) {
        console.error('Ocorreu um erro', error);
    }
}



requisicaoAPI();
