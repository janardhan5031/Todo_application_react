import React from "react";

const TaskContext = React.createContext({
    list: [],
    addTask: (name) => { },
    removeTask: (id) => { },
    updateTask:(id,value)=>{}
})

export default TaskContext;