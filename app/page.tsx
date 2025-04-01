import { Metadata } from 'next';
import { LandingClient } from '../components/LandingClient';

export const metadata: Metadata = {
  title: 'Miami Vet Group | Integrative and General Veterinary Hospital in Pinecrest, FL',
  description: 'Holistic & Traditional pet care in Pinecrest. Call 786-713-0863 for an appointment!',
  keywords: [
    'holistic vet near me',
    'holistic veterinary near me',
    'natural vet near me',
    'integrative vets',
    'homeophatic vet near me',
    'pinecrest vet hospital',
    'miami vet group',
    'vet hospital near me'
  ],
  openGraph: {
    title: 'Miami Vet Group | Integrative and General Veterinary Hospital in Pinecrest, FL',
    description: 'Holistic & Traditional pet care in Pinecrest. Call 786-713-0863 for an appointment!',
    url: 'https://miamivetgroup.com',
    siteName: 'Miami Vet Group',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://res.cloudinary.com/dck5rzi4h/image/upload/v1741107109/miamivetgroup/logo-miamivet-slogan2_Mesa-de-trabajo-1_oahwel.png',
        width: 1200,
        height: 630,
        alt: 'Miami Vet Group | Integrative and General Veterinary Hospital in Pinecrest, FL'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Miami Vet Group | Integrative and General Veterinary Hospital in Pinecrest, FL',
    description: 'Holistic & Traditional pet care in Pinecrest. Call 786-713-0863 for an appointment!',
    images: ['https://res.cloudinary.com/dck5rzi4h/image/upload/v1741107109/miamivetgroup/logo-miamivet-slogan2_Mesa-de-trabajo-1_oahwel.png']
  },
  robots: {
    index: true,
    follow: true
  },
  alternates: {
    canonical: 'https://miamivetgroup.com'
  }
};

export default function Home() {
  return (
    <main>
      <LandingClient />
    </main>
  );
}