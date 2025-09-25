import './App.css'
import Encabezado from './Componentes/Encabezado'
import {BrowserRouter, Routes, Route } from 'react-router-dom'
import Uploader from './Paginas/Uploader'
import Contacto from './Paginas/Contacto'

function Home() { return null; }

function App() {

  return (
    <>
      <BrowserRouter>
        <Encabezado/>
      <Routes>
				<Route path="/" element={<Home/>}/>
				<Route path="/Uploader" element={<Uploader/>}/>
        <Route path="/Contacto" element={<Contacto/>}/>
			</Routes>
      </BrowserRouter>
		</>
  )
}

export default App;
