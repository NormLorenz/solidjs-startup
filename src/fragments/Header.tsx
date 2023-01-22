import { createSignal } from "solid-js";

const Header = () => {

  const [theme, setTheme] = createSignal('dark');

  // https://github.com/picocss/examples/tree/master/company/

  return (
    <article>
      <nav>
        <ul>
          <li><img src="/src/assets/solidjs.svg" alt="Solidjs" width="150px" height="80px" /></li>
        </ul>
        <ul>
          <li><a href="#/">Home</a></li>
          <li><a href="#/counter">Simple Counter</a></li>
          <li><a href="#/contactus">Contact Us</a></li>
          <li>
            <details role="list">
              <summary aria-haspopup="listbox" role="link" class="contrast" style="color: gray;">Theme</summary>
              <ul role="listbox">
                <li><a href="#" data-theme-switcher="auto">Auto</a></li>
                <li><a href="#" data-theme-switcher="light">Light</a></li>
                <li><a href="#" data-theme-switcher="dark">Dark</a></li>
              </ul>
            </details>
          </li>
        </ul>
      </nav>
    </article>
  )
}

export default Header;
