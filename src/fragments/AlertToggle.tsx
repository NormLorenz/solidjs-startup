import alertState from '../state/alert.state';

const AlertToggle = () => {

  const { alert, setAlert } = alertState;

  return (
    <button class="outline alert-toggle" onClick={() => setAlert(!alert())}>Toggle Alert</button>
  )
}

export default AlertToggle;
