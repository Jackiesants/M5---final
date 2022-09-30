import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';


const VisualizarClientes = ({dados})=> {

        return (
           <Table striped bordered hover size="sm">
            <thead>
              <tr>
                <th>ID Cliente</th>
                <th>Nome Clinte</th>
                <th>Email Cliente</th>
                <th>Tel Cliente</th>
                <th>CPF Cliente</th>

                
              </tr>
            </thead>
            <tbody>
                 
                 {
                    dados.map((cliente, index) => 
                    <tr key={index}>
                    <td >{cliente.ID}</td>
                    <td>{cliente.NOME}</td>
                    <td>{cliente.EMAIL}</td>
                    <td>{cliente.TELEFONE}</td>
                    <td>{cliente.CPF}</td>
                 

                  </tr>
                    )}

             
              
            </tbody>
          </Table>
        

        )
    



}

export default VisualizarClientes;