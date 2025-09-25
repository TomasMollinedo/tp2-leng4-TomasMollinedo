import './App.css'
import Encabezado from './Componentes/Encabezado'
import {BrowserRouter, Routes, Route } from 'react-router-dom'
import Uploader from './Paginas/Uploader'

function Home() { return null; }

function App() {

  return (
    <>
      <BrowserRouter>
        <Encabezado/>
      <Routes>
				<Route path="/" element={<Home/>}/>
				<Route path="/Uploader" element={<Uploader/>}/>
			</Routes>
      </BrowserRouter>
		</>
  )
}

export default App;
