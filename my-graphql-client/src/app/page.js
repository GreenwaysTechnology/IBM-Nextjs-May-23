import { getClient } from "../../lib/client";
import { gql } from "@apollo/client";

//Query creation using "gql function from the Apollo Client"
const query = gql`query getBooks {
      books {
         author
         title
      }        
}`
export default async function Page() {
  const { data: { books } } = await getClient().query({ query });
  return <main>
    <ul>
      {books.map(book => {
        return <li>{book.author} - {'title'} - {book.title} </li>
      })}
    </ul>
  </main>
}