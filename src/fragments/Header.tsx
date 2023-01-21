const Header = () => {

  return (
    <article>
      <nav>
        <ul>
          <li><img src="/src/assets/solidjs.svg" alt="Solidjs" width="150px" height="80px" /></li>
          <li><strong>Startup</strong></li>
        </ul>
        <ul>
          <li><a href="#/">Home</a></li>
          <li><a href="#/counter">Counter</a></li>
          <li><a href="#/contactus">Contact Us</a></li>
          <li><a href="#" role="button" class="outline">Log Off</a></li>
        </ul>
      </nav>
    </article>
  )
}

export default Header;
