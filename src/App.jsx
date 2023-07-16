import About from "./components/About"
import Footer from "./components/Footer"
import Info from "./components/Info"
import Interest from "./components/Interest"

function App() {

  return (
    <div className="app">
      <div className="container">
        <Info/>
        <div className="text">
          <About/>
          <Interest/>
        </div>
        <Footer/>
      </div>
    </div>
  )
}

export default App
