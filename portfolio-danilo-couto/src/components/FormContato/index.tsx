import SectionTitle from '../SectionTitle';
import Form from './Form';
import { Container } from './styles';

function FormContato() {
  return (
    <Container>
      <SectionTitle
        title={
          <>
            Entre em contato!
            <br />
          </>
        }
        description="Ganharei meu dia"
      />

      <Form />
    </Container>
  );
}

export default FormContato;
