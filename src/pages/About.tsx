import AlertToggle from "../fragments/AlertToggle";

const About = () => {
  return (
    <article>
      <hgroup>
        <h2>About Page</h2>
        <h3>All about Solidjs</h3>
      </hgroup>
      <details open>
        <summary>
          A brief summary of Solidjs
        </summary>
        <p>
          Solid is a declarative JavaScript library for creating user interfaces.
          Instead of using a Virtual DOM, it compiles its templates to real DOM
          nodes and updates them with <strong>fine-grained</strong> reactions. Declare your state
          and use it throughout your app, and when a piece of state changes, only
          the code that depends on it will rerun.
        </p>
      </details>
      <p>
        <AlertToggle />
      </p>
    </article>

  )
}

export default About;
