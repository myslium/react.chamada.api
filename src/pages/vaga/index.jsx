import { useState } from 'react'
import './index.scss'

import axios from 'axios'
import { Link, useParams } from 'react-router-dom';

export default function Cadastrarvaga() {
    const [nome, setnome] = useState('');
    const [contato, setcontato] = useState('');
    const [cnpj, setcnpj] = useState('');
    const [cargo, setcargo] = useState('');
    const [tipoContrato, settipoContrato] = useState('');
    const [local, setlocal] = useState('');
    const [modeltrabalho, setmodeltrabalho] = useState('');
    const [salario, setsalario] = useState(0);
    const [ beneficios, setbeneficios] = useState('');
    const [requisitos, setrequisitos] = useState('');
    const [descricao, setdescricao] = useState('');
    const [datacriacao, setdatacriacao] = useState('');

    const {id} = useParams()

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

        if(id===undefined){
            const url = 'http://localhost:5010/vagas';
            let resp = await axios.post(url, paramCorpo);
    
            alert('Vaga adicionada na lista vagas. Id: ' + resp.data.novoId);

        }
        else{
            const url = `http://localhost:5010/vagas/${id}`;
            let resp = await axios.put(url, paramCorpo);
    
            alert('Vaga alterada na lista vagas' );
        }

       
    }


    return (
        <div className='pagina-cadastrar'>
            <h1> VAGAS </h1>
            <p>{id}</p>


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