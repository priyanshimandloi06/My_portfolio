export const roles = [
  "an AIML Engineering Student",
  "a Team Leader",
  "a Public Speaker",
  "a Web Developer",
];

export const bio =
  "I was born and raised in Bhopal, and I'm currently pursuing my B.Tech in AIML at Bansal Institute of Science and Technology with a cumulative CGPA of 7.7. I'm an enthusiastic learner and a confident, motivated leader with a genuine passion for public speaking — I enjoy building things and talking about them just as much.";

export const marqueeItems = [
  "Python", "C++", "HTML", "CSS", "Flask", "React", "Next.js",
  "NumPy", "Pandas", "SQLite", "PostgreSQL", "Power BI",
  "Git & GitHub", "UI/UX Design", "Public Speaking", "Leadership",
];

export const skillGroups = [
  {
    title: "Languages",
    icon: "code",
    accent: "pink",
    span: "s2",
    chips: ["Python", "C++", "Object-Oriented Programming"],
  },
  {
    title: "Web Development",
    icon: "globe",
    accent: "amber",
    span: "s2",
    chips: ["HTML", "CSS", "Flask", "React", "Next.js"],
  },
  {
    title: "Data & Analytics",
    icon: "chart",
    accent: "mint",
    span: "s2",
    chips: ["NumPy", "Pandas", "SQLite", "PostgreSQL", "Power BI"],
  },
  {
    title: "Tools & AI",
    icon: "tools",
    accent: "peri",
    span: "s4",
    chips: [
      "Git & GitHub", "VS Code", "Vercel", "Render", "Netlify",
      "Claude", "GitHub Copilot", "ChatGPT", "Google Antigravity",
    ],
  },
  {
    title: "Design",
    icon: "palette",
    accent: "pink",
    span: "s2",
    chips: ["Graphic Designing", "UI/UX Designing", "Canva AI"],
  },
  {
    title: "Leadership & Communication",
    icon: "mic",
    accent: "mint",
    span: "s6",
    chips: [
      "Team Leadership", "Public Speaking", "Communication",
      "Self-Motivation", "Confidence",
    ],
  },
];

export const projects = [
  {
    id: "krishiconnect",
    num: "01",
    title: "KrishiConnect",
    role: "Team Leader & Developer",
    accent: "pink",
    icon: "sprout",
    problem:
      "Farmers frequently lose income to middlemen who control pricing and market access, leaving little room for direct, fair trade with consumers.",
    solution:
      "KrishiConnect is a digital marketplace that connects farmers directly with consumers, removing the middleman entirely so farmers can price fairly and grow their business.",
    extra: {
      label: "Challenges",
      text:
        "Finding a document that every farmer has as proof of being a farmer was the first challenge. After research, I settled on documents like the PM Kisan ID and the Khasra Patta ID. The second challenge was managing role-based access, so each type of user sees and can do only what they should.",
    },
    tech: ["Python", "Flask", "SQLite", "React", "Render", "Machine Learning"],
    link: "https://krishiconnect-frontend-4awt.onrender.com/",
  },
  {
    id: "cems",
    num: "02",
    title: "College Event Management System",
    role: "Team Leader & Developer",
    accent: "peri",
    icon: "cal",
    problem:
      "Students had no single place to learn about upcoming college events, and signing up or paying for them meant a slow, manual process.",
    solution:
      "An online platform where students can browse upcoming events, register themselves instantly, and complete payment, all in one place.",
    extra: {
      label: "Challenges",
      text:
        "A student could register for the same event multiple times. I fixed this by tying each registration to a mobile number: one mobile number can register for an event only once, so repeat entries are blocked.",
    },
    tech: ["HTML", "CSS", "JavaScript"],
    link:
      "https://6ab8bcaac11a339db4096dff--college-event-management-frontend.netlify.app/",
  },
  {
    id: "inspectra",
    num: "03",
    title: "Inspectra",
    role: "Full-Stack & AI/ML Developer",
    accent: "amber",
    icon: "shield",
    problem:
      "Periodic inspections only check an institute at fixed intervals, so risk can quietly build up between visits, and officials have no simple way to tell which institutes most urgently need attention.",
    solution:
      "INSPECTRA is a centralized platform that turns periodic inspection into continuous, risk-based monitoring. It combines attendance, compliance, feedback, inspection history and authorized CCTV activity signals to identify unusual or high-risk patterns, and gives each institute an explainable risk score so officials understand exactly why it needs attention. Based on the risk reasons, it automatically creates a customized inspection checklist for the field inspector — a closed loop that runs from risk identification to inspection, corrective action, resolution verification, and back to an updated risk score.",
    extra: {
      label: "What makes it unique",
      points: [
        "AI never declares fraud on its own — it only highlights explainable risk patterns for a human to verify.",
        "Inspection priority changes dynamically with each institute's risk profile.",
        "The specific reason behind a risk score decides exactly what the inspector needs to check.",
        "GPS data, timestamped photographs and documents strengthen every piece of inspection evidence.",
        "The complete journey is tracked end-to-end: risk → inspection → corrective action → resolution.",
      ],
    },
    tech: [
      "React.js", "Vite", "Flask", "PostgreSQL", "OpenCV", "scikit-learn", "AI/ML",
    ],
    link: "https://inspectra-bice.vercel.app/",
  },
  {
    id: "ejournals",
    num: "04",
    title: "E-Journals",
    role: "UI/UX Designer",
    accent: "mint",
    icon: "pen",
    about:
      "Designed the interface and overall user experience for E-Journals, a digital platform for browsing and accessing academic journals and publications online.",
    tech: ["UI/UX Design"],
    link: null,
  },
];

