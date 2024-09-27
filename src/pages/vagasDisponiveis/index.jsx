import { useState } from 'react'
import './index.scss'

import axios from 'axios'
import { Link } from 'react-router-dom';



export default function Consultar() {
    const [vagas, setVagas] = useState([]);


    async function buscar() {
        const url = 'http://localhost:5010/vagas';
        let resp = await axios.get(url);
        setVagas(resp.data)
    }



    return (
        <div className='pagina-consultar'>
            <Link to = '/vaga'><h1>Voltar para vaga</h1></Link>
            <h1> CONSULTAR </h1>

            <button onClick={buscar}>Buscar</button>

            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Empresa</th>
                        <th>Contato</th>
                        <th>CNPJ</th>
                        <th>Cargp</th>
                        <th>Tipo contrato</th>
                        <th>Localizacao</th>
                        <th>Modelo trabalho</th>
                        <th>Salario</th>
                        <th>Beneficios</th>
                        <th>Requisitos</th>
                        <th>Descricao</th>
                        <th>Data</th>


                    </tr>
                </thead>

                <tbody>
                    {vagas.map((item, pos) => 
                        <tr key={pos}>
                            <td>{item.id}</td>
                            <td>{item.nome_empresa}</td>
                            <td>{item.contato_empresa}</td>
                            <td>{item.cnpj}</td>
                            <td>{item.cargo}</td>
                            <td>{item.contrato}</td>
                            <td>{item.localizacao}</td>
                            <td>{item.modelo_trabalho}</td>
                            <td>{item.salario}</td>
                            <td>{item.beneficios}</td>
                            <td>{item.requisicoes}</td>
                            <td>{item.descricao}</td>
                            <td>{new Date(item.datacriacao).toLocaleDateString()}</td>

                        </tr>
                    )}
                </tbody>

            </table>

           
        </div>
    )
}