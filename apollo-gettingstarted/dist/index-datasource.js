import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
//Define Schema
const typeDefs = `
 type Book {
    title:String
    author:String
 }
 type Query {
    books:[Book]
 }

`;
//mock data
const BOOKS = [{
        title: 'GraphQl in Action',
        author: 'A'
    },
    {
        title: 'Apollo in Action',
        author: 'B'
    },
    {
        title: 'Typescript in Action',
        author: 'C'
    },
    {
        title: 'Rest in Action',
        author: 'D'
    }
];
//data source class
//Data source 
export class BookDataSource {
    //curd opertaions
    //get
    getBooks() {
        return BOOKS;
    }
}
//Define Resolver
const resolvers = {
    //Query
    Query: {
        books(parent, args, contextValue, info) {
            return contextValue.dataSources.booksAPI.getBooks();
        }
    }
};
const server = new ApolloServer({
    typeDefs,
    resolvers,
});
//start the webserver and deploy
const { url } = await startStandaloneServer(server, {
    listen: {
        port: 4000
    },
    context: async ({ req, res }) => {
        return {
            dataSources: {
                booksAPI: new BookDataSource()
            }
        };
    }
});
console.log(`Apollo Server is Ready at ${url}`);
