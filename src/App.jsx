
import './App.css'
import { Routes, Route } from 'react-router-dom'
import { FormWord } from './Components/FormWord/FormWord'
import { Result } from './Components/Result/Result'


function App() {
 
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={ <FormWord 
        imgBanner='src/assets/img/banner.svg'
        imgForm='src/assets/img/lupa.png'/> } />
        <Route path='/result' element={ <Result /> } />
      </Routes>
     
    </div>
  )
}

export default App
