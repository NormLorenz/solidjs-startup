import { Chart as Chartjs } from 'chart.js/auto';
import { onMount } from 'solid-js';

import Canvas from '../fragments/Canvas';

// https://stackabuse.com/guide-to-creating-charts-in-javascript-with-chartjs/
// https://www.solidjs.com/tutorial/bindings_forward_refs

const Chart = () => {

  let canvas: HTMLCanvasElement;

  onMount(() => {
    const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;

    const data = {
      'React': 202409,
      'Angular': 86433,
      'Svelte.js': 65715,
      'Vue': 202372,
      'Ember.js': 22407,
      'Backbone.js': 27992,
      'Solid.js': 25679,
    };

    const myChart = new Chartjs(ctx, {
      type: 'bar',
      data: {
        labels: Object.keys(data),
        datasets: [
          {
            label: 'Number of GitHub Stars',
            data: Object.values(data),
          },
        ],
      },
    });
  });

  return (
    <article>
      <hgroup>
        <h2>Chart Page</h2>
        <h3>Work with a chart</h3>
      </hgroup>
      <div>
        {/* @ts-ignore */}
        <Canvas ref={canvas} />
      </div>
    </article>
  )
}

export default Chart;
