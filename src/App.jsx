import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import ConsumoEnergia from './Componentes/ConsumoEnergiaGeneral'
import ConsumoEnergiaCliente from './Componentes/ConsumoEnergiaCliente'
import Base from './Base'


function App() {
  
  return (
    <>
    <Router>
      <Routes>
        <Route exact path='/' Component={Base}></Route>
        <Route exact path='/consumogeneral' Component={ConsumoEnergia}></Route>
        <Route exact path='/consumocliente' Component={ConsumoEnergiaCliente}></Route>
      </Routes>
    </Router>
    </>
  )
}

export default App
