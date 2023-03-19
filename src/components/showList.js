import { useContext, useState, useEffect } from "react"

import TaskContext from "../Store/TaskContext"
import './showList.css';
import {RiDeleteBinLine} from 'react-icons/ri'

const ShowList = (props) => {
    const ctx = useContext(TaskContext);
    const [list, setList] = useState(ctx.list);

    useEffect(() => {
        setList(ctx.list)
    },[ctx.list])


    const Search_Onchange = (e) => {
        // console.log(e.target.value)
        const updatedList = ctx.list.filter((val) => {
            return val.name.includes(e.target.value)
        })
        setList(updatedList);
    }

    const remove_btn_onclick = (e) => {
        // console.log(e.currentTarget)
        ctx.removeTask(e.currentTarget.id)
    }

    const update_task_onclick = (e) => {
        // console.log(e.currentTarget.children[1].id)      // event fires on parent div to update task
        props.update_task_name_event(e.currentTarget.children[1].id)
    }

    const taskList = list.map((task) => {
        return <div key={task.id} onClick={ update_task_onclick} className={`list_item_container ${task.id}`} >
            <li className="task_name">{task.name}</li>
            <button onClick={remove_btn_onclick} id={task.id}>
                <RiDeleteBinLine className="delete_icon" />
            </button>
        </div>
        
    })

    return <>
        <div className="search_container">
            <input type={'text'} onChange={Search_Onchange} placeholder='Search Task' />
        </div>  
        <div className="Show_list_container" >
            <ul>
                { list.length ? taskList : <h4> No tasks found</h4>}
            </ul>
        </div>
    </>
}

export default ShowList

