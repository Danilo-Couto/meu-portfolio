import SectionTitle from '../SectionTitle';
import Form from './Form';
import { Container } from './styles';

function FormContato() {
  return (
    <Container>
      <SectionTitle
        title={
          <>
            Contacte-me!
            <br />
          </>
        }
        description={<>Ficarei feliz em responder </>}
      />

      <Form />
    </Container>
  );
}

export default FormContato;
