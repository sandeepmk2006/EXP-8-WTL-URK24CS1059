import React from "react";
import { Link } from "react-router-dom";

const steps = [
  { icon: "📝", title: "Register", text: "Sign up with your details and your project title." },
  { icon: "🔧", title: "Build", text: "Prepare your model, experiment or demo." },
  { icon: "🎤", title: "Present", text: "Explain your idea to the judges and visitors." },
  { icon: "🏆", title: "Win", text: "Top projects in each category receive awards." }
];

const criteria = [
  "Originality of the idea",
  "Scientific method and accuracy",
  "Working model or demonstration",
  "Clarity of presentation",
  "Usefulness to society"
];

function About() {
  return (
    <>
      <section className="section narrow">
        <h2 className="section-title">About the Science Fair</h2>
        <p className="lead">
          The Science Fair is a place where students turn curiosity into real projects.
          It is open to every field of science and technology, and the goal is simple:
          learn by doing and share what you find.
        </p>
      </section>

      <section className="section">
        <h2 className="section-title">How it works</h2>
        <div className="grid">
          {steps.map((s, i) => (
            <div className="step" key={s.title}>
              <div className="project-icon">{s.icon}</div>
              <h3>{i + 1}. {s.title}</h3>
              <p>{s.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section narrow">
        <h2 className="section-title">Judging criteria</h2>
        <ul className="criteria">
          {criteria.map((c) => <li key={c}>{c}</li>)}
        </ul>
        <p className="center">
          <Link className="button" to="/register">Join the Fair</Link>
        </p>
      </section>
    </>
  );
}

export default About;
