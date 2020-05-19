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
        title: String!
        price: Float!
        releaseYear: Int
        rating: Int
        inStock: Boolean
    }
`
// 2. Resolvers
const resolvers = {
    Query: {
        title(){
            return 'PS5'
        },
        price(){
            return 499.99
        },
        releaseYear(){
            return 2021
        },
        rating(){
            return 5
        },
        inStock(){
            return false
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