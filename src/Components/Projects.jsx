import React from 'react';

const ProjectsCard = () => {
  const projects = [
    {
      title: "Surakshit - The Protector",
      description: "Disaster Management tool",
      skills: "MapsAPI, MongoDB, Tailwind CSS, Flask",
      link: "https://codefury7-0.onrender.com/"
    },
    {
      title: "Recurse",
      description: "Efficiently Solves Sudoku after validation",
      skills: "Algorithms, JavaScript",
      link: "https://ieee-sudoku.vercel.app/"
    },
    {
      title: "JusTex",
      description: "Seamless communication between clients via server",
      skills: "Socket Programming, JavaAWT, JavaSwing",
      link: "https://github.com/Suhail-Sharieff/PROJECT-chatApplication"
    },
    {
      title: "Quizzy",
      description: "A simple and fast quiz/flash card player for personal usage",
      skills: "JavaSwing, JavaAWT",
      link: "https://github.com/Suhail-Sharieff/PROJECT-quizCardPlayer"
    },
    {
      title: "Songify",
      description: "An offline music player with enchanced folder management system",
      skills: "HTML, CSS, JS",
      link: "https://github.com/Suhail-Sharieff/PROJECT-WEB_MUSIC_PLAYER"
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
        </section>
      ))}
    </div>
  );
}

export default ProjectsCard;
