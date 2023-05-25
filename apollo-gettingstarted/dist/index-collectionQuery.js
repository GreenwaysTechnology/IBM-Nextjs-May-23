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

 type Query {
   user:[User]
 }
`;
//Define Resolver: biz logic
const resolvers = {
    //Query Implmentation
    Query: {
        user() {
            //return object
            return USERS;
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
