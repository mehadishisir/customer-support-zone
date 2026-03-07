import { useState } from "react";
import "./App.css";
import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import TicketList from "./components/TicketList";
import TaskStatus from "./components/TaskStatus";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/Footer";

function App() {
  const [tasks, setTasks] = useState([]);
  const [resolved, setResolved] = useState([]);

  const handleAddTask = (ticket) => {
    const exists = tasks.find((t) => t.id === ticket.id);

    if (!exists) {
      setTasks((prevTasks) => [...prevTasks, ticket]);
      toast.success("Task added successfully!");
    } else {
      toast.error("Task already added!");
    }
  };

  const handleResolved = (task) => {
    setResolved((prevResolved) => [...prevResolved, task]);
    setTasks((prevTasks) => prevTasks.filter((t) => t.id !== task.id));

    toast.success("Task completed!");
  };

  return (
    <>
      <Navbar />

      <Banner inProgress={tasks.length} resolved={resolved.length} />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto p-4">
        <TicketList handleAddTask={handleAddTask} />
        <TaskStatus tasks={tasks} handleResolved={handleResolved} />
      </div>
      <Footer></Footer>
      <ToastContainer position="top-right" autoClose={2000} />
    </>
  );
}

export default App;
