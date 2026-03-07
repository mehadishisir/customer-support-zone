import { useState } from "react";
import "./App.css";
import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import TicketList from "./components/TicketList";
import TaskStatus from "./components/TaskStatus";

function App() {
  const [tasks, setTasks] = useState([]);
  const [resolved, setResolved] = useState([]);

  const handleAddTask = (ticket) => {
    const exists = tasks.find((t) => t.id === ticket.id);

    if (!exists) {
      setTasks((prevTasks) => [...prevTasks, ticket]);
    }
  };

  const handleResolved = (task) => {
    setResolved((prevResolved) => [...prevResolved, task]);
    setTasks((prevTasks) => prevTasks.filter((t) => t.id !== task.id));
  };

  return (
    <>
      <Navbar />

      <Banner inProgress={tasks.length} resolved={resolved.length} />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto p-4">
        <TicketList handleAddTask={handleAddTask} />
        <TaskStatus tasks={tasks} handleResolved={handleResolved} />
      </div>
    </>
  );
}

export default App;
