import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cadastrarvaga from './pages/vaga';
import Consultar from './pages/vagasDisponiveis';


export default function Navegacao() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/vaga' element={<Cadastrarvaga />} />
                <Route path='/vagasDisponiveis' element={<Consultar />} />

            </Routes>
        </BrowserRouter>
    );
}