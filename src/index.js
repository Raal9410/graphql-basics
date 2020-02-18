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
        post: Post!
    }

    type User {
        id: ID!
        name: String!
        email: String!
        age: Int
    }
    
    type Post {
        id: ID!
        title: String!
        body: String!
        published: String
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
        },
        post(){
            return {
                id: '12345',
                title: 'Post Number 1',
                body: 'I am learning GraphQL',
                published: 'me'
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