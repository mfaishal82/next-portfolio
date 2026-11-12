import { db } from "@/config/firebase";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import {
  sortProjectsByDate,
  sortExperiencesByPeriod,
  sortEducationByPeriod,
  sortCertificatesByDate,
} from "@/utils/sorter";
import staticProjects from "@/project";

// Default Profile Fallback
export const fallbackProfile = {
  name: "Muhammad Faisal",
  role: "Fullstack Developer",
  status: "Open to High-Impact Opportunities",
  location: "Depok, Indonesia",
  phone: "+62 838 7665 7601",
  email: "mfaishal.works@gmail.com",
  github: "https://github.com/mfaishal82",
  linkedin: "https://www.linkedin.com/in/mfaishal82",
  portfolioUrl: "https://mfaishal.my.id/",
  bio: "Hello! I'm Muhammad Faisal, a Fullstack Developer. My journey into software development began out of sheer curiosity, and I quickly realized that this is my true calling. The process of learning new technologies has not only equipped me with technical skills but also fostered a growth mindset that I cherish.",
  yearsOfExp: 2,
};

// Fetch Projects from Firestore with fallback to static projects
export async function fetchProjects() {
  try {
    const snap = await getDocs(collection(db, "projects"));
    const list = [];
    snap.forEach((docSnap) => {
      const data = docSnap.data();
      list.push({
        id: docSnap.id,
        ...data,
        // Pastikan image bertipe array
        image: Array.isArray(data.image) ? data.image : [data.image].filter(Boolean),
      });
    });

    if (list.length > 0) {
      return sortProjectsByDate(list);
    }
  } catch (err) {
    console.warn("Firestore fetchProjects warning:", err.message);
  }
  return staticProjects;
}

// Fetch Profile from Firestore
export async function fetchProfile() {
  try {
    const snap = await getDoc(doc(db, "profile", "main_profile"));
    if (snap.exists()) {
      return { ...fallbackProfile, ...snap.data() };
    }
  } catch (err) {
    console.warn("Firestore fetchProfile warning:", err.message);
  }
  return fallbackProfile;
}

// Fetch Experiences from Firestore
export async function fetchExperiences() {
  try {
    const snap = await getDocs(collection(db, "experiences"));
    const list = [];
    snap.forEach((docSnap) => {
      list.push({ id: docSnap.id, ...docSnap.data() });
    });
    if (list.length > 0) {
      return sortExperiencesByPeriod(list);
    }
  } catch (err) {
    console.warn("Firestore fetchExperiences warning:", err.message);
  }
  return [
    {
      id: "exp-talenta-eduwork",
      role: "Programmer - Internship (Remote)",
      company: "PT TALENTA SINERGI GROUP (EDUWORK)",
      period: "July 2024 - October 2024",
      type: "Internship",
      description: "Collaborated closely with a Project Manager and a team of 2 developers to build and optimize web applications utilizing React.js and Laravel architecture. Engineered and delivered 6+ fully functional web pages within a 3-month timeframe, ensuring high performance and seamless user experiences. Translated complex UI/UX designs from Figma into pixel-perfect, reusable front-end components using React.js, Blade and HTML.",
      technologies: ["React.js", "Laravel", "Blade", "HTML", "Figma", "UI/UX"],
    },
  ];
}

// Fetch Educations from Firestore
export async function fetchEducations() {
  try {
    const snap = await getDocs(collection(db, "educations"));
    const list = [];
    snap.forEach((docSnap) => {
      list.push({ id: docSnap.id, ...docSnap.data() });
    });
    if (list.length > 0) {
      return sortEducationByPeriod(list);
    }
  } catch (err) {
    console.warn("Firestore fetchEducations warning:", err.message);
  }
  return [
    {
      id: "edu-orbit",
      school: "Orbit Future Academy",
      degree: "AWS re/Start Program",
      period: "July 2025 – October 2025",
      grade: "Jakarta, Indonesia",
    },
    {
      id: "edu-hacktiv8",
      school: "Hacktiv8",
      degree: "Full Stack JavaScript Immersive Program",
      period: "November 2023 – April 2024",
      grade: "Jakarta, Indonesia (Transcript Available)",
    },
  ];
}

// Fetch Certificates from Firestore
export async function fetchCertificates() {
  try {
    const snap = await getDocs(collection(db, "certificates"));
    const list = [];
    snap.forEach((docSnap) => {
      list.push({ id: docSnap.id, ...docSnap.data() });
    });
    if (list.length > 0) {
      return sortCertificatesByDate(list);
    }
  } catch (err) {
    console.warn("Firestore fetchCertificates warning:", err.message);
  }
  return [];
}

// Fetch All in Parallel
export async function fetchAllPortfolioData() {
  const [projects, profile, experiences, educations, certificates] = await Promise.all([
    fetchProjects(),
    fetchProfile(),
    fetchExperiences(),
    fetchEducations(),
    fetchCertificates(),
  ]);

  return {
    projects,
    profile,
    experiences,
    educations,
    certificates,
  };
}
