'use client';
// app/courses/page.tsx
import Link from "next/link";
import { useState } from "react";

const coursesData = [
  { slug: "nextjs-routing", title: "Next.js Routing" },
  { slug: "react-basics", title: "React Basics" },
  { slug: "fullstack-supabase", title: "Fullstack with Supabase" },
];

export default function CoursesPage() {
    const [courses, setCourses] = useState(coursesData);
  const [slug, setSlug] = useState("");
  const [title, setTitle] = useState("");
  
    function handleSubmit(e: React.FormEvent) {
      e.preventDefault();
      
      const newCourse = { slug, title };
      setCourses([...courses, newCourse]);
      setSlug("");
      setTitle("");
    }


    return (
    <>
      <h1>New Course</h1>
      <form onSubmit={handleSubmit}>
        <input
          value={slug}
          onChange={(e) => setSlug(e.target.value)}
          placeholder="Slug"
        />
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
        />

        <button type="submit">Send</button>
      </form>

      <h1>Courses</h1>
      <ul>
        {courses.map((c) => (
          <li key={c.slug}>
            <Link href={`/courses/${c.slug}`}>{c.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
