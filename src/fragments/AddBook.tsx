import { createSignal, Setter, createResource, For, Show } from "solid-js";

import { Book } from "../models/Bookshelf.model";
import { bookShelfService } from '../services/bookShelf.service';

interface AddBookProps {
  setBooks: Setter<Book[]>;
}

export const AddBook = (props: AddBookProps) => {

  const [input, setInput] = createSignal('');
  const [query, setQuery] = createSignal('');

  const [books] = createResource<Book[], string>(query, bookShelfService);

  return (
    <>
      <form>
        <input type="text" placeholder="Search books*" name="title" value={input()} onInput={(e) => { setInput(e.currentTarget.value); }} />
        <button class="outline" type="submit" onClick={(e) => { e.preventDefault(); setQuery(input()); }}>Search</button>
      </form>

      <Show when={!books.loading} fallback={<>Searching...</>}>
        <ul>
          <For each={books()}>
            {(book) => (
              <li>
                {book.title} by {book.author}{" "}
                <img src="/src/assets/plus.svg" onclick={() => { props.setBooks((books) => [...books, book]); }} alt="Add" width="24" height="24" />
              </li>
            )}
          </For>
        </ul>
      </Show>
    </>
  )
}
