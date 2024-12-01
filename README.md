# API Node.js

## Geral

Este projeto é uma API em Node.js que fornece duas funcionalidades principais:

1. **Consulta de Endereço**: Fornece endereço a partir do CEP informado.
2. **Cálculo Matemático**: Divide dois números e retorna o resultado arredondado para o número inteiro mais próximo.

A API foi projetada para ser executada em um contêiner Docker e inclui documentação Swagger. Além disso, utiliza ferramentas como Prettier e ESLint para formatação do código, e integra Husky e lint-staged para verificações antes do commit.

## Funcionalidades

- Consulta de endereço pelo número do CEP;
- Cálculo de divisão com arredondamento para o número inteiro mais próximo;
- Documentação Swagger;
- Execução com Docker compose;
- Formatação do código com Prettier e ESLint;

## Iniciar projeto

### Instalar Dependências

```bash
npm install
```

```bash
npx eslint --init
```

```bash
npm add -D eslint-config-prettier
```

```bash
npm swagger-ui-express
```

### Excutar com Docker compose

Definição do serviço no arquivo docker-compose:

```bash
docker-compose up --build
```

### Documentação Swagger

Acesse a documentação da API em `http://localhost:3000/documentation`.

## Endpoints da API

### Consulta de Endereço

**GET** `/cep/:cep`

- **Descrição**: Fornece endereço a partir do CEP informado.
- **Parâmetro de Caminho**: `cep` (numero do CEP)
- **Resposta**: JSON contendo as informações do endereço.

### Cálculo de Divisão

**POST** `/calculator`

- **Descrição**: Divide dois números (x e y) e retorna o resultado arredondado para o inteiro mais próximo.
- **Corpo da Requisição**:

```json
{
  "x": 10,
  "y": 3
}
```

- **Resposta**: JSON contendo o resultado arredondado:

```json
{
  "result": 3
}
```

### Prettier e ESLint

```bash
npm run lint:fix
```

## Autora

- Raquel Marangoni (Administradora)
