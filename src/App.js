import "./App.css";
import { Table } from "./components/Table";
import { Form } from "./components/Form";
import { useState } from "react";

const hrwk = 7 * 24
function App() {
  const [taskList, setTaskList] = useState([]);
  const hr = taskList.reduce((acc, item) => acc + +item.hr, 0);
  const addTask = (data) => {
    if (+data.hr + hr > hrwk) {
      return alert('No enough time')
    }
    setTaskList([...taskList, data]);
  };
  const taskSwitcher = (id, type) => {
    const tempArg = taskList.map((item) => {
      if (item.id === id) {
        item.type = type;
      }
      return item
    })
    setTaskList(tempArg);
  }

  const dlt = (id) => {
    const tempArg = taskList.filter((item) => item.id !== id);

    setTaskList(tempArg)
  }


  console.log(taskList);
  return (
    <div class="wrapper">
      <div class="container">
        {/* <!-- title --> */}
        <div class="row">
          <div class="col text-center mt-5">
            <h1>Not To Do List</h1>
          </div>
        </div>

        {/* <!-- form-area --> */}
        <Form addTask={addTask} />

        {/* <!-- list area --> */}
        <Table taskList={taskList} taskSwitcher={taskSwitcher} dlt={dlt} />

        {/* <!-- Total hrs area --> */}
        <div class="row fw-bold">
          <div class="col">
            The total hours allocated for this week is
            <span id="totalHrs">{hr}</span> Hours
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
