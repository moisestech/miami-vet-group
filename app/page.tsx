import { Metadata } from 'next';
import { LandingClient } from '../components/LandingClient';

export const metadata: Metadata = {
  title: 'Miami Vet Group | Integrative Veterinary Hospital in Pinecrest, FL',
  description: 'Integrative Veterinary Services – Acupuncture, Chinese Medicine, Alternative Medicine, Holistic therapy. Call 786-713-0863',
  openGraph: {
    title: 'Miami Vet Group | Integrative Veterinary Hospital in Pinecrest, FL',
    description: 'Integrative Veterinary Services – Acupuncture, Chinese Medicine, Alternative Medicine, Holistic therapy. Call 786-713-0863',
    url: 'https://miamivetgroup.com',
    siteName: 'Miami Vet Group',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://res.cloudinary.com/dck5rzi4h/image/upload/v1741107109/miamivetgroup/logo-miamivet-slogan2_Mesa-de-trabajo-1_oahwel.png',
        width: 1200,
        height: 630,
        alt: 'Miami Vet Group Logo'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Miami Vet Group | Integrative Veterinary Hospital in Pinecrest, FL',
    description: 'Integrative Veterinary Services – Acupuncture, Chinese Medicine, Alternative Medicine, Holistic therapy. Call 786-713-0863',
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
  return <LandingClient />;
}