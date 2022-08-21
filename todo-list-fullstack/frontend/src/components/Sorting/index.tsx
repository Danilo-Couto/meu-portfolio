import { Container } from "./styles";

export function Sorting({setSort }: any) {

  const sortByInputs = ['tarefa', 'data de criação', 'status'];

  const sortings = sortByInputs.map((input: any, i: number)=> (
    <option key={i} value={input}>{input}</option>
  ));
  
  return (
    <Container>
      <h4>Filtrar por</h4>
      <label>
        <select onChange={(e) => setSort(e.target.value)}> 
      {sortings}
      </select>
    </label>    
    </Container>
  );
}

