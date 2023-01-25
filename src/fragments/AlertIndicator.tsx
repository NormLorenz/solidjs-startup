import { Show } from 'solid-js';

import alertState from './alertState';

const AlertIndicator = () => {

  const { alert, setAlert } = alertState;

  return (
    <Show when={alert()} fallback={<div></div>}>
      <div class="blob"></div>
    </Show>
  )
}

export default AlertIndicator;
