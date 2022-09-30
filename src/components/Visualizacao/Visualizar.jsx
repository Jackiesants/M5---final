import React, {useEffect, useState} from "react";
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Visualizar.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import VisualizarRemedio from './VisualizarRemedios.jsx'
import VisualizarCliente from './VisualizarClientes.jsx'
import VisualizarFuncionario from './VisualizarFuncionario.jsx'
import VisualizarVenda from './VisualizarVenda.jsx'


function Visualizar() {

  const [selecao, setselecao] = useState();
  const [elementos, setElemento] = useState([])
  const [busca, setBusca] = useState("")

  
  useEffect(()=>{
    const fetchR = async () => {
  
      const url =  `http://api-farmacia-m4.herokuapp.com/${selecao}/${busca}`
      const resposta = await fetch(url)
      const data = await resposta.json()
     // setElemento(data.products);
     if (!data.result.length){
      setElemento([elementos, data.result]);
     }
     else {
      setElemento([elementos, ...data.result]);
     }
     console.log("valor busca" + data.result.length)
   
    }
    fetchR();
    
    console.log("elementos:"+ elementos)
    console.log(selecao)
   

  }, [selecao, busca])    
 
  

  return (
    <Container className="container">
            <div className="title_div_visualizar">
               Visualização de Dados:
            </div>
           <div className="innerContainer"> 
              <Row>
                      <Col className="coluna">  
                      <Card style={{ width: '18rem' }}>
                <Card.Body>
                  <Card.Title>Exibição: </Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">Escolha qual tabela de dados quer visualizar:</Card.Subtitle>

                  <Card.Text>
                      <select value={selecao} onChange={(e) => setselecao(e.target.value)}>
                          <option> Selecionar Tabela </option>
                          <option value="Clientes"> Clientes </option>
                          <option value="Funcionarios"> Funcionários </option>
                          <option value="Remedios"> Remedios </option>
                          <option value="Vendas"> Vendas </option>

                      </select>
                  </Card.Text>
                  <Card.Text>
                    <form>
                      <label>Procure através do ID: </label>

                    <input type="text" name="name" disabled={selecao ? false : true} value={busca} onChange={(e) => setBusca(e.target.value)} />
                    </form>
                  </Card.Text>

                </Card.Body>
                </Card>    
                  </Col>

                <Col xs={8}> 
                  {selecao == 'Clientes' && <VisualizarCliente dados={elementos}/> /*Renderização condicional*/} 
                  {selecao == 'Remedios' && <VisualizarRemedio dados={elementos}/>}
                  {selecao == 'Funcionarios' && <VisualizarFuncionario dados={elementos}/>}
                  {selecao == 'Vendas' && <VisualizarVenda dados={elementos}/>}

              </Col>
    </Row>
    </div>
  </Container>

  )
}

export default Visualizar;