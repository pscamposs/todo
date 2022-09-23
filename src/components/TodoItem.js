import styled from "styled-components";
import {Button} from "antd";
import {DeleteOutlined, CheckOutlined} from "@ant-design/icons"


let TodoItemContainer = styled.div`
  background-color: #E0E1DD;
  width: 90%;
  min-height: 71px;
  max-height: 71px;
  margin: 5px auto;
  border-radius: 4px;
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: space-around;

  &:hover {
    background-color: #d0d1ce;
  }
`



let TodoItemTitle = styled.h1`
  font-size: 1rem;
  margin: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-weight: lighter;

`


let TodoItemDescription = styled.span`
  color: #959595;
`

function timeSince(date) {

    var seconds = Math.floor((new Date() - new Date(date)) / 1000);

    var interval = seconds / 31536000;

    if (interval > 1) {
        return Math.floor(interval) + " years ago";
    }
    interval = seconds / 2592000;
    if (interval > 1) {
        return Math.floor(interval) + " months ago";
    }
    interval = seconds / 86400;
    if (interval > 1) {
        return Math.floor(interval) + " days ago";
    }
    interval = seconds / 3600;
    if (interval > 1) {
        return Math.floor(interval) + " hours ago";
    }
    interval = seconds / 60;
    if (interval > 1) {
        return Math.floor(interval) + " minutes ago";
    }
    return Math.floor(seconds) + " seconds ago";
}

export default function TodoItem({task, setTasks, tasks}) {

    const tasksHandler = () => {
        setTasks(tasks.filter(t => t !== task))
    }


    return (
        <TodoItemContainer>
            <div style={{width: "151px"}}>
                <TodoItemTitle>
                    {task.description}
                </TodoItemTitle>
                <TodoItemDescription>
                    {timeSince(task.date)}
                </TodoItemDescription>
            </div>
            <div>
                <Button
                    type="ghost"
                    icon={<CheckOutlined/>}
                    style={{color: "green"}}
                    onClick={tasksHandler}
                />
                <Button
                    type="ghost"
                    icon={<DeleteOutlined/>}
                    style={{color: "red"}}
                    onClick={tasksHandler}
                />
            </div>
        </TodoItemContainer>
    )
}
