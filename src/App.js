import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Header from './component/Header'
import HomePage from './pages/HomePage';
import SearchPage from './pages/SearchPage'

function App() {

  return (
    <div ClassName="app">
      <Router>
        <Header />
        <Route path='/' exact>
          <HomePage />
        </Route>
        <Route path='/s/:searchTerm'>
          <SearchPage />
        </Route>
      </Router>
    </div>
  );
}

export default App;
