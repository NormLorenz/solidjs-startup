
// https://docs.solidjs.com/guides/tutorials/getting-started-with-solid/fetching-data#congratulations

import { createSignal, Show } from 'solid-js';

import { BookList } from '../fragments/BookList';
import { AddBook } from '../fragments/AddBook';
import bookShelfState from '../state/bookShelf.state';

const { books, setBooks } = bookShelfState;

const BookShelf = () => {

  const [showForm, setShowForm] = createSignal(false);
  const toggleForm = () => setShowForm(!showForm());

  return (
    <article>
      <hgroup>
        <h2>Bookshelf Page</h2>
        <h3>My books ({books().length})</h3>
      </hgroup>

      <div>
        <BookList setBooks={setBooks} books={books()} />

        <Show when={showForm()} fallback={
          <button class="outline" onClick={toggleForm}>Add a book</button>
        }>
          <AddBook setBooks={setBooks} />
          <button class="outline" onClick={toggleForm}>Finished adding books</button>
        </Show>
      </div>

    </article >
  );
}

export default BookShelf;
