import { createSignal } from 'solid-js';

const ContactUs = () => {

  const [count, setCount] = createSignal(0);

  const increment = () => setCount(count() + 1);
  const decrement = () => setCount(count() - 1);
  const clear = () => setCount(0);

  return (
    <article>
      <hgroup>
        <h2>Simple Counter</h2>
        <h3>Work with a counter</h3>
      </hgroup>
      <div class="grid">
        <div>
          <button class="outline counter-button" onClick={() => increment()}>Increment</button>
          <button class="outline counter-button" onClick={() => decrement()}>Decrement</button>
          <button class="outline counter-button" onClick={() => clear()}>Clear</button>
        </div>
        <div></div>
        <div class="counter-number">{count()}</div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </article>
  )
}

export default ContactUs;
