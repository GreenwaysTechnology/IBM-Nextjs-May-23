import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from '@apollo/server/standalone';
import { USERS } from "./mock-data/users.js";
//Define schema
const typeDefs = `
#Simple Query which returns Hello World
 
 type User {
    id:ID
    firstName:String
    lastName:String
    age:Int
    points:Float
    status:Boolean
 }
 input UserResponseInput {
    id:ID
    firstName:String
    lastName:String
    age:Int
    points:Float
    status:Boolean
 }
 type Query {
   users:[User]
   userById(id:ID!):User
 }
`;
//Define Resolver: biz logic
const resolvers = {
    //Query Implmentation
    Query: {
        users() {
            //return object
            return USERS;
        },
        //here _ is just convention to skip the arg
        userById(_, args) {
            const { id } = args;
            //filter data based on id
            return USERS.find(user => {
                return user.id === +id;
            });
        }
    }
    //Mutation
    //Subscription
};
//create instance of ApolloServer and pass schema , resolver as config
const server = new ApolloServer({
    typeDefs: typeDefs,
    resolvers: resolvers
});
const { url } = await startStandaloneServer(server, {
    listen: {
        port: 4000
    }
});
console.log(`Apollo Server is Ready at ${url}`);
