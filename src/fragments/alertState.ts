import { createSignal, createRoot } from 'solid-js';

const alertState = () => {
  const [alert, setAlert] = createSignal(true);
  return { alert, setAlert };
}

export default createRoot(alertState);
