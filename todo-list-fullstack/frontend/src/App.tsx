import { Form } from './components/Form';
import { TaskList } from './components/TaskList';
import { useFetch } from './hooks/useFetch';

function App() {
  const {isLoading, ...props } = useFetch();

  return (
    <>
      <div>
        <Form />
        <TaskList {...props} />
      </div>
    </>
  );
}

export default App;