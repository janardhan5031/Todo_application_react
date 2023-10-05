import { useState, useCallback } from 'react';
import './main_page.css'

import ShowList from './showList';
import AddTask from './addTask';
import TaskCtxProvider from '../Store/TaskContextProvider';

const MainPage = () => {
    const [update_tast_id, set_update_task_id] = useState(undefined);

    const update_task_name_event = (id) => {
        set_update_task_id(id);
    }
    const remove_update_task_event = useCallback(() => {
        set_update_task_id(undefined)
    },[])

    return <TaskCtxProvider>
        <div className="body">
            <div className="container">
                <div className="header">
                    <h2>Todo App</h2>
                </div>
                <ShowList update_task_name_event={update_task_name_event} />
                <AddTask update_task_id={update_tast_id}
                    remove_update_task_event={remove_update_task_event}
                />
            </div>
        </div>
    </TaskCtxProvider>
}

export default MainPage;