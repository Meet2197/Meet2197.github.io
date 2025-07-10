import React from "react";

interface Repo {
  id: number;
  name: string;
  description?: string | null;
  language?: string | null;
  html_url: string;
}

export default function ProjectCard({ repo }: { repo: Repo }) {
  return (
    <a
      href={repo.html_url}
      target="_blank"
      rel="noopener noreferrer"
      className="block p-4 border rounded-lg shadow hover:shadow-md transition">
      <h2 className="text-xl font-semibold">{repo.name}</h2>
      <p className="text-sm">{repo.description ?? "No description available"}</p>
      <span className="text-xs text-gray-500">{repo.language ?? "Unknown"}</span>
    </a>
  );
}
