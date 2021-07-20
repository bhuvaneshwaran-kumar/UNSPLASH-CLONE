import Header from './component/Header'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {

  return (
    <div ClassName="app">
      <Router>
        <Header />
      </Router>
    </div>
  );
}

export default App;
