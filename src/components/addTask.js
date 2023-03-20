import React from "react";
import { useState, useContext, useEffect } from "react";
import TaskContext from "../Store/TaskContext";

import './addTask.css';

const AddTask = (props) => {

    const [task_name, setTask_name] = useState('');
    const ctx = useContext(TaskContext);
    const [btn_name, set_btn_name] = useState('Add')

    console.log('add Task component is rendered')

    useEffect(() => {
        if (props.update_task_id) {
            ctx.list.forEach(task => {
                if (task.id === Number(props.update_task_id)) setTask_name(task.name);
            })
            set_btn_name('Update')
        } else {
            set_btn_name('Add')
        }

    }, [props.update_task_id, ctx.list])

    const task_name_onchange = (e) => {
        // console.log(e.target.value)
        setTask_name(e.target.value)
    }

    const addTask_to_ctx = (e) => {
        e.preventDefault();
        if (props.update_task_id) {
            ctx.updateTask(props.update_task_id, task_name)
            props.remove_update_task_event()
        } else {

            ctx.addTask(task_name)
        }
        setTask_name('')
    }


    return <>
        <div className="add_task_container" >
            <form onSubmit={addTask_to_ctx}>
                <input type={"text"} onChange={task_name_onchange} value={task_name} />
                <button type="submit" >{btn_name}</button>
            </form>
        </div>
    </>
}

export default React.memo(AddTask);