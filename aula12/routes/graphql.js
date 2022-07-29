const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');

// Importa o controller
const contatoController = require('../controllers/contatoController');

const schema = buildSchema(`
  type Query {
    contato(id: Int!): Contato,
    contatos: [Contato],
  }
  type Mutation {
      contatoCreate(input: ContatoInput): Contato,
      contatoUpdate(id: Int!, input: ContatoUpdateInput): Boolean,
      contatoDelete(id: Int!): Boolean
  }
  input ContatoInput {
      nome: String!,
      telefone: String!
  }
  input ContatoUpdateInput {
      nome: String,
      telefone: String
  }
  type Contato {
    id: Int!,
    nome: String!,
    telefone: String!
  }
`);

const rootResolver = {
  contato: (graphqlInput) => contatoController.contatosRead(graphqlInput.id),
  contatos: contatoController.contatosList(),
  contatoCreate: (graphqlInput) => contatoController.contatosCreate(graphqlInput.input),
  contatoUpdate: (graphqlInput) => contatoController.contatosUpdate(graphqlInput.id, graphqlInput.input),
  contatoDelete: (graphqlInput) => contatoController.contatosDelete(graphqlInput.id)
};

const graphql = graphqlHTTP({
  schema,
  rootValue: rootResolver,
  graphiql: true // cria o gui de testes do graphql
});

module.exports = graphql;
