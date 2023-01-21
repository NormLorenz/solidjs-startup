import type { Component } from 'solid-js';

const App: Component = () => {
  return (
    <>
      <header class="container">
        <section>
          <article>
            <nav>
              <ul>
                <li><strong>Solidjs App</strong></li>
              </ul>
              <ul>
                <li><a href="#">Link 1</a></li>
                <li><a href="#">Link 2</a></li>
                <li><a href="#" role="button" class="outline">Primary</a></li>
              </ul>
            </nav>
          </article>
        </section>
      </header>

      <main class="container">
        <section>
          <article>
            <hgroup>
              <h2>Join Us</h2>
              <h3>Litora torquent per conubia nostra</h3>
            </hgroup>
            <form>
              <div class="grid">
                <input type="text" name="firstname" placeholder="First name" aria-label="First name" required />
                <input type="email" name="email" placeholder="Email address" aria-label="Email address" required />
                <button type="submit">Subscribe</button>
              </div>
              <fieldset>
                <label for="terms">
                  <input type="checkbox" role="switch" id="terms" name="terms" />
                  I agree to the <a href="#">Privacy Policy</a>
                </label>
              </fieldset>
            </form>

          </article>
        </section>
      </main>

      <footer class="container">
        <section>
          <article>
            <span>Copyright © 2022 Water Street Works</span>
          </article>
        </section>
      </footer>
    </>
  );
};

export default App;
