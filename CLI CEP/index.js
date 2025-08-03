#!/usr/bin/env node

const cep = process.argv[2];

if (!cep || cep.length !== 8) {
  console.error("Por favor, forneça um CEP válido com 8 dígitos.");
  process.exit(1);
}

const getAddress = async (cep) => {
  try {
    const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    const data = await response.json();

    if (data.erro) {
      console.log(`O CEP ${cep} não foi encontrado.`);
      return;
    }

    console.log(`
      Endereço para o CEP ${cep}:
      --------------------------
      Rua:      ${data.logradouro}
      Bairro:   ${data.bairro}
      Cidade:   ${data.localidade}
      Estado:   ${data.uf}
    `);
  } catch (error) {
    console.error("Ocorreu um erro ao buscar o endereço:", error);
    process.exit(1);
  }
};

getAddress(cep);
