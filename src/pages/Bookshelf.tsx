
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
    <div class="container">

      <div class="row">
        <div class="col d-flex justify-content-center">
          <h1>Solid's Bookshelf</h1>
        </div>
      </div>

      <div class="row">
        <div class="col-2"></div>
        <div class="col-8">

          <BookList books={books()} />

          <div class="container">
            <div class="row">
              <div class="col-1"></div>
              <div class="col-10">

                <Show when={showForm()} fallback={
                  <div class="p-3">
                    <button class="btn btn-outline-primary" type="button" onClick={toggleForm}>Add a book</button>
                  </div>
                }>
                  <AddBook setBooks={setBooks} />
                  <div class="p-3">
                    <button class="btn btn-outline-primary " type="button" onClick={toggleForm}>Finished adding books</button>
                  </div>
                </Show>
              </div>
              <div class="col-1"></div>
            </div>
          </div>

        </div>
        <div class="col-2"></div>
      </div>

    </div >
  );
}

export default BookShelf;
