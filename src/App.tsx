import Airtable from 'airtable';
import logo from './logo.svg';
import { AirtableContext } from './AirtableContext';
import './App.css';

const App = () => {
  const airbase = new Airtable({
    apiKey: process.env.REACT_APP_AIRTABLE_API_KEY,
  }).base(process.env.REACT_APP_AIRTABLE_BASE_ID as string);

  return (
      <AirtableContext.Provider value={{ airbase }}>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
      </AirtableContext.Provider>
  );
}

export default App;
