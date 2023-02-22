import { For } from 'solid-js';

import { Book } from '../models/bookShelf.model';

interface BookListProps {
  books: Book[];
}

export const BookList = (props: BookListProps) => {

  const totalBooks = () => props.books.length;

  return (
    <>
      <h3>My books ({totalBooks()})</h3>
      <ul class="list-group">
        <For each={props.books}>
          {(book) => {
            return (
              <li class="list-group-item">
                {book.title} <span style={{ "font-style": "italic" }}> ({book.author})</span>
              </li>
            );
          }}
        </For>
      </ul>
    </>
  );
}
