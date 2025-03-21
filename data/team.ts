import { IconType } from "react-icons";
import { FaHeart, FaPaw, FaLeaf, FaMedkit, FaBrain, FaUserMd } from "react-icons/fa";

// Define interfaces for team members
export interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio: string;
  instagram?: string; // Make instagram optional
}

// Doctor/Veterinarian Team
export const doctors: TeamMember[] = [
  {
    name: "Dr. Francelis Gonzalez",
    role: "Veterinarian",
    image: "https://res.cloudinary.com/dck5rzi4h/image/upload/v1741107085/miamivetgroup/WhatsApp-Image-2023-02-18-at-12.30.22_ho9ar4.jpg",
    bio: "Specializes in integrative veterinary medicine, combining conventional treatments with holistic approaches.",
    instagram: "dr.rod305"
  },
  {
    name: "Dr. Luzzelena Perez",
    role: "Veterinarian",
    image: "https://res.cloudinary.com/dck5rzi4h/image/upload/v1741107092/miamivetgroup/WhatsApp-Image-2023-02-18-at-12.30.22-1_mmwlkd.jpg",
    bio: "Focuses on preventative care and nutrition, helping pets maintain optimal health throughout their lives.",
    instagram: "miamivetgroupdrluzz"
  }
];

// Support Staff
export const staff: TeamMember[] = [
  {
    name: "Kat",
    role: "Vet Tech",
    image: "https://res.cloudinary.com/dck5rzi4h/image/upload/v1741107103/miamivetgroup/contact-us-miami-vet-e1712431137711_vv1fha.jpg",
    bio: "Provides compassionate care and assistance with treatments and procedures."
  },
  {
    name: "Marcela",
    role: "Vet Tech",
    image: "https://res.cloudinary.com/dck5rzi4h/image/upload/v1741107095/miamivetgroup/contact-us-miami-vet-1-e1712431328760_kfuwoi.jpg",
    bio: "Specializes in patient care and monitoring, ensuring pets are comfortable during their visits."
  },
  {
    name: "Luis",
    role: "Assistant",
    image: "https://res.cloudinary.com/dck5rzi4h/image/upload/v1741107086/miamivetgroup/miami-vet-group-family-1-e1712431478744_jt0qzp.jpg",
    bio: "Helps with daily operations and ensures the clinic runs smoothly for both patients and clients."
  }
];

// Combined team (useful for About page)
export const allTeamMembers: TeamMember[] = [...doctors, ...staff];

// Company values for About page
export interface Value {
  icon: IconType;
  title: string;
  description: string;
}

export const companyValues: Value[] = [
  {
    icon: FaHeart,
    title: "Compassion",
    description: "We treat every animal with the same care and respect we would give to our own pets."
  },
  {
    icon: FaPaw,
    title: "Patient-Centered",
    description: "Each treatment plan is tailored to the individual needs of your pet."
  },
  {
    icon: FaLeaf,
    title: "Holistic Approach",
    description: "We consider all aspects of your pet's health: physical, emotional, and environmental."
  },
  {
    icon: FaMedkit,
    title: "Integrative Care",
    description: "Combining conventional medicine with complementary therapies for optimal results."
  },
  {
    icon: FaBrain,
    title: "Continuous Learning",
    description: "We stay current with the latest veterinary research and techniques."
  },
  {
    icon: FaUserMd,
    title: "Professional Excellence",
    description: "Our team holds themselves to the highest standards of veterinary practice."
  }
]; 