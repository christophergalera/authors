import './App.css';
import { Router } from '@reach/router';
import NewAuthor from './components/author';
import AllAuthors from './components/allAuthors'
import EditAuthor from './components/editAuthor';


function App() {
  return (
    <div className="App">
      <Router>
        <AllAuthors path="/"/>
        <NewAuthor path="/author/new"/>
        <EditAuthor path ="/authors/:id/edit"/>
      </Router>
    </div>
  );
}

export default App;
