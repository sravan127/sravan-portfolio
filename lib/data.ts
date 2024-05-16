import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import expenseTracker from "@/public/expense-tracker.jpg";
import hotelReservation from "@/public/hotel-reservation.png";
import redditClone from "@/public/reddit-clone.png";

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
      "As a Graduate Teaching Assistant at the University of Cincinnati, I played a crucial role in shaping the educational experience for over 200 students per semester. I instructed undergraduate courses in Information Security/Assurance and Computer Networks, actively contributing to curriculum development. Additionally, I provided individualized assistance to students, addressing and resolving over 50 queries per week, resulting in a 20% improvement in average grades.",
    icon: React.createElement(LuGraduationCap),
    date: "Aug 2023 - Apr 2024",
  },
  {
    title: "Software Development Engineer 1 | EPAM Systems",
    location: "Hyderabad, IN",
    description:
      "During my tenure as a Software Engineer at EPAM Systems, I worked on a client project for EBSCO Information Services. I successfully migrated the Next UI project from React to Next.js, leading to a 30% reduction in load times and an enhanced overall user experience. I developed responsive web components using NextJS, optimizing core web vitals and improving key performance metrics. Moreover, I managed backend operations using Node, ensuring seamless integration and functionality while maintaining uptime of over 99.9%.",
    icon: React.createElement(FaReact),
    date: "Jul 2022 - Jul 2023",
  },
  {
    title: "Software Engineer Intern | EPAM Systems",
    location: "Remote",
    description:
      "As a Software Engineer Intern at EPAM R&D lab, I collaborated on an internal project with a team of 5 interns, achieving 8 key milestones within a 6-month period while meeting all deadlines. I acquired advanced skills and expertise in Java, mastering core concepts such as multithreading, collections, and design patterns, reducing technical debt by 25%. Our application of theoretical knowledge to real-world scenarios contributed to the creation of a robust and scalable software solution used by over 10,000 employees at EPAM",
    icon: React.createElement(CgWorkAlt),
    date: "Jan 2022 - Jun 2022",
  },
] as const;

export const projectsData = [
  {
    title: "Expense Tracker",
    description:
      "A Full Stack application using the MERN Stack. I implemented key features such as creating and managing expenses, viewing and analyzing expenses over time, and more.",
    tags: ["React", "MongoDB",],
    imageUrl: expenseTracker,
  },
  {
    title: "Hotel Reservation System",
    description:
    "A full-stack web application built using MERN stack which enables users to browse available rooms, make reservations, and manage bookings.",
    tags: ["React", "TypeScript", "Redux"],
    imageUrl: hotelReservation,
  },
  {
    title: "Reddit Clone",
    description: 
    "Developed a Next.js web application replicating Reddit. Implemented features such as: Infinite scrolling for post loading, , ensuring a smooth browsing experience and more",
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