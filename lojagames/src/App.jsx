import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/footer/Footer'
import NavBar from './components/navbar/Navbar'
import Home from './pages/home/Home'
import ListarCategoria from "./components/categoria/listarCategorias/ListarCategoria.tsx"
import FormCategoria from './components/categoria/formCategoria/FormCategoria.tsx'
import DeletarCategoria from './components/categoria/deletarCategoria/DeletarCategoria.tsx'


function App() {
    return (
        <>
            <BrowserRouter>
                <NavBar />
                <div className="min-h-[80vh]">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/home" element={<Home />} />
                        <Route path='/categorias' element={<ListarCategoria/>}/>
                        <Route path="/cadastroCategoria" element={<FormCategoria />} />
                        <Route path="/editarCategoria/:id" element={<FormCategoria />} />
                        <Route path="/deletarCategoria/:id" element={<DeletarCategoria />} />
                    </Routes>
                </div>
                <Footer />
            </BrowserRouter>
        </>
    )
}

export default App