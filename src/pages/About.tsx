const About = () => {
  return (
    <article>
      <hgroup>
        <h2>About</h2>
        <h3>All about Solidjs</h3>
      </hgroup>
      <p>
        Solid is a declarative JavaScript library for creating user interfaces.
        Instead of using a Virtual DOM, it compiles its templates to real DOM
        nodes and updates them with <strong>fine-grained</strong> reactions. Declare your state
        and use it throughout your app, and when a piece of state changes, only
        the code that depends on it will rerun.
      </p>
    </article>
  )
}

export default About;
