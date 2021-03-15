import { Link } from "react-router-dom"

const Header = () => {
  return (
      <header style={{ marginBottom: "5em" }}>
        <h1>ExpenseIT</h1>
        <hr />
        <div style={{display: 'flex', alignItems: 'center'}}>
          <Link to={`${process.env.REACT_APP_BASE_URL}/`}>Home</Link>
          <span style={{fontSize: '1.5em', margin: '0 0.5em'}}>•</span>
          <Link to={`${process.env.REACT_APP_BASE_URL}/add-expense`}>Add Expense</Link>
          <span style={{fontSize: '1.5em', margin: '0 0.5em'}}>•</span>
          <Link to={`${process.env.REACT_APP_BASE_URL}/import-from-revolut`}>Revolut import</Link>
        </div>
      </header>
  )
}

export { Header }
