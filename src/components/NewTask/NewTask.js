import Section from '../UI/Section';
import TaskForm from './TaskForm';
import useFetchTasks, {useFetchData} from '../../hooks/use-fetchTask';

const NewTask = (props) => {

  const {isLoading, error, fetchData: sendRequest} = useFetchData()

  const enterTaskHandler = async (taskText) => {
    const createdTask = taskData =>{
      const generatedId = taskData.name; // firebase-specific => "name" contains generated id
      const createdTask = { id: generatedId, text: taskText };
      props.onAddTask(createdTask);
    }
    
    sendRequest({
      url: 'https://react-learn-ee457-default-rtdb.asia-southeast1.firebasedatabase.app/tasks.json',
      method: 'POST',
      body: { text: taskText },
      headers: {
        'Content-Type': 'application/json',
      },
    }, createdTask)
  };

  return (
    <Section>
      <TaskForm onEnterTask={enterTaskHandler} loading={isLoading} />
      {error && <p>{error}</p>}
    </Section>
  );
};

export default NewTask;