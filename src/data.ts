import { Project, BlogPost, GalleryItem, SkillDomain, JourneyEntry } from './types';

export const portfolioData = {
  about: {
    name: "Rick Wang",
    role: "Hardware Engineer · Tech-Business Thinker · Maker",
    bio: "I'm a high school student passionate about building at the intersection of hardware engineering and business strategy. I design circuits, model enclosures, and think about how physical products create real-world value — from biomedical innovation to embedded systems. I believe the best builders are also strategic thinkers.",
    email: "rickwang327@gmail.com",
    location: "San Francisco, CA"
  },
  skillDomains: [
    {
      id: "hardware",
      name: "Hardware",
      skills: [
        { name: "Breadboard Circuiting", level: "proficient" },
        { name: "Soldering", level: "proficient" },
        { name: "3D Modeling", level: "proficient" },
      ]
    },
    {
      id: "software",
      name: "Software",
      skills: [
        { name: "Python", level: "training" },
        { name: "C++", level: "training" },
      ]
    },
    {
      id: "business",
      name: "Business & Communication",
      skills: [
        { name: "English & Mandarin", level: "proficient" },
        { name: "Tech-Business Presentation", level: "training" },
        { name: "Technical Documentation", level: "training" },
      ]
    }
  ] as SkillDomain[],
  projects: [
    {
      id: "p1",
      title: "Bio-Kit",
      description: "A smart pill organizer bridging embedded hardware and biomedical innovation. Bio-Kit automates medication schedules with compartment-based dose management — built from the ground up using circuit design, 3D-printed enclosures, and embedded programming. It targets real patient adherence challenges in healthcare, where forgetting doses is one of the most common and costly problems.",
      tags: ["Embedded Systems", "3D Printing", "Biomedical", "C++", "Hardware Design"],
      date: "2026 — In Progress",
      featured: true
    }
  ] as Project[],
  blog: [
    {
      id: "b1",
      title: "Bio-Kit: Designing a Biomedical Pill Box from Scratch",
      excerpt: "A breakdown of how I went from identifying a real healthcare problem — medication non-adherence — to designing the hardware architecture for Bio-Kit, my embedded pill organizer project.",
      date: "May 2026",
      readTime: "5 min read"
    },
    {
      id: "b2",
      title: "What Soldering Taught Me About Precision Engineering",
      excerpt: "Reflections on learning to solder — why the skill is more mental than physical, and how it changed the way I approach every other hands-on build.",
      date: "Mar 2026",
      readTime: "4 min read"
    },
    {
      id: "b3",
      title: "Engineering is Only Half the Job: My Case for Tech-Business Thinking",
      excerpt: "Why I think every young engineer should study how products reach markets, and how combining both perspectives makes you a sharper builder.",
      date: "Jan 2026",
      readTime: "3 min read"
    }
  ] as BlogPost[],
  bioKitJourney: [
    {
      id: "j1",
      date: "Jan 2026",
      phase: "Concept",
      title: "Identifying the Problem",
      description: "Started researching medication non-adherence as a real healthcare problem — millions of patients miss doses daily, leading to serious complications. Decided to build a physical solution: a smart pill organizer that automates and tracks dose management.",
      status: "current"
    },
  ] as JourneyEntry[],
  gallery: [
    {
      id: "g1",
      title: "3D Modeling",
      imageUrl: "/3D Modeling.JPG",
      category: "Engineering"
    },
    {
      id: "g2",
      title: "3D Printed Part",
      imageUrl: "/3D printed part.JPG",
      category: "Engineering"
    },
    {
      id: "g3",
      title: "3D View Image",
      imageUrl: "/3D View Image.JPG",
      category: "Engineering"
    },
    {
      id: "g4",
      title: "Circuit Building",
      imageUrl: "/Circuit Building.JPG",
      category: "Electronics"
    },
    {
      id: "g5",
      title: "Circuit Building",
      imageUrl: "/Circuiting Building 2.JPG",
      category: "Electronics"
    },
    {
      id: "g6",
      title: "RC Circuit",
      imageUrl: "/RC Circuit.JPG",
      category: "Electronics"
    },
    {
      id: "g7",
      title: "Soldering",
      imageUrl: "/Soldering.JPG",
      category: "Electronics"
    },
    {
      id: "g8",
      title: "Soldering Project",
      imageUrl: "/Soldering Project.JPG",
      category: "Electronics"
    }
  ] as GalleryItem[],
  lifeGallery: [
    {
      id: "l1",
      title: "On the Course",
      imageUrl: "/Golf 1.jpg",
      category: "Golf"
    },
    {
      id: "l2",
      title: "Tee Shot",
      imageUrl: "/Golf 2.jpg",
      category: "Golf"
    },
    {
      id: "l3",
      title: "Out Riding",
      imageUrl: "/Cycling.jpg",
      category: "Cycling"
    }
  ]
};
