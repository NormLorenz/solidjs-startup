import { Show } from 'solid-js';

import alertState from './alert.state';

const AlertIndicator = () => {

  const { alert } = alertState;

  return (
    <Show when={alert()} fallback={<div></div>}>
      <div class="alert-indicator"></div>
    </Show>
  )
}

export default AlertIndicator;
