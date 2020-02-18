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
        greeting(name: String, position: String): String!
        add(a: Float, b: Float): Float!
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
        published: Boolean!
    }

`

//Resolvers
const resolvers = {
    Query: {
        greeting(parent, args, ctx, info){
            if(args.name && args.position){
                return `Hello ${args.name}! You are my favorite ${args.position}`
            }
            console.log(args)
            return 'Hello!'
        },
        add(parent, args, ctx, info){
                return args.a + args.b
        },
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
                published: true,
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