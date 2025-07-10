import React, { useState, ChangeEvent, FormEvent } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("https://meet-backend.onrender.com/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
      } else {
        throw new Error("Failed");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-xl mx-auto mt-12">
      <h2 className="text-2xl font-semibold">Contact Me</h2>
      <input
        name="name"
        value={form.name}
        onChange={handleChange}
        placeholder="Your Name"
        className="border p-2 w-full"
        required
      />
      <input
        name="email"
        type="email"
        value={form.email}
        onChange={handleChange}
        placeholder="Your Email"
        className="border p-2 w-full"
        required
      />
      <textarea
        name="message"
        value={form.message}
        onChange={handleChange}
        placeholder="Your Message"
        className="border p-2 w-full"
        rows={5}
        required
      />
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
        Send
      </button>

      {status === "loading" && <p className="text-blue-500">Sending...</p>}
      {status === "success" && <p className="text-green-600">Message sent!</p>}
      {status === "error" && <p className="text-red-600">Error. Please try again later.</p>}
    </form>
  );
}
