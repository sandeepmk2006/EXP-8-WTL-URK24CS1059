import React, { useState } from "react";
import { Link } from "react-router-dom";
import ProjectCard from "../components/ProjectCard";

const projects = [
  { icon: "☀️", title: "Solar Water Purifier", category: "Environment", description: "Uses sunlight to make dirty water safe to drink at almost no cost." },
  { icon: "🧪", title: "Natural pH Indicator", category: "Chemistry", description: "Red cabbage juice changes colour to show whether a liquid is acidic or basic." },
  { icon: "🌱", title: "Hydroponic Garden", category: "Biology", description: "Grows vegetables in nutrient water instead of soil, using far less space." },
  { icon: "🤖", title: "Line-Following Robot", category: "Technology", description: "A small robot with sensors that follows a path on its own." },
  { icon: "🧲", title: "Magnetic Levitation Train", category: "Physics", description: "A model train that floats above the track using magnets." },
  { icon: "🌧️", title: "Rain Water Harvesting", category: "Environment", description: "A working model showing how roof rain can be collected and stored." }
];

const categories = ["All", "Physics", "Chemistry", "Biology", "Environment", "Technology"];

function Home() {
  const [filter, setFilter] = useState("All");

  const visible = filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <>
      <section className="hero">
        <h1>Science Fair Project Showcase</h1>
        <p>Explore ideas, build experiments and share your discoveries with the world.</p>
        <Link className="button accent" to="/register">Register Your Project</Link>
      </section>

      <section className="section">
        <h2 className="section-title">Featured Projects</h2>

        <div className="filters">
          {categories.map((c) => (
            <button
              key={c}
              type="button"
              className={c === filter ? "chip active" : "chip"}
              onClick={() => setFilter(c)}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="grid">
          {visible.length > 0 ? (
            visible.map((p) => <ProjectCard key={p.title} {...p} />)
          ) : (
            <p className="center">No projects in this category yet.</p>
          )}
        </div>
      </section>
    </>
  );
}

export default Home;
