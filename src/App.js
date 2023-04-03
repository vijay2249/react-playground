import React, { useEffect, useState } from 'react';

import Tasks from './components/Tasks/Tasks';
import NewTask from './components/NewTask/NewTask';
import useFetchTasks, {useFetchData} from './hooks/use-fetchTask';

// function App() {
//   const [tasks, setTasks] = useState([]);
//   const transformData = (data) =>{
//     const loadedTasks = [];
//     for (const taskKey in data) {
//       loadedTasks.push({ id: taskKey, text: data[taskKey].text });
//     }
//     setTasks(loadedTasks)
//   }

//   const {isLoading, error, fetchData: fetchTasks} = useFetchTasks({
//     url: 'https://react-learn-ee457-default-rtdb.asia-southeast1.firebasedatabase.app/tasks.json'
//   }, transformData)

//   useEffect(() => {
//     fetchTasks();
//   }, []);

//   const taskAddHandler = (task) => {
//     setTasks((prevTasks) => prevTasks.concat(task));
//   };

//   return (
//     <React.Fragment>
//       <NewTask onAddTask={taskAddHandler} />
//       <Tasks
//         items={tasks}
//         loading={isLoading}
//         error={error}
//         onFetch={fetchTasks}
//       />
//     </React.Fragment>
//   );
// }

function App() {
  const [tasks, setTasks] = useState([]);
  const {isLoading, error, fetchData: fetchTasks} = useFetchData()
  useEffect(() => {
    const transformTasks = (tasksObj) => {
      const loadedTasks = [];

      for (const taskKey in tasksObj) {
        loadedTasks.push({ id: taskKey, text: tasksObj[taskKey].text });
      }

      setTasks(loadedTasks);
    };

    fetchTasks(
      { url: 'https://react-learn-ee457-default-rtdb.asia-southeast1.firebasedatabase.app/tasks.json' },
      transformTasks
    );
  }, [fetchTasks]);

  const taskAddHandler = (task) => {
    setTasks((prevTasks) => prevTasks.concat(task));
  };

  return (
    <React.Fragment>
      <NewTask onAddTask={taskAddHandler} />
      <Tasks
        items={tasks}
        loading={isLoading}
        error={error}
        onFetch={fetchTasks}
      />
    </React.Fragment>
  );
}

export default App;