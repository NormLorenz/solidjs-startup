import { createSignal, Setter, createResource, For, Show } from "solid-js";

import { Book } from "../models/Bookshelf.model";
import { bookShelfService } from '../services/bookShelf.service';

export interface AddBookProps {
  setBooks: Setter<Book[]>;
}

export const AddBook = (props: AddBookProps) => {

  const [input, setInput] = createSignal('');
  const [query, setQuery] = createSignal('');

  const [data] = createResource<Book[], string>(query, bookShelfService);

  return (
    <div class="container">
      <form>

        <div class="row">
          <div class="col-lg-6">
            <div class="form-group mt-2">
              <div class="validation-container">
                <input type="email" class="form-control" placeholder="Your email*" name="email" />
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="form-group mt-2">
              <input type="text" class="form-control" placeholder="Your phone (optional)" name="phone" />
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-lg-6">
            <div class="form-group mt-2">
              <div class="validation-container">
                <input type="text" class="form-control" placeholder="Search books*" name="title" value={input()}
                  onInput={(e) => { setInput(e.currentTarget.value); }} />
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="form-group mt-2">
              <button class="btn btn-outline-primary" type="submit" onClick={(e) => { e.preventDefault(); setQuery(input()); }}>Search</button>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-lg-12">
            <div class="form-group mt-2"></div>
          </div>
        </div>

      </form>

      <div class="row">
        <div class="col-lg-12">
          <div class="form-group mt-2">
            <Show when={!data.loading} fallback={<>Searching...</>}>
              <ul class="list-group">
                <For each={data()}>
                  {(book) => (
                    <li class="list-group-item">
                      {book.title} by {book.author}{" "}
                      <button type="button" class="btn btn-outline-primary" aria-label={`Add ${book.title} by ${book.author} to the bookshelf`}
                        onClick={(e) => { e.preventDefault(); props.setBooks((books) => [...books, book]); }}>
                        Add
                      </button>
                    </li>
                  )}
                </For>
              </ul>
            </Show>
          </div>
        </div>
      </div>

    </div>
  )
}
