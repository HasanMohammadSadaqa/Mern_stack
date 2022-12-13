import { useState } from 'react';
import './App.css';
import Addtask from './components/Addtask';
import Displaytasks from './components/Displaytasks';

function App() {

  const[taskVariable, setTaskVariable] = useState([
    {name:"hasna",isCompleted:true},
  ])
  console.log(taskVariable);
  const displayTask = (x) =>{
    setTaskVariable([...taskVariable, {name:x,isCompleted:false}]);
  }
  return (
    <div className="App">
      <Addtask whichTask = {displayTask}></Addtask>
      <Displaytasks theTask={taskVariable} updateTasks={setTaskVariable}></Displaytasks>
    </div>
  );
}

export default App;
