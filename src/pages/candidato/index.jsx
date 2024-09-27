import { useState } from 'react'
import './index.scss'

import axios from 'axios'
import { Link } from 'react-router-dom';

export default function Candidato() {
    const [nome, setnome] = useState('');
    const [contato, setcontato] = useState('');
    

    async function salvar() {
        const paramCorpo = {
            "nome_empresa": nome,
            "contato_empresa": contato,
            "cnpj": cnpj,
            "cargo":cargo,
            "tipo_contrato": tipoContrato,
            "localizacao": local,
            "modelo_trabalho": modeltrabalho,
            "salario": salario,
            "beneficios": beneficios,
            "requisicoes": requisitos,
            "descricao": descricao,
            "datacriacao": datacriacao
        }

        const url = 'http://localhost:5010/vagas';
        let resp = await axios.post(url, paramCorpo);

        alert('Vaga adicionada na lista negra. Id: ' + resp.data.novoId);
    }


    return (
        <div className='pagina-cadastrar'>
            <h1> VAGAS </h1>


            <div className='form'>
                <div>
                    <label>Nome da Empresa:</label>
                    <input type='text' value={nome} onChange={e => setnome(e.target.value)} />
                </div>
                <div>
                    <label>Contato:</label>
                    <input type='text' value={contato} onChange={e => setcontato(e.target.value)}/>
                </div>
                <div>
                    <label>CNPJ:</label>
                    <input type='text' value={cnpj} onChange={e => setcnpj(e.target.value)} />
                </div>
                <div>
                    <label>Cargo:</label>
                    <input type='text' value={cargo} onChange={e => setcargo(e.target.value)} />
                </div>
                <div>
                    <label>Tipo:</label>
                    <input type='text' value={tipoContrato} onChange={e => settipoContrato(e.target.value)} />
                </div>
                <div>
                    <label>Localização:</label>
                    <input type='text' value={local} onChange={e => setlocal(e.target.value)} />
                </div>
                <div>
                    <label>Modelo Trabalho:</label>
                    <input type='text' value={modeltrabalho} onChange={e => setmodeltrabalho(e.target.value)} />
                </div>
                <div>
                    <label>Salário:</label>
                    <input type='text' value={salario} onChange={e => setsalario(e.target.value)} />
                </div>
                <div>
                    <label>Benefícios:</label>
                    <input type='text' value={beneficios} onChange={e => setbeneficios(e.target.value)} />
                </div>
                <div>
                    <label>Requisitos:</label>
                    <input type='text' value={requisitos} onChange={e => setrequisitos(e.target.value)} />
                </div>
                <div>
                    <label>Descrição:</label>
                    <input type='text' value={descricao} onChange={e => setdescricao(e.target.value)} />
                </div>
                <div>
                    <label>Data Criação:</label>
                    <input type='date' value={datacriacao} onChange={e => setdatacriacao(e.target.value)} />
                </div>
            </div>
            <button onClick={salvar}> SALVAR </button>

            <Link to = '/vagasDisponiveis'><h1>VagasDisponiveis</h1></Link>

        </div>
    )
}