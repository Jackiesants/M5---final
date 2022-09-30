
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';


const VisualizarRemedios = ({dados})=> {

        return (
           <Table striped bordered hover size="sm">
            <thead>
              <tr>
              <th>ID Remédio</th>
                <th>Nome Remédio</th>
                <th>Principio ativo</th>
                <th>Lab</th>
                <th>Preço</th>
                <th>Estoque</th>
                
              </tr>
            </thead>
            <tbody>
                 
                 {
                    dados.map((remedio, index) => 
                    <tr key={index}>
                    <td>{remedio.ID}</td>
                    <td>{remedio.NOME}</td>
                    <td>{remedio.PRINCIPIO_ATIVO}</td>
                    <td>{remedio.LABORATORIO}</td>
                    <td>{remedio.PRECO}</td>
                    <td>{remedio.ESTOQUE}</td>
                  </tr>
                    )}

             
              
            </tbody>
          </Table>
        

        )
    



}

export default VisualizarRemedios;