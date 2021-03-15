import { useEffect } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

export function TransactionsTable() {
  useEffect(() => {
    api.get('/transactions')
      .then(response => console.log(response.data))
  }, []);

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categorias</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="title">Desenvolvimento website</td>
            <td className="income">R$ 5.000,00</td>
            <td>Desenvolvimento</td>
            <td>23/01/2021</td>
          </tr>
          <tr>
            <td className="title">Luz</td>
            <td className="expense">- R$ 500,00</td>
            <td>Energia Elétrica</td>
            <td>23/01/2021</td>
          </tr>
          <tr>
            <td className="title">Internet</td>
            <td className="expense">- R$ 200,00</td>
            <td>Internet</td>
            <td>23/01/2021</td>
          </tr>
        </tbody>
      </table>
    </Container>
  )
}