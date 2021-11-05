import React, { useEffect } from 'react'
import { getAllUserTasks } from '../services/APICalls'

function TasksPage() {
  useEffect(() => {
    const callback = async () => {
      const data = await getAllUserTasks();
      console.log(data);
    }

    callback();
  }, [])
  
  return (
    <div>
      
    </div>
  )
}

export default TasksPage
