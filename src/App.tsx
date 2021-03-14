import Airtable from "airtable";
import { BrowserRouter as Router, useRoutes } from 'react-router-dom';
import { AirtableContext } from "./AirtableContext";
import { Home } from "./Home"
import "./App.css";
import { Header } from "./Header";

const AddExpensePage = () => {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Header />

      <iframe
        className="airtable-embed airtable-dynamic-height"
        src="https://airtable.com/embed/shrePn1hzEaEzM92c?backgroundColor=cyan"
        width="100%"
        height="932"
        title="add-expense"
        style={{background: 'transparent', border: '0px solid #ccc'}}>
      </iframe>
    </div>
  )
}

const ImportFromRevolut = () => {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Header />
      <iframe
        className="airtable-embed"
        src="https://airtable.com/embed/shrTikm3blao4jou3?backgroundColor=cyan"
        width="100%"
        height="533"
        title="import-from-revolut"
        style={{background: 'transparent', border: '0px solid #ccc'}}>
      </iframe>
    </div>
  )
}

const Routes = () => {
  const routes = useRoutes([
    {
      path: '/add-expense',
      element: <AddExpensePage />,
    },
    {
      path: '/import-from-revolut',
      element: <ImportFromRevolut />,
    },
    {
      element: <Home />,
    },
  ]);

  return routes;
};

const App = () => {
  const airbase = new Airtable({
    apiKey: process.env.REACT_APP_AIRTABLE_API_KEY,
  }).base(process.env.REACT_APP_AIRTABLE_BASE_ID as string);

  return (
    <AirtableContext.Provider value={{ airbase }}>
      <div className="App">
        <Router>
          <Routes />
        </Router>
      </div>
    </AirtableContext.Provider>
  );
};

export default App;
