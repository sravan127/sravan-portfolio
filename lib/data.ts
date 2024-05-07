import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import expenseTracker from "@/public/expense-tracker.jpg";
import hotelReservation from "@/public/hotel-reservation.jpg";
import redditClone from "@/public/reddit-clone.jpg";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduate Teaching Assistant | University of Cincinnati",
    location: "Cincinnati, OH",
    description:
      "Worked as a Taching Assistant for Fall 2023 and Spring 2024 Semester",
    icon: React.createElement(CgWorkAlt),
    date: "Aug 2023 - Apr 2024",
  },
  {
    title: "Software Development Engineer 1 | EPAM Systems",
    location: "Hyderabad, IN",
    description:
      "I worked as a front-end developer for 1 year at EPAM Systems",
    icon: React.createElement(CgWorkAlt),
    date: "Jul 2022 - Jul 2023",
  },
  {
    title: "Software Engineer Intern | EPAM Systems",
    location: "Remote",
    description:
      "Worked as an Intern",
    icon: React.createElement(FaReact),
    date: "Jan 2022 - Jun 2022",
  },
] as const;

export const projectsData = [
  {
    title: "Expense Tracker",
    description:
      "",
    tags: ["React", "MongoDB",],
    imageUrl: expenseTracker,
  },
  {
    title: "Hotel Reservation System",
    description:
      "",
    tags: ["React", "TypeScript", "Redux"],
    imageUrl: hotelReservation,
  },
  {
    title: "Reddit Clone",
    description: 
      "",
    tags: ["React", "Next.js", "Framer"],
    imageUrl: redditClone,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Express",
  "C /C++ ",
  "Java",
  "Python",
  "MS Office",
  "Agile",
] as const;