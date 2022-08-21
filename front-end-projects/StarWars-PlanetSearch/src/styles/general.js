import styled from 'styled-components';

export const TableCss = styled.div`
table, th, td {
  margin-top:1rem;
  width: 100%;
  border-collapse: collapse;
  padding: 15px;
  text-align: center;
  border-bottom: 1px solid #FFE81F;
}
th {
  height: 70px;
  background: #FFE81F;
  color: black;
}
td{
  font-size: small;
}
`;

export const AroundFilters = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 1rem;
  .filterBy{
    display: flex;
    flex-direction: column;
  }
  .orderBy{
    display: flex;
    width: 250px;
    flex-direction: column;
    align-content: center;
  }
  h1{
    order: 3;
    text-align: center;
    font-size: 100px;
    margin:1rem;
  }
p {
 font-weight: bold;
 text-align: center;
  margin: 0.5rem;
}
 button {
  margin:0.5rem;
  background-color: #FFE81F;
  text-transform: uppercase;
  border-radius: 0.25rem;
  padding: 0.25rem;
  box-shadow: 1px 1px 4px #333333;
  font-weight: bold;
 }
select{
  margin: 0.5rem;
  padding: 0.25rem;
  border: none;
  width: 250px;

}
input{
  border: none;
  margin: 0.5rem;
  padding: 0.25rem;
}
`;
