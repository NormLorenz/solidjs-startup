import { useRoutes } from '@solidjs/router';
import type { Component } from 'solid-js';
import Footer from './fragments/Footer';
import Header from './fragments/Header';

import { routes } from './routes';

const Routes = useRoutes(routes);

const App: Component = () => {
  return (
    <>
      <header class="container">
        <section>
          <Header />
        </section>
      </header>

      <main class="container">
        <section>
          <Routes />
        </section>
      </main>

      <footer class="container">
        <section>
          <Footer />
        </section>
      </footer>
    </>
  );
};

export default App;
