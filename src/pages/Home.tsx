import { createResource, createSignal, Show } from 'solid-js';

// animal type
type animal = {
  id: number;
  commonName: string;
  scientificName: string;
  type: string;
  diet: string;
  groupName: string;
  lifeSpan: string;
  description: string;
}

const Home = () => {

  const [keyword, setKeyword] = createSignal('');

  const [castList] = createResource(keyword, async () => {
    return fetch('./animals.json')
      .then(res => res.json())
      .then(data => data.filter(
        (item: { commonName: string; }) => item.commonName.toLowerCase()
          .match(keyword().toLowerCase())
      ))
  });

  return (
    <article>
      <hgroup>
        <h2>Home</h2>
        <h3>Search the animals.json file by common name</h3>
      </hgroup>
      <div class="grid">
        <div>
          <input onKeyUp={(e) => setKeyword(e.currentTarget.value)} placeholder="Enter search criteria" type="text" />
        </div>
        <div></div>
        <div></div>
      </div>
      <Show when={keyword()} fallback={<p>Waiting for you to type something</p>}>
        {JSON.stringify(castList())}
      </Show>
    </article>
  )
}

export default Home;