export const education = [
  {
    year: "2024 – 2028",
    score: "7.7 CGPA",
    title: "B.Tech, Artificial Intelligence & Machine Learning",
    place: "Bansal Institute of Science and Technology, Bhopal",
    accent: "pink",
  },
  {
    year: "2023",
    score: "80.6%",
    title: "Class XII",
    place: "D.A.V. Public Higher Secondary School, Bhopal, M.P.",
    accent: "amber",
  },
  {
    year: "2021",
    score: "85%",
    title: "Class X",
    place: "D.A.V. Public Higher Secondary School, Bhopal, M.P.",
    accent: "mint",
  },
];

export const certifications = [
  {
    issuer: "Cisco Networking Academy",
    name: "Python Essentials 1",
    accent: "pink",
    link:
      "https://www.linkedin.com/posts/priyanshi-mandloi-539a2532b_python-cisconetworkingacademy-openedg-activity-7391482250179137536-Nyu_?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFNEbr0B6F0YcGJQXCkn5z6BoLTyZYDx4oo",
  },
  {
    issuer: "Infosys",
    name: "C++ Programming",
    accent: "amber",
    link:
      "https://www.linkedin.com/posts/priyanshi-mandloi-539a2532b_infosysspringboard-python-programming-activity-7485913561266008064--7dV?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFNEbr0B6F0YcGJQXCkn5z6BoLTyZYDx4oo",
  },
  {
    issuer: "Be10x",
    name: "AI Tools Learning",
    accent: "mint",
    link:
      "https://www.linkedin.com/posts/priyanshi-mandloi-539a2532b_be10x-certificate-activity-7421172080345350145-40em?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFNEbr0B6F0YcGJQXCkn5z6BoLTyZYDx4oo",
  },
  {
    issuer: "Simplilearn",
    name: "Generative AI",
    accent: "peri",
    link:
      "https://www.linkedin.com/posts/priyanshi-mandloi-539a2532b_thrilled-to-share-my-certification-of-generative-activity-7329900433890549760-4Lzq?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFNEbr0B6F0YcGJQXCkn5z6BoLTyZYDx4oo",
  },
  {
    issuer: "Saylors Academy",
    name: "Presentation Skills",
    accent: "peri",
    link:
      "https://www.linkedin.com/posts/priyanshi-mandloi-539a2532b_successfully-completed-a-22-hour-course-on-activity-7332412231436980224-nszF?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFNEbr0B6F0YcGJQXCkn5z6BoLTyZYDx4oo",
  },
  {
    issuer: "Saylors Academy",
    name: "Interviewing Skills",
    accent: "mint",
    link:
      "https://www.linkedin.com/posts/priyanshi-mandloi-539a2532b_my-communication-skills-certification-in-activity-7272587458519699456-ec7j?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFNEbr0B6F0YcGJQXCkn5z6BoLTyZYDx4oo",
  },
  {
    issuer: "Saylors Academy",
    name: "Group Communication",
    accent: "amber",
    link:
      "https://www.linkedin.com/posts/priyanshi-mandloi-539a2532b_english-group-communication-certification-activity-7271932389851906049-2eVz?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFNEbr0B6F0YcGJQXCkn5z6BoLTyZYDx4oo",
  },
  {
    issuer: "HackerRank",
    name: "CSS",
    accent: "pink",
    link: "https://www.hackerrank.com/certificates/iframe/d3bad13437eb",
  },
];

export const codingProfiles = [
  {
    name: "LeetCode",
    handle: "View profile",
    icon: "leetcode",
    accent: "amber",
    link: "https://leetcode.com/u/F7vZwl1TcE/",
  },
  {
    name: "HackerRank",
    handle: "View profile",
    icon: "hackerrank",
    accent: "mint",
    link: "https://www.hackerrank.com/profile/priyanshimandlo1",
  },
];

export const connectLinks = {
  github: "https://github.com/priyanshimandloi06",
  linkedin: "https://www.linkedin.com/in/priyanshi-mandloi-539a2532b",
  email: "priyanshimandloi06@gmail.com",
  phone: "+91 70245 36627",
};

export const resumeUrl =
  "https://1drv.ms/w/c/cfd9a88d4bc2a72f/IQB6CmicZcqRToPzLjpv2RcGAXVQxzTYkP0Twmp7Nsn37-M?e=ErggKT";

