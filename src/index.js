import {GraphQLServer} from 'graphql-yoga';

/*GraphQL Scalar Types
-String
-Boolean
-Int (whole numbers)
-Float (numbers with decimals)
-ID
*/

//Type definitions (application schema)
const typeDefs = `
    type Query {
        me: User!
    }

    type User {
        id: ID!
        name: String!
        email: String!
        age: Int
    }
`

//Resolvers
const resolvers = {
    Query: {
        me() {
            return {
                id: '123098',
                name: 'Raul',
                email: 'raul@gmail.com',
                age: 25
            }
        }
    }
}

const server = new GraphQLServer({
    typeDefs: typeDefs,
    resolvers: resolvers
})

server.start(()=> {
    console.log('The server is up')
})