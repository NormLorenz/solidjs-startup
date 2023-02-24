import { createSignal, onMount } from 'solid-js';
import AlertIndicator from './AlertIndicator';

const Header = () => {

  const [theme, setTheme] = createSignal('dark');

  onMount(async () => {
    const theme = localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    setTheme(theme);
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  });

  const toggleTheme = (): void => {
    setTheme(theme() === 'dark' ? 'light' : 'dark');
    document.documentElement.setAttribute('data-theme', theme());
    localStorage.setItem('theme', theme());
  }

  const toggleLabel = (): string => {
    return theme() === 'dark' ? 'Light Mode' : 'Dark Mode';
  }

  return (
    <article>
      <nav>
        <ul>
          <li><img src="/src/assets/solidjs.svg" alt="Solidjs" width="200px" height="80px" /></li>
          <AlertIndicator />
        </ul>
        <ul>
          <li><a href="#/">Home</a></li>
          <li><a href="#/counter">Counter</a></li>
          <li><a href="#/contactus">Contact Us</a></li>
          <li><a href="#/about">About</a></li>
          <li>
            <details role="list">
              <summary class="outline" role="button">More</summary>
              <ul role="listbox">
                <li><a href="#/bookshelf">Bookshelf</a></li>
                <li><a href="#/chart">Chart</a></li>
                <li><a href="#/tasks">Tasks</a></li>
              </ul>
            </details>
          </li>
          <li>
            <button class="outline theme-button" onClick={() => { toggleTheme() }} type="submit">{toggleLabel()}</button>
          </li>
        </ul>
      </nav>
    </article>
  )
}

export default Header;
