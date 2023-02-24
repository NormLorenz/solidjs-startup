import { For } from 'solid-js';

import { Book } from '../models/bookShelf.model';

interface BookListProps {
  books: Book[];
}

export const BookList = (props: BookListProps) => {

  return (
    <>
      <ul>
        <For each={props.books}>
          {(book) => {
            return (
              <li>
                {book.title} <span style={{ "font-style": "italic" }}> ({book.author})</span>
              </li>
            );
          }}
        </For>
      </ul>
    </>
  );
}
