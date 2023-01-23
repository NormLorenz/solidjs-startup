import { createSignal, onMount } from "solid-js";

const Header = () => {

  const [theme, setTheme] = createSignal('dark');

  onMount(async () => {
    const theme = localStorage.getItem('theme') || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
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
    return theme() === 'dark' ? 'Light Theme' : 'Dark Theme';
  }

  return (
    <article>
      <nav>
        <ul>
          <li><img src="/src/assets/solidjs.svg" alt="Solidjs" width="200px" height="80px" /></li>
        </ul>
        <ul>
          <li><a href="#/">Home</a></li>
          <li><a href="#/counter">Simple Counter</a></li>
          <li><a href="#/contactus">Contact Us</a></li>
          <li>
            <input type="checkbox" role="switch" id="theme" name="theme" onClick={() => { toggleTheme() }} />{toggleLabel()}
          </li>
        </ul>
      </nav>
    </article>
  )
}

export default Header;
