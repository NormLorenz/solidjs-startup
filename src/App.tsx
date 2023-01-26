import { useRoutes } from '@solidjs/router';
import type { Component } from 'solid-js';
import Footer from './fragments/Footer';
import Header from './fragments/Header';

import { routes } from './routes';

const Routes = useRoutes(routes);

const App: Component = () => {

  console.log('base url:', import.meta.env.BASE_URL);
  console.log('is production:', import.meta.env.PROD);
  console.log('is development:', import.meta.env.DEV);
  console.log('is server side rendering:', import.meta.env.SSR);
  console.log('mode:', import.meta.env.MODE);
  console.log('some key:', import.meta.env.VITE_SOME_KEY);
  console.log('some uri:', import.meta.env.VITE_SOME_URI);
  console.log('some secret:', import.meta.env.VITE_SOME_SECRET);

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
