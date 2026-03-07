import React from "react";
import tickets from "./../../public/ticket.json";
import TicketCard from "./TicketCard";
console.log(tickets);

const TicketList = ({ handleAddTask }) => {
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {tickets.map((ticket) => (
          <TicketCard
            key={ticket.id}
            ticket={ticket}
            handleAddTask={handleAddTask}
          />
        ))}
      </div>
    </div>
  );
};

export default TicketList;
