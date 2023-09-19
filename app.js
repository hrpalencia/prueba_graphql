const express = require('express')
const { ApolloServer } = require('apollo-server-express')
const bodyParser = require('body-parser')
const http = require('http')
//const { makeExecutableSchema } = require('graphql-tools')
const { typeDefs } = require('./TypeDefs')
const { resolvers } = require('./resolvers')

const PORT = 3080
const app = express()
const server = http.createServer(app)

//module.exports = app

async function start() {

  // pruebas

  const apolloServer = new ApolloServer ({
    typeDefs,
    resolvers
  })

  await apolloServer.start()

  apolloServer.applyMiddleware({app})
}
  /*
  const schema = makeExecutableSchema({ typeDefs, resolvers })

  app.use('/graphql', bodyParser.json(), graphqlExpress({ schema }))
  app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }))*/
start()
  server.listen(PORT, () => {
    console.log("Server Running on port 8080", PORT)
  })

//}
 // segundo comentario
 // tercer cambio
 // primer comentario cabecera
//start()