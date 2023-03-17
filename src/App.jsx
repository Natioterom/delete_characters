
import './App.css'
import { Routes, Route } from 'react-router-dom'
import { FormWord } from './Components/FormWord/FormWord'
import { Result } from './Components/Result/Result'


function App() {
 
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={ <FormWord 
        imgBanner={('assets/banner.svg')}
        imgForm='https://photos.google.com/search/_tra_/photo/AF1QipPWTPbHaFEYeMMneVCuDNp31i-H6KRve_PY8rVc'/> } />
        <Route path='/result' element={ <Result /> } />
      </Routes>
     
    </div>
  )
}

export default App
