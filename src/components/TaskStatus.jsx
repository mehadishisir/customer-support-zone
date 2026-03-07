import React from "react";

const TaskStatus = ({ tasks, handleResolved }) => {
  console.log(tasks);
  console.log(handleResolved);

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Task Status</h2>

      {tasks.map((task) => (
        <div
          key={task.id}
          className="card w-96 bg-base-100 card-xs shadow-sm mb-4"
        >
          <div className="card-body">
            <h2 className="card-title">{task.title}</h2>

            <button
              onClick={() => handleResolved(task)}
              className="btn btn-primary"
            >
              Complete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TaskStatus;
