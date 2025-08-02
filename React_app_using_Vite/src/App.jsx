import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Card from './components/Card'


function App() {

  return (
    <>
      <Navbar />
      <div className="cards">
        <Card title="card 1" description="Card 1 desc" />
        <Card title="card 2" description="Card 2 desc" />
        <Card title="card 3" description="Card 3 desc" />
        <Card title="card 4" description="Card 4 desc" />
      </div>

      <Footer />
    </>
  )
}

export default App
