import React from "react";

function ProjectCard({ icon, title, category, description }) {
  return (
    <article className="project-card">
      <div className="project-icon">{icon}</div>
      <span className="tag">{category}</span>
      <h3>{title}</h3>
      <p>{description}</p>
    </article>
  );
}

export default ProjectCard;
