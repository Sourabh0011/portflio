import { kebabCase } from "@/utils/utils";

const projects = [
  {
    id: 0,
    title: "Kirshify",
    desc: "A comprehensive all in one agritech platform for all indian farmer.",
    img: "/kirshify.png",
    link: "https://kirshify.com",
    tags: ["React", "NextJS", "TailwindCSS"]
  },
  {
    id: 1,
    title: "Bookbazzar",
    desc: "An online marketplace for buying and selling books.",
    img: "/bookbazzar.png",
    link: "https://bookbazzar.in",
    tags: ["React", "NodeJS", "MongoDB"]
  },
  {
    id: 2,
    title: "Bybits",
    desc: "A modern platform for short the url.",
    img: "/bybits.png",
    link: "https://bybits.in",
    tags: ["React", "Typescript", "Redux"]
  },
  {
    id: 3,
    title: "Event Management System",
    desc: "A powerful system for managing events and attendees.",
    img: "/event.png",
    link: "https://sourabhsharma.net",
    tags: ["React", "NextJS", "Prisma"]
  }
];

export const allTags = [];

projects.forEach(project => {
  project.tags.forEach(tag => !allTags.includes(tag) && allTags.push(tag));
});

export const allKebabTags = allTags.map(tag => kebabCase(tag));

export default projects;
