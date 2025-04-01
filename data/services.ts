export interface Service {
  name: string;
  description: string;
  icon: string;
  color: string;
  time?: string;
  keywords?: string[];
}

export const services: Service[] = [
  {
    name: "Holistic Care",
    description: "Comprehensive holistic veterinary care near you. We combine natural treatments with modern medicine for optimal pet health.",
    icon: "🌱",
    color: "#FFE6F7",
    time: "60 min",
    keywords: ["holistic vet near me", "natural vet near me"]
  },
  {
    name: "Integrative Medicine",
    description: "As leading integrative vets in Pinecrest, we provide balanced healthcare combining traditional and alternative approaches.",
    icon: "⚕️",
    color: "#FFB1F5",
    time: "60 min",
    keywords: ["integrative vets", "pinecrest vet hospital"]
  },
  {
    name: "Homeopathic Treatment",
    description: "Expert homeopathic veterinary care near you. Natural solutions for your pet's wellness journey.",
    icon: "🌿",
    color: "#FFC6F3",
    time: "60 min",
    keywords: ["homeophatic vet near me", "natural vet near me"]
  },
  {
    name: "General Veterinary Care",
    description: "Complete veterinary hospital services near you. Miami Vet Group provides comprehensive care for all your pet's needs.",
    icon: "🏥",
    color: "#FFB1F5",
    time: "45-60 min",
    keywords: ["vet hospital near me", "miami vet group"]
  },
  {
    name: "Acupuncture",
    description: "Holistic veterinary acupuncture treatments. Natural pain relief and healing for your pets.",
    icon: "💉",
    color: "#FFE6F7",
    time: "45-60 min",
    keywords: ["holistic vet near me", "integrative vets"]
  },
  {
    name: "Chinese Medicine",
    description: "Traditional Chinese veterinary medicine in Pinecrest. Natural and holistic approaches for pet wellness.",
    icon: "🌿",
    color: "#FFC6F3",
    time: "60 min",
    keywords: ["holistic veterinary near me", "natural vet near me"]
  },
  {
    name: "Homeopathy",
    description: "Natural homeopathic treatments from experienced veterinary professionals",
    icon: "🌿",
    color: "#FFC6F3",
    time: "60 min",
    keywords: ["homeophatic vet near me", "natural vet near me"]
  }
];

// Helper function to get services by keyword
export const getServicesByKeyword = (keyword: string) => {
  return services.filter(service => 
    service.keywords?.includes(keyword.toLowerCase())
  );
};

export default services;