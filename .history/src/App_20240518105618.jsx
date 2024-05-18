import Header from './components/header'
import Intro from './components/intro'
import Sponsers from './components/Sponsers'
import Purchase from './components/Purchase_btn'
import Pages from './components/Pages'
import Browser from './components/Browser'
import Feature from './components/feature'
import Footer from './components/Footer'

function App() {


  return (
    <>
    <div className="flex flex-col justify-center items-center gap-3">
      <Header></Header>
      <Intro></Intro>
      <Sponsers></Sponsers>
      <Purchase></Purchase>
      <Pages></Pages>
      <Browser></Browser>
      <Feature></Feature>
      <Footer></Footer>
    </div>
    </>
  )
}

export default App
