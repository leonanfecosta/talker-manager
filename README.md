# Talker Manager!

Esse projeto foi desenvolvido durante o módulo de BackEnd na Trybe! #vqv 🚀

Aqui você vai encontrar os detalhes de como foi o desenvolvimento do projeto e quais foram os requisitos obrigatórios para o desenvolvimento.

---

# Habilidades desenvolvidas

Foi proposto a criação de uma aplicação de cadastro de talkers (palestrantes) onde será possível cadastrar, visualizar, pesquisar, editar e excluir informações. Para isso foi necessário:

- Desenvolver uma API de um CRUD (Create, Read, Update e Delete) de palestrantes (talkers) e;
- Desenvolver alguns endpoints que irão ler e escrever em um arquivo utilizando o módulo fs.

Neste projeto, fui capaz de:

- Ler e escrever arquivos localmente com NodeJS;
- Escrever seus próprios scripts que criam e consomem Promises;
- Escrever APIs utilizando Node e Express;
- Entender a estrutura de uma aplicação Express e como organizar seu código;
- Criar rotas e aplicar middlewares.
---

# Funcionamento da aplicação

⚠ **Atenção:** ⚠

Para rodar a aplicação é necessário seguir os seguintes passos:

Criar um container no Docker contendo a aplicação:
```
docker-compose up -d
```
Realize as instações das dependencias 
```sh
npm install
```
Rode em modo de desenvolvimento:
```sh
npm run dev
```

Após testes o funcionamento da aplicação em um programa de sua escolha, para o desenvolvimento foi utilizado o Insomnia.
---
# Requisitos desenvolvidos no projeto:
### Requisitos Obrigatórios:

- ✅ 1. Crie o endpoint GET `/talker`: O endpoint deve retornar um array com todas as pessoas palestrantes cadastradas.
- ✅ 2. Crie o endpoint GET `/talker/:id`: O endpoint deve retornar uma pessoa palestrante com base no id da rota.

- ✅ 3. Crie o endpoint POST `/login`: O endpoint deve ser capaz de retornar um token aleatório de 16 caracteres que deverá ser utilizado nas demais requisições.

- ✅ 4. Crie o endpoint POST `/talker`: O endpoint deve ser capaz de adicionar uma nova pessoa palestrante ao seu arquivo.

- ✅ 5. Crie o endpoint PUT `/talker/:id`: O endpoint deve ser capaz de editar uma pessoa palestrante com base no id da rota, sem alterar o id registrado.
- ✅ 6. Crie o endpoint DELETE `/talker/:id`: O endpoint deve deletar uma pessoa palestrante com base no id da rota.
- ✅ 7. Crie o endpoint GET `/talker/search?q=searchTerm`: O endpoint deve retornar um array de palestrantes que contenham em seu nome o termo pesquisado no queryParam da URL.
