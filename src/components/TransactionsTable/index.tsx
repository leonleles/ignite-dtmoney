import { useEffect } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

export function TransactionsTable() {

  useEffect(() => {
    api.get('/transitions').then((response) => {
      console.log(response);
    });
  }, []);

  return (
    <Container>
      <table>
        <thead>
          <th>Título</th>
          <th>Valor</th>
          <th>Categoria</th>
          <th>Data</th>
        </thead>
        <tbody>
          <tr>
            <td>Desenvolvimento</td>
            <td>R$12.000,00</td>
            <td>Programação</td>
            <td>20/02/2021</td>
          </tr>
          <tr>
            <td>Desenvolvimento</td>
            <td className="deposit">R$12.000,00</td>
            <td>Programação</td>
            <td>20/02/2021</td>
          </tr>
          <tr>
            <td>Desenvolvimento</td>
            <td className="withdraw">- R$12.000,00</td>
            <td>Programação</td>
            <td>20/02/2021</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}