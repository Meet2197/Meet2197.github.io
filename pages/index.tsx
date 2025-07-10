import Head from "next/head";
import ProjectCard from "../components/ProjectCard";
import ContactForm from "../components/ContactForm";
import React from "react";

import { useEffect, useState } from "react";

export default function Home() {
  const [repos, setRepos] = useState<any[]>([]);

  useEffect(() => {
    fetch("https://meet-backend.onrender.com/github") // ✅ direct call to your backend
      .then((res) => res.json())
      .then((data) => setRepos(data));
  }, []);

  return (
    <div className="p-6">
      <Head>
        <title>Meet Bhatt | Portfolio</title>
      </Head>
      <h1 className="text-3xl font-bold mb-4">Meet Bhatt</h1>
      <p className="mb-6">Data Steward | Developer | Analyst</p>
      <div className="grid gap-4 md:grid-cols-2">
        {repos.map((repo) => (
          <ProjectCard key={repo.id} repo={repo} />
        ))}
      </div>
      <ContactForm />
    </div>
  );
}
