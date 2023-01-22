import { createResource, createSignal, Show } from 'solid-js';

const Home = () => {

  const [keyword, setKeyword] = createSignal('');

  const [castList] = createResource(keyword, async () => {
    return fetch('./config.json')
      .then(res => res.json())
      .then(data => data.filter(
        (item: { name: string; }) => item.name.toLowerCase()
          .match(keyword().toLowerCase())
      ))
  });

  return (
    <article>
      <h2>Home</h2>
      <div class="container">
        <h3>Return Stargazers Cast</h3>
        <input onKeyUp={(e) => setKeyword(e.currentTarget.value)} type="text" />
        <Show when={keyword()} fallback={<p>Castmembers await being discovered</p>}>
          {JSON.stringify(castList())}
        </Show>
      </div>
    </article>
  )
}

export default Home;
