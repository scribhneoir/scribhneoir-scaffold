import { Route, Switch } from 'react-router-dom';
import { Provider } from 'jotai';

import Login from './pages/Login';

function App() {
  return (
    <Provider>
      <Switch>
        <Route path='/'>
          <Login />
        </Route>
      </Switch>
    </Provider>
  );
}

export default App;
