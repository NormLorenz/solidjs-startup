import { For, Setter } from 'solid-js';

import { Book } from '../models/bookShelf.model';

interface BookListProps {
  books: Book[];
  setBooks: Setter<Book[]>;
}

export const BookList = (props: BookListProps) => {

  return (
    <>
      <ul>
        <For each={props.books}>
          {(book) => {
            return (
              <li>
                {book.title} <span style={{ "font-style": "italic" }}> ({book.author})</span>{" "}
                {/* <img src="/src/assets/minus.svg" onclick={() => { props.setbooks((books) => [...books, book]); }}  alt="Delete" width="24" height="24" /> */}
                <img src="/src/assets/minus.svg" alt="Delete" width="24" height="24" />
              </li>
            );
          }}
        </For>
      </ul>
    </>
  );
}
