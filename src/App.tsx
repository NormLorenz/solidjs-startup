import type { Component } from 'solid-js';

const App: Component = () => {
  return (
    <>
      <header class="container">
        <section>
          <article>
            <nav>
              <ul>
                <li><img src="/src/assets/solidjs.svg" alt="Solidjs" width="150px" height="80px" /></li>
                <li><strong>Startup</strong></li>
              </ul>
              <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Counter</a></li>
                <li><a href="#">Contact Us</a></li>
                <li><a href="#" role="button" class="outline">Log Off</a></li>
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
