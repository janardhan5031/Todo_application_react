import TaskContext from "./TaskContext";

import { useState } from "react";

const TaskCtxProvider = (props) => {
    
    const [taskList, setTaskList] = useState([{ name: "jani" ,id:135}, { name: 'raksha',id:1351 }]);


    const addTask = (name) => {
        setTaskList([...taskList,{name,id:Date.now()}])
    }

    const removeTask = (id) => {
        // console.log(id)
        const updated_list = taskList.filter((val) => {
            return val.id!==Number(id)
        })
        setTaskList(updated_list)
    }

    const updateTask = (id, value) => {

        id = Number(id);
        const updated_list = taskList.map((task) => {
            if (task.id === id) return {...task, name:value};
            return task
        })
        setTaskList(updated_list)
    }

    const Ctx = {
        list: taskList,
        addTask:addTask,
        removeTask: removeTask,
        updateTask
    }

    return <TaskContext.Provider value={Ctx}>
        {props.children}
    </TaskContext.Provider>

}

export default TaskCtxProvider;