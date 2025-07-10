import Head from "next/head";
import ProjectCard from "../components/ProjectCard";
import ContactForm from "../components/ContactForm";
import React, { useEffect, useState } from "react";

export default function Home() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        setLoading(true);
        const response = await fetch("https://meet-backend.onrender.com/github");
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        setRepos(data);
      } catch (err) {
        setError(err.message);
        console.error("Error fetching repositories:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  return (
    <>
      <Head>
        <title>Meet Bhatt - Data Steward | Developer | Analyst</title>
        <meta name="description" content="Portfolio of Meet Bhatt - Data Steward, Developer, and Analyst" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <header>
          <h1>Meet Bhatt</h1>
          <p>Data Steward | Developer | Analyst</p>
        </header>

        <section className="projects">
          <h2>My Projects</h2>
          
          {loading && (
            <div className="loading">
              <p>Loading projects...</p>
            </div>
          )}
          
          {error && (
            <div className="error">
              <p>Error loading projects: {error}</p>
              <button onClick={() => window.location.reload()}>
                Try Again
              </button>
            </div>
          )}
          
          {!loading && !error && repos.length === 0 && (
            <p>No projects found.</p>
          )}
          
          <div className="projects-grid">
            {repos.map((repo) => (
              <ProjectCard
                key={repo.id || repo.name}
                repo={repo}
              />
            ))}
          </div>
        </section>

        <section className="contact">
          <h2>Get In Touch</h2>
          <ContactForm />
        </section>
      </main>
    </>
  );
}