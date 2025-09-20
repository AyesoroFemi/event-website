import React from "react";
import Image from "next/image";

const people = [
  {
    name: "David Johnson",
    role: "Software Engineer",
    details:
      "Specializes in backend development with Node.js and Golang. Experienced in building scalable APIs.",
  },
  {
    name: "Sophia Martinez",
    role: "UI/UX Designer",
    details:
      "Focuses on crafting intuitive interfaces. Skilled with Figma, Tailwind, and design systems.",
  },
  {
    name: "Michael Chen",
    role: "Project Manager",
  },
  {
    name: "Amina Yusuf",
    role: "Data Analyst",
    details:
      "Works with large datasets, SQL, and visualization tools like Power BI and Tableau.",
  },
  {
    name: "Ethan Brown",
    role: "DevOps Engineer",
    details: "Experienced in AWS, Docker, Kubernetes, and CI/CD pipelines.",
  },
  {
    name: "Grace Williams",
    role: "Content Strategist",
    details:
      "Manages brand storytelling, SEO optimization, and content calendars.",
  },
  {
    name: "Lucas Müller",
    role: "QA Tester",
  },
  {
    name: "Olivia Rossi",
    role: "Marketing Lead",
    details:
      "Oversees digital campaigns, social media strategies, and customer engagement analytics.",
  },
];

// assign images in a repeating pattern (4 profile images)
const imgs = [
  "/profile.jpg",
  "/profile2.jpg",
  "/profile3.jpg",
  "/profile4.jpg",
];
const speakers = people.map((p, i) => ({
  id: i + 1,
  ...p,
  img: imgs[i % imgs.length],
}));

export default function Speakers() {
  return (
    <section className="py-20 px-0">
      <div className="w-screen mx-auto px-0">
        <h2 className="text-center text-3xl md:text-4xl lg:text-5xl font-extrabold mb-8">
          <span className="text-amber-500">Meet Our</span>
          <span className="block">Speakers</span>
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-0 w-full lg:grid-flow-col lg:grid-rows-2 lg:auto-cols-fr">
          {speakers.map((s) => (
            <article key={s.id} className="group relative overflow-hidden">
              <div className="relative w-full aspect-[4/5] bg-gray-200 overflow-hidden">
                <Image
                  src={s.img}
                  alt={s.name}
                  fill
                  sizes="(min-width:1024px) 23vw, (min-width:768px) 31vw, 48vw"
                  quality={90}
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-105 filter grayscale group-hover:grayscale-0 group-hover:brightness-110 will-change-transform"
                />
                {/* subtle dark gradient that fades in on hover (reduced max opacity for clarity) */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-300" />
              </div>

              <div className="absolute left-4 right-4 bottom-4 text-white transition-all duration-300">
                {/* name always visible */}
                <div className="text-base sm:text-sm md:text-base lg:text-lg font-extrabold text-amber-400 leading-5">{s.name}</div>
                {/* role appears on hover */}
                <div className="text-xl text-white/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300">{s.role}</div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
