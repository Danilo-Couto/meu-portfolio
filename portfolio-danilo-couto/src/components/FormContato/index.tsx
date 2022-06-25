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
        description="Respondo rápido"
      />

      <Form />
    </Container>
  );
}

export default FormContato;
