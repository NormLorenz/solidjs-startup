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
      <h2>Home - Find Stargazers</h2>
      <div class="grid">
        <div>
          <input onKeyUp={(e) => setKeyword(e.currentTarget.value)} placeholder="Enter search criteria" type="text" />
        </div>
        <div></div>
        <div></div>
      </div>
      <Show when={keyword()} fallback={<p>Castmembers await being discovered</p>}>
        {JSON.stringify(castList())}
      </Show>
    </article>
  )
}

export default Home;
