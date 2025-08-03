# CLI com Gemini / IA

## Descrição

Uma simples ferramenta de linha de comando (CLI) construída com Node.js que interage com a API do Google Gemini para gerar respostas de inteligência artificial diretamente no terminal.

## Funcionalidades

- **Geração de Respostas**: Envia um prompt de texto para a API do Gemini e exibe a resposta.
- **Configuração Segura**: Gerencia a chave de API usando variáveis de ambiente (`.env`).

## Tecnologias Utilizadas

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)
- [dotenv](https://www.npmjs.com/package/dotenv)
- [API do Google Gemini](https://ai.google.dev/)

## Como Instalar e Usar

Siga estes passos para configurar e executar a sua CLI.

### Veja como funciona\!



https://github.com/user-attachments/assets/3da7253a-41b9-4c54-8409-1736819da40f



### 1\. Pré-requisitos

Certifique-se de ter o **Node.js** e o **npm** instalados em sua máquina.

### 2\. Instalação

Abra o terminal, navegue até a pasta do projeto e instale as dependências:

```bash
npm install
```

### 3\. Configuração da Chave de API

Você precisa de uma chave de API do Google AI Studio.

- Crie um arquivo chamado **`.env`** na raiz do seu projeto.
- Dentro do arquivo, adicione sua chave da seguinte forma:

<!-- end list -->

```
GOOGLE_API_KEY=<sua-chave-aqui>
```

**Importante:** Nunca compartilhe sua chave de API publicamente. O arquivo `.env` não deve ser enviado para repositórios como o GitHub.

### 4\. Como Usar

Agora você pode usar sua CLI\! Digite o comando `node` seguido pelo nome do seu arquivo e o prompt entre aspas duplas:

```bash
node <nome-do-seu-arquivo.js> "Qual é a capital da França?"
```

O resultado gerado pela IA será exibido diretamente no seu terminal.

## Exemplo de Uso

```bash
# Exemplo de comando
node main.js "Explique o que é fotossíntese de forma simples"

# Exemplo de saída no terminal
A fotossíntese é o processo que as plantas usam para criar seu próprio alimento a partir da luz solar, água e gás carbônico.
```

---

## Contribuição

Se quiser contribuir com o projeto, sinta-se à vontade para abrir uma _issue_ ou enviar um _pull request_.
