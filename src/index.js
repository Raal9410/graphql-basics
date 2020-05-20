import {GraphQLServer} from 'graphql-yoga'

//Scalar Types
// 1. String
// 2. Boolean
// 3. Int
// 4. Float
// 5. ID 

// 1. Type Definitions
const typeDefs = `
    type Query {
        greeting(name: String, position: String): String!
        add(a: Float!, b: Float): Float!
        me: User!
        post: Post!
    },
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
// 2. Resolvers
const resolvers = {
    Query: {
        add(parent, args, ctx, info){
            return args.a + args.b
        },
        greeting(parent, args, ctx, info){
            if(args.name && args.position){
                return `Hello, ${args.name}! You are my favorite ${args.position}`
            }
            return 'Hello'
        },
        me(){
            return{
                id: '1234098',
                name: 'Raul',
                email: 'raul@example.com',
            }
        },
        post(){
            return {
                id: '4567890',
                title: 'First post',
                body: 'GraphQL post 101',
                published: false
            }
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