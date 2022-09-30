import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';


const VisualizarVendas = ({dados})=> {

        return (
           <Table striped bordered hover size="sm">
            <thead>
              <tr>
              <th>ID Venda</th>
                <th>ID Remedio</th>
                <th>Quantidade</th>
                <th>Preço</th>
                <th>Desconto</th>
                <th>ID Funcionario</th>
                <th>ID Cliente</th>
                <th>Total:</th>

                
              </tr>
            </thead>
            <tbody>
                 
                 {
                    dados.map((venda, index) => 
                    <tr key={index}>
                    <td>{venda.ID}</td>
                    <td>{venda.REMEDIO_ID}</td>
                    <td>{venda.QUANTIDADE}</td>
                    <td>{venda.PRECO}</td>
                    <td>{venda.DESCONTO}</td>
                    <td>{venda.FUNCIONARIO_ID}</td>
                    <td>{venda.CLIENTE_ID}</td>
                  <td>{venda.QUANTIDADE * venda.PRECO}</td>
                  </tr>
                    )}

             
              
            </tbody>
          </Table>
        

        )
    



}

export default VisualizarVendas;