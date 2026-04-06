'use client';

import React from 'react';
import Image from 'next/image';
import { Mail, Phone, MapPin, Linkedin, Github, ExternalLink, Download, Printer } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const resumeData = {
  basics: {
    name: "Mrityunjoy Mondal",
    title: "Software Engineer @ TCS | Full Stack Developer",
    summary: "Results-driven Software Engineer with 2+ years of experience architecting scalable web applications using JavaScript, TypeScript, React, Angular, and Node.js. Selected through TCS Ignite — a competitive program for Physics & Mathematics graduates — and rapidly advanced to enterprise-scale Azure deployments. Recognised as TCS AI Hackathon 2025 Champion among 281,000+ engineers across 58 countries. Delivered 40% performance improvements through modular UI architecture and optimized API integrations.",
    location: "Kolkata, West Bengal, India",
    email: "mrityunjoyop123@gmail.com",
    phone: "+91-6290268745",
    links: [
      { name: "LinkedIn", url: "https://www.linkedin.com/in/mrityunjoy-mondal" },
      { name: "GitHub", url: "https://github.com/Pikxul" }
    ]
  },
  experience: [
    {
      company: "Tata Consultancy Services",
      role: "Software Engineer",
      dates: "September 2023 – Present",
      location: "Kolkata, India",
      bullets: [
        "Selected through TCS Ignite — a competitive program exclusively for Physics graduates demonstrating exceptional technical aptitude in a nationwide candidate pool.",
        "Engineered enterprise-scale web applications using React, Angular, and TypeScript with modular UI architectures and robust state management, accelerating feature delivery across distributed teams.",
        "Architected reusable Micro Frontend (MFE) components, decoupling feature development and improving long-term maintainability for multiple product squads.",
        "Optimized client-side rendering pipelines via Chrome DevTools and React Profiler, resolving bottlenecks and boosting page load performance by up to 40%.",
        "Shipped production-ready features integrated with REST APIs and deployed through Azure DevOps CI/CD pipelines within Agile/Scrum cycles, ensuring zero-downtime releases.",
        "Optimized Development Workflows & System Efficiency: Streamlined development processes to enhance team efficiency and minimize repetitive tasks.",
        "Optimized code performance, improving both user experience and system responsiveness.",
        "Feature Development, Defect Resolution & Client Support: Developed dynamic web apps with JavaScript and ReactJs, ensuring responsive design, cross-browser compatibility, and a 25% boost in user engagement.",
        "Integrated PostgreSQL for secure, scalable backend data handling.",
        "Collaboration & Documentation: Provided mentorship to junior developers, fostering skill growth and collaboration.",
        "Documented software methodologies for future projects and collaborated with backend teams using Node.js and Express.js to implement RESTful APIs, improving load times and performance."
      ]
    }
  ],
  skills: {
    "Languages": ["JavaScript (ES6+)", "TypeScript", "Python", "SQL"],
    "Frameworks": ["React.js", "Next.js", "Angular", "Node.js", "Express.js", "TailwindCSS"],
    "Data": ["PostgreSQL", "MySQL", "SQL Server", "MongoDB", "Redis", "Prisma ORM"],
    "Cloud": ["Azure (App Service, Functions, ARM Templates)", "Docker", "GitHub Actions"],
    "Tools": ["Git", "Postman", "Jest", "Webpack", "Chrome DevTools", "Lighthouse", "JIRA"]
  },
  education: [
    {
      degree: "Bachelor of Science in Physics (Honours)",
      institution: "University of Calcutta",
      dates: "April 2020 – July 2023",
      score: "CGPA: 7.40/10"
    }
  ],
  achievements: [
    "TCS AI Hackathon 2025 — Champion (India among 281,000+ associates)",
    "Built EmpathAI — AI-driven SDK for real-time emotion detection",
    "TCS AI Friday Hackathon 2025 — Finalist"
  ],
  certifications: [
    "Microsoft: Azure Fundamentals (AZ-900)",
    "Microsoft: Azure Developer Associate (AZ-204)",
    "HackerRank: Software Engineer, Python, JavaScript, SQL, Node.js",
    "JavaScript Essential Training",
    "Cisco JavaScript Essentials",
    "Web Development Bootcamp"
  ]
};

export default function ResumePage() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-white p-8 text-slate-900 md:p-16 print:p-0">
      <div className="mx-auto max-w-4xl">
        {/* Header Actions */}
        <div className="mb-8 flex justify-end space-x-4 print:hidden">
          <Button variant="outline" onClick={handlePrint}>
            <Printer size={18} className="mr-2" />
            Print / Save PDF
          </Button>
        </div>

        {/* Resume Content */}
        <header className="mb-12 flex flex-col items-start justify-between border-b-2 border-slate-900 pb-8 md:flex-row">
          <div className="flex-1">
            <h1 className="mb-2 text-5xl font-black uppercase tracking-tighter">{resumeData.basics.name}</h1>
            <p className="mb-6 text-xl font-bold text-slate-600">{resumeData.basics.title}</p>
            
            <div className="grid grid-cols-1 gap-4 text-sm font-medium md:grid-cols-2">
              <div className="flex items-center space-x-3">
                <Mail size={16} />
                <span>{resumeData.basics.email}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={16} />
                <span>{resumeData.basics.phone}</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin size={16} />
                <span>{resumeData.basics.location}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Linkedin size={16} />
                <span>linkedin.com/in/mrityunjoy-mondal</span>
              </div>
            </div>
          </div>
          
          <div className="mt-8 h-40 w-40 shrink-0 overflow-hidden rounded-xl border-2 border-slate-900 bg-slate-100 md:mt-0">
            <Image
              src="/profile.png"
              alt="Mrityunjoy Mondal"
              width={160}
              height={160}
              className="h-full w-full object-cover"
              onError={(e) => {
                (e.target as any).src = "https://picsum.photos/seed/profile/400/400";
              }}
            />
          </div>
        </header>

        <section className="mb-12">
          <h2 className="mb-4 text-sm font-black uppercase tracking-widest text-slate-400">Professional Summary</h2>
          <p className="text-lg leading-relaxed">{resumeData.basics.summary}</p>
        </section>

        <section className="mb-12">
          <h2 className="mb-6 text-sm font-black uppercase tracking-widest text-slate-400">Experience</h2>
          <div className="space-y-10">
            {resumeData.experience.map((exp, i) => (
              <div key={i}>
                <div className="mb-4 flex flex-col justify-between md:flex-row md:items-center">
                  <div>
                    <h3 className="text-2xl font-bold">{exp.role}</h3>
                    <p className="text-lg font-medium text-slate-600">{exp.company}</p>
                  </div>
                  <div className="text-right text-sm font-bold uppercase tracking-wider text-slate-500">
                    <p>{exp.dates}</p>
                    <p>{exp.location}</p>
                  </div>
                </div>
                <ul className="list-inside list-disc space-y-2 text-slate-700">
                  {exp.bullets.map((bullet, j) => (
                    <li key={j} className="leading-relaxed">{bullet}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          <div className="md:col-span-2">
            <section className="mb-12">
              <h2 className="mb-6 text-sm font-black uppercase tracking-widest text-slate-400">Technical Skills</h2>
              <div className="space-y-6">
                {Object.entries(resumeData.skills).map(([category, skills]) => (
                  <div key={category}>
                    <h3 className="mb-2 text-sm font-bold uppercase text-slate-500">{category}</h3>
                    <div className="flex flex-wrap gap-2">
                      {skills.map((skill, i) => (
                        <Badge key={i} variant="outline" className="border-slate-300 text-slate-700">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="mb-12">
              <h2 className="mb-6 text-sm font-black uppercase tracking-widest text-slate-400">Education</h2>
              {resumeData.education.map((edu, i) => (
                <div key={i}>
                  <h3 className="text-xl font-bold">{edu.degree}</h3>
                  <p className="font-medium text-slate-600">{edu.institution}</p>
                  <p className="text-sm font-bold text-slate-500">{edu.dates} | {edu.score}</p>
                </div>
              ))}
            </section>
          </div>

          <div>
            <section className="mb-12">
              <h2 className="mb-6 text-sm font-black uppercase tracking-widest text-slate-400">Achievements</h2>
              <ul className="space-y-4 text-sm font-medium text-slate-700">
                {resumeData.achievements.map((ach, i) => (
                  <li key={i} className="flex items-start space-x-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-900" />
                    <span>{ach}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-6 text-sm font-black uppercase tracking-widest text-slate-400">Certifications</h2>
              <ul className="space-y-4 text-sm font-medium text-slate-700">
                {resumeData.certifications.map((cert, i) => (
                  <li key={i} className="flex items-start space-x-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-400" />
                    <span>{cert}</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
