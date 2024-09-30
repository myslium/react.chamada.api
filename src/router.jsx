import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cadastrarvaga from './pages/vaga';
import Consultar from './pages/vagasDisponiveis';


export default function Navegacao() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Cadastrarvaga />} />
                <Route path='/:id' element={<Cadastrarvaga />} />
                <Route path='/vagasDisponiveis' element={<Consultar />} />

            </Routes>
        </BrowserRouter>
    );
}