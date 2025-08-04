# Projeto Grupo 1 - Mentes que Movem

## Repositório de Projetos | Desenvolve Boticário

-----

Bem-vindo ao repositório do **Grupo 1 - Mentes que Movem**, do programa Desenvolve Boticário\!

Este repositório é um espaço colaborativo onde estamos aplicando os conhecimentos de JavaScript e Node.js para desenvolver uma série de ferramentas de linha de comando (CLI). Cada projeto aqui é um passo na nossa jornada de aprendizado, focado em interagir com APIs, manipular dados e construir ferramentas práticas.

## O Grupo

Aqui estão os membros do nosso time. Juntos, estamos movendo mentes e criando soluções\!

  *  Patricia Queiroz 
  *  Victória Mignon
  *  André
  *  Edmilson Júnior
  *  Victória Marques 
  *  Ana Técia 

## Projetos

Cada pasta neste repositório contém um projeto de CLI. Para saber mais sobre um projeto específico, navegue até a pasta dele e leia o `README.md` correspondente.

  * **CLI de Geração de Texto com Gemini**

      * **Descrição:** Uma CLI que se conecta à API do Google Gemini para gerar respostas de IA no terminal.
      * **Pasta:** [`/Projeto CLI com API do Gemini`](https://github.com/PatQuei/mentesquemovem-projeto1/tree/main/Projeto%20CLI%20com%20API%20do%20Gemini)

  * **CLI CEP**

      * **Descrição:** CLI CEP
      * **Pasta:** [`/CLI CEP`](https://github.com/PatQuei/mentesquemovem-projeto1/tree/main/CLI%20CEP)

  * **CLI para conversão de criptomoedas**

      * **Descrição:** CLI para conversão de criptomoedas
      * **Pasta:** [`/CLI para conversão de criptomoedas`](https://github.com/PatQuei/mentesquemovem-projeto1/tree/main/CLI%20para%20convers%C3%A3o%20de%20criptomoedas)

## Como Contribuir

A colaboração é o nosso motor\! Se você é um membro do grupo e quer adicionar um novo projeto ou fazer melhorias:

1.  Crie uma nova pasta com o nome do seu projeto.
2.  Dentro da pasta, adicione todos os seus arquivos de código e o arquivo `package.json`.
3.  Crie um `README.md` detalhado para o seu projeto, explicando o que ele faz e como usá-lo.
4.  Atualize esta lista de projetos no `README.md` principal para incluir seu novo trabalho.

## Tecnologias Usadas

Este repositório utiliza e aplica as seguintes tecnologias:

  * **Node.js**: Ambiente de execução JavaScript.
  * **npm**: Gerenciador de pacotes para Node.js.
  * **APIs Web**: Interação com serviços externos.
  * **JavaScript**: A linguagem de programação principal.
  * **Markdown**: Para a documentação.
    
-----

🔎 CLI de Consulta de CEP
Uma ferramenta simples e interativa de linha de comando (CLI) construída com Node.js para buscar informações de endereço usando a API pública do ViaCEP.

🚀 Funcionalidades
Consulta Rápida: Forneça o CEP diretamente como um argumento para uma busca instantânea.

Modo Interativo: Se nenhum CEP for fornecido, a ferramenta pedirá o CEP no terminal.

Validação: Verifica se o CEP tem 8 dígitos numéricos antes de fazer a busca.

Exibição Formatada: Apresenta os dados de endereço (Rua, Bairro, Cidade, Estado) de forma clara no terminal.

⚙️ Pré-requisitos
Certifique-se de ter o Node.js instalado em sua máquina. A versão 18 ou superior é recomendada, pois o projeto usa a função fetch nativa.

📥 Como Usar
Siga estes passos para executar a CLI em sua máquina.

Terminal

npm install -y e 
npm link

Terminal

cep-checker 01001000
Exemplo de saída:

Endereço para o CEP 01001000:
--------------------------
Rua:      Praça da Sé
Bairro:   Sé
Cidade:   São Paulo
Estado:   SP

📄 Licença
Este projeto está sob a licença ISC.
