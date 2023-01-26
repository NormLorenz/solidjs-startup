import alertState from './alert.state';

const AlertToggle = () => {

  const { alert, setAlert } = alertState;

  return (
    <button class="outline" onClick={() => setAlert(!alert())}>Toggle Alert</button>
  )
}

export default AlertToggle;
