
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';


const VisualizarFuncionarios = ({dados})=> {

        return (
           <Table striped bordered hover size="sm">
            <thead>
              <tr>
                <th>ID Funcionário</th>
                <th>Nome Funcionário</th>
                <th>Cargo</th>
                <th>Telefone</th>
                <th>Email</th>
                <th>Cpf</th>
                
              </tr>
            </thead>
            <tbody>
                 
                 {
                    dados.map((funcionario, index) => 
                    <tr key={index}>
                    <td>{funcionario.ID}</td>
                    <td>{funcionario.NOME}</td>
                    <td>{funcionario.CARGO}</td>
                    <td>{funcionario.TELEFONE}</td>
                    <td>{funcionario.EMAIL}</td>
                    <td>{funcionario.CPF}</td>
                 

                  </tr>
                    )}

             
              
            </tbody>
          </Table>
        

        )
    



}

export default VisualizarFuncionarios;