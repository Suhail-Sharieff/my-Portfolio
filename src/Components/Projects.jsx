import React from "react";

const ProjectsCard = () => {
  const projects = [
    {
      title: "Surakshit - The Protector",
      description: "Disaster Management tool",
      skills: "MapsAPI, MongoDB, Tailwind CSS, Flask",
      link: "https://codefury7-0.onrender.com/",
      hackathon: "🎉 CodeFury 2024"
    },
    {
      title: "Eco-Earth",
      description: "Waste Management tool",
      skills: "Flutter, GetX",
      link: "https://github.com/Suhail-Sharieff/PROJECT-eco_earth",
      hackathon: "🎉 Google Solution Challenge 2025"
    },
    {
      title: "RxGuardian",
      description: "Pharmacy ERP (Enterprise Resource Planning) System",
      skills: "NodeJS, Socket.io, Redis, MySQL, Flutter, GetX",
      link: "https://github.com/Suhail-Sharieff/PROJECT-RxGuardian",
    },
    {
      title: "CodeMint",
      description:
        "An interactive coding platform enabling live coding sessions for educational institutions and technical interviews.",
      skills: ["React.js, Socket.io, Node.js, Flutter, Firebase"],
      link: "https://github.com/Suhail-Sharieff/PROJECT-CodeMint",
    },

    {
      title: "Recurse",
      description: "Efficiently Solves Sudoku after validation",
      skills: "Algorithms, JavaScript",
      link: "https://ieee-sudoku.vercel.app/",
    },
    {
      title: "JusTex",
      description: "Seamless communication between clients via server",
      skills: "Socket Programming, JavaAWT, JavaSwing",
      link: "https://github.com/Suhail-Sharieff/PROJECT-chatApplication",
    },
    {
      title: "Quizzy",
      description: "A simple and fast quiz/flash card player for personal usage",
      skills: "JavaSwing, JavaAWT",
      link: "https://github.com/Suhail-Sharieff/PROJECT-quizCardPlayer",
    },
    {
      title: "Songify",
      description: "An offline music player with enhanced folder management system",
      skills: "HTML, CSS, JS",
      link: "https://github.com/Suhail-Sharieff/PROJECT-WEB_MUSIC_PLAYER",
    },
    {
      title: "Sikshak Saathi",
      description: "A lightweight attendance app for educational institutes",
      skills: "Flutter, SQFLite, BLoc",
      link: "https://github.com/Suhail-Sharieff/PROJECT-attendance_app",
    },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-6 cursor-pointer">
      {projects.map((project, index) => (
        <section
          key={index}
          className="p-6 hover:duration-500 hover:scale-105 w-64 gap-y-3 flex flex-col border rounded-lg border-gray-500"
        >
          <h4 className="text-lg font-bold hover:underline" style={{ color: "#D4D4D4" }}>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              {project.title} <span>&#8599;</span>
            </a>
          </h4>

          <p className="text-white text-sm">{project.description}</p>
          <p className="text-white text-xs">Skills: {project.skills}</p>
          {project.hackathon && (
            <span className="text-xs bg-gray-900 text-white px-2 py-1 rounded-md self-start">
              {project.hackathon}
            </span>
          )}
        </section>
      ))}
    </div>
  );
};

export default ProjectsCard;
