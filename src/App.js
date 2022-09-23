import styled from "styled-components";
import {Button, Input} from 'antd';
import { useState } from "react";
import TodoItem from "./components/TodoItem";


let TodoContainer = styled.div`
      background-color: #E0E1DD;
      width: 400px;
      height: 500px;
      padding: 8px;
      margin: 40px auto;
      border-radius: 8px;
      box-shadow: 2px 1px 3px #b7b7b7;
    `

let TodoList = styled.div`
      background-color: #FFFFFF;
      width: 350px;
      height: 350px;
      margin: 40px auto;
      display: flex;
      flex-direction: column;
      border-radius: 2px;
      overflow-y: auto;

    `



function App() {


    const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem('db_tasks')) || []);
    const [task, setTask] = useState("");

    const taskHandler = (e) =>{
        setTask(e.target.value)
    }
    const addTask = () =>{
        let newTasks = [...tasks, {
            "id": Math.floor(Math.random() * 1000),
            "date": new Date(),
            "description": task
        }]
        setTask('')
        setTasks(newTasks);
        localStorage.setItem("db_tasks", JSON.stringify(newTasks));
    }



    return (
        <div className="App-Todo">

            <TodoContainer>
                <h2 style={{
                    textAlign:"center",
                    fontWeight: "bold"
                }
                }>SIMPLE TASK MANAGER</h2>
                <Input.Group>
                    <Input
                        placeholder="Today I will do..."
                        allowClear
                        showCount
                        style={{
                            width: '85%',
                            margin: '0 auto'
                        }}
                        onChange={taskHandler}
                        value={task}
                    />
                    <Button
                        type="primary"
                        disabled={task.trim() === ''}
                        onClick={addTask}
                    >Add
                    </Button>
                </Input.Group>

                <TodoList>
                    {tasks.map(t =>{
                        return <TodoItem
                            task={t}
                            setTasks={setTasks}
                            tasks={tasks}/>
                    })}
                </TodoList>

            </TodoContainer>
        </div>
    );



}

export default App;
