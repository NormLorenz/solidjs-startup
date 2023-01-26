import { createSignal, createRoot } from 'solid-js';

const alertState = () => {
  const [alert, setAlert] = createSignal(false);
  return { alert, setAlert };
}

export default createRoot(alertState);
