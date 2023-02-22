import { createSignal, createRoot } from "solid-js";

import { Book } from './bookShelf.model';

const bookShelfState = () => {

  const initialBooks: Book[] = [
    { title: 'Code Complete', author: 'Steve McConnell' },
    { title: 'The Hobbit', author: 'J.R.R. Tolkien' },
    { title: 'Tarzan and the lost empire', author: 'Edgar Rice Burroughs' },
  ];

  const [books, setBooks] = createSignal(initialBooks);
  return { books, setBooks };

}

export default createRoot(bookShelfState);
