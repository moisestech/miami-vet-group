import { IconType } from "react-icons";
import { FaHeart, FaPaw, FaLeaf, FaMedkit, FaBrain, FaUserMd } from "react-icons/fa";

// Define interfaces for team members
export interface TeamMember {
  name: string;
  role: string;
  image: string;
  instagram?: string;
  bio?: string;
  order: {
    mobile: number;
    desktop: number;
  },
  objectPosition?: string;
}

// Doctor/Veterinarian Team
export const doctors: TeamMember[] = [
  {
    name: "Dr. Francelis Rodriguez",
    role: "Veterinarian & Founder",
    image: "https://res.cloudinary.com/dck5rzi4h/image/upload/v1741107085/miamivetgroup/WhatsApp-Image-2023-02-18-at-12.30.22_ho9ar4.jpg",
    instagram: "dr.rod305",
    bio: "Specializes in integrative veterinary medicine, combining conventional treatments with holistic approaches.",
    order: { 
      mobile: 1,
      desktop: 1
    },
    objectPosition: "50% calc(50% + 15px)"
  },
  {
    name: "Dr. Luzzelena Rodriguez",
    role: "Veterinarian",
    image: "https://res.cloudinary.com/dck5rzi4h/image/upload/v1741107092/miamivetgroup/WhatsApp-Image-2023-02-18-at-12.30.22-1_mmwlkd.jpg",
    instagram: "miamivetgroupdrluzz",
    order: {
      mobile: 2,
      desktop: 3
    },
   objectPosition: "50% calc(50% + 15px)"
  }
];

// Support Staff
export const staff: TeamMember[] = [
  {
    name: "Mare Arias",
    role: "Manager",
    image: "https://res.cloudinary.com/dck5rzi4h/image/upload/v1743456364/miamivetgroup/mare-miami-vet-gruop-family_awsi9a.jpg",
    instagram: "miamivetgroup",
    bio: "As our Practice Manager, Mare ensures the smooth operation of Miami Vet Group, coordinating between our medical team and clients to provide the best possible care experience.",
    order: {
      mobile: 2,
      desktop: 2
    },
    objectPosition: "50% calc(50% + 15px)"
  },
  {
    name: "Kat",
    role: "Vet Tech",
    image: "https://res.cloudinary.com/dck5rzi4h/image/upload/v1741107103/miamivetgroup/contact-us-miami-vet-e1712431137711_vv1fha.jpg",
    order: {
      mobile:  4,
      desktop: 4
    },
    objectPosition: "50% calc(50% + 5px)"
  },
  {
    name: "Marcela",
    role: "Vet Tech",
    image: "https://res.cloudinary.com/dck5rzi4h/image/upload/v1741107095/miamivetgroup/contact-us-miami-vet-1-e1712431328760_kfuwoi.jpg",
    order: {
      mobile: 5,
      desktop: 5
    },
    objectPosition: "50% calc(50% + 5px)"
  },
  {
    name: "Luis",
    role: "Assistant",
    image: "https://res.cloudinary.com/dck5rzi4h/image/upload/v1741107086/miamivetgroup/miami-vet-group-family-1-e1712431478744_jt0qzp.jpg",
    order: {
      mobile: 6,
      desktop: 6
    },
    objectPosition: "50% calc(50% + 5px)"
  }
];

// Combined team (useful for general use)
export const teamMembers: TeamMember[] = [...doctors, ...staff];

// Alias for the About page
export const allTeamMembers = teamMembers;

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