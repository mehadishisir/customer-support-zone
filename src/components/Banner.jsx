import React from "react";
import bannerImg from "/asset/vector1.png";

const Banner = ({ inProgress, resolved }) => {
  return (
    <div className="flex justify-center gap-10 py-16">
      {/* In Progress Card */}
      <div
        className="w-72 h-40 rounded-xl text-white p-6 shadow-lg bg-cover bg-center flex flex-col justify-center"
        style={{
          backgroundImage: `linear-gradient(#632EE3,#9F62F2), url(${bannerImg})`,
        }}
      >
        <h2 className="text-lg font-semibold">In Progress</h2>
        <p className="text-4xl font-bold mt-2">{inProgress}</p>
        <p className="text-sm opacity-90">Tickets currently being worked on</p>
      </div>

      {/* Resolved Card */}
      <div
        className="w-72 h-40 rounded-xl text-white p-6 shadow-lg bg-cover bg-center flex flex-col justify-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(34,197,94,0.8), rgba(5,150,105,0.8)), url('https://images.unsplash.com/photo-1519389950473-47ba0277781c')",
        }}
      >
        <h2 className="text-lg font-semibold">Resolved</h2>
        <p className="text-4xl font-bold mt-2">{resolved}</p>
        <p className="text-sm opacity-90">Tickets successfully solved</p>
      </div>
    </div>
  );
};

export default Banner;
