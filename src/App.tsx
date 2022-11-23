import MyNavBar from "./components/MyNavBar"
import GoodsList from "./components/GoodsList"
import { BrowserRouter as Router } from 'react-router-dom'
import { ShoppingContext } from './context/ShoppingContext'

function App() {

  return (
    <ShoppingContext>
      <Router>
        <div className="App" style={{ height: '100vh' }}>
          <MyNavBar />
          <GoodsList />
        </div>
      </Router>
    </ShoppingContext>
  )
}

export default App
