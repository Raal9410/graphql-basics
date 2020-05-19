import {GraphQLServer} from 'graphql-yoga'

// 1. Type Definitions
const typeDefs = `
    type Query {
        hello: String!
        name: String!
        location: String!
        bio: String!
    }
`
// 2. Resolvers
const resolvers = {
    Query: {
        hello () {
            return 'This is my first query!'
        },
        name () {
            return 'Raul'
        },
        location(){
            return 'Mexico City'
        },
        bio(){
            return 'I am learning GraphQL'
        }
    }
}

const server = new GraphQLServer({
    typeDefs,
    resolvers,
})

server.start(() => {
    console.log('The sever is up')
})