"use client";

import { useCallback, useEffect, useState, useRef } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { motion } from 'framer-motion';
import { MaskedGradientBackground } from '../MaskedGradientBackground';
import { FaChevronLeft, FaChevronRight, FaPause, FaPlay } from 'react-icons/fa';
import Image from 'next/image';

interface WorkItem {
  title: string;
  description: string;
  image: string;
  date: string;
}

const workItems: WorkItem[] = [
  // Add new images at the start
  {
    title: "Compassionate Care",
    description: "Individual attention for every patient",
    image: "https://res.cloudinary.com/dck5rzi4h/image/upload/v1741107123/miamivetgroup/alejachains-8613-1-scaled_x6lhs9.jpg",
    date: "2024"
  },
  {
    title: "Patient Care",
    description: "Dedicated attention and monitoring",
    image: "https://res.cloudinary.com/dck5rzi4h/image/upload/v1741107127/miamivetgroup/alejachains-8637-scaled_dzv3nh.jpg",
    date: "2024"
  },
  // Diagnostic & Surgery
  {
    title: "Advanced X-Ray Diagnostics",
    description: "Digital radiography for precise diagnosis",
    image: "https://res.cloudinary.com/dck5rzi4h/image/upload/v1741107077/miamivetgroup/xrays_z2byei.jpg",
    date: "2024"
  },
  {
    title: "Surgical Procedures",
    description: "State-of-the-art surgical facilities",
    image: "https://res.cloudinary.com/dck5rzi4h/image/upload/v1741107101/miamivetgroup/sergury-miami-vet_m82jmn.jpg",
    date: "2024"
  },
  {
    title: "Laboratory Testing",
    description: "Comprehensive in-house diagnostics",
    image: "https://res.cloudinary.com/dck5rzi4h/image/upload/v1741107091/miamivetgroup/laboratory-pets_p5fhha.jpg",
    date: "2024"
  },
  
  // Alternative Therapies
  {
    title: "Ozone Therapy",
    description: "Advanced healing and immune support",
    image: "https://res.cloudinary.com/dck5rzi4h/image/upload/v1741107108/miamivetgroup/ozony-therapy_q4jyqw.jpg",
    date: "2024"
  },
  {
    title: "Traditional Chinese Medicine",
    description: "Holistic healing approaches",
    image: "https://res.cloudinary.com/dck5rzi4h/image/upload/v1741107100/miamivetgroup/medicine-china_jexjha.jpg",
    date: "2024"
  },
  {
    title: "IV Vitamin Therapy",
    description: "Enhanced nutrition and recovery",
    image: "https://res.cloudinary.com/dck5rzi4h/image/upload/v1741107099/miamivetgroup/IV-VITAMINA-THERAPY_banoqd.jpg",
    date: "2024"
  },
  
  // Advanced Treatments
  {
    title: "Laser Therapy",
    description: "Pain management and healing",
    image: "https://res.cloudinary.com/dck5rzi4h/image/upload/v1741107115/miamivetgroup/laser-teraphy_gsaljk.jpg",
    date: "2024"
  },
  {
    title: "UV Treatment",
    description: "Advanced therapeutic care",
    image: "https://res.cloudinary.com/dck5rzi4h/image/upload/v1741107114/miamivetgroup/uv-treament_ptk6ea.jpg",
    date: "2024"
  },
  
  // Wellness & Prevention
  {
    title: "CBD & Mushroom Treatments",
    description: "Natural therapeutic options",
    image: "https://res.cloudinary.com/dck5rzi4h/image/upload/v1741107118/miamivetgroup/cbd-and-mushrooom-treatments-ozone-therapy-laser-therapy-dental-xrays_g7goep.jpg",
    date: "2024"
  },
  {
    title: "Dental Care",
    description: "Comprehensive oral health",
    image: "https://res.cloudinary.com/dck5rzi4h/image/upload/v1741107080/miamivetgroup/WhatsApp-Image-2023-02-18-at-13.42.26-2_u6ot63.jpg",
    date: "2024"
  },
  
  // Patient Care
  {
    title: "Recovery & Monitoring",
    description: "Dedicated post-procedure care",
    image: "https://res.cloudinary.com/dck5rzi4h/image/upload/v1741107107/miamivetgroup/good-days-pets_ntjhkg.jpg",
    date: "2024"
  }
];

export function OurWorkSection() {
  // Create autoplay plugin instance
  const autoplayPlugin = useRef(
    Autoplay({
      delay: 4000,
      stopOnInteraction: false,
      rootNode: (emblaRoot: HTMLElement) => emblaRoot.parentElement,
    })
  );
  
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true },
    [autoplayPlugin.current]
  );
  
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  
  // Ref for live region
  const liveRegionRef = useRef<HTMLDivElement>(null);

  // Initialize autoplay state
  useEffect(() => {
    if (emblaApi) {
      const plugin = emblaApi.plugins().autoplay;
      if (plugin) {
        setIsPlaying(plugin.isPlaying());
      }
    }
  }, [emblaApi]);

  // Update autoplay handlers in the hover effect
  useEffect(() => {
    if (!emblaApi) return;
    const plugin = emblaApi.plugins().autoplay;
    if (!plugin) return;

    const onPointerOver = () => {
      if (isPlaying && plugin.isPlaying()) {
        plugin.stop();
      }
    };

    const onPointerLeave = () => {
      if (isPlaying && !plugin.isPlaying()) {
        plugin.play();
      }
    };

    const onFocus = () => {
      if (isPlaying && plugin.isPlaying()) {
        plugin.stop();
      }
    };
    
    const rootNode = emblaApi.rootNode();
    rootNode.addEventListener('pointerover', onPointerOver);
    rootNode.addEventListener('pointerleave', onPointerLeave);
    rootNode.addEventListener('focusin', onFocus);
    
    return () => {
      rootNode.removeEventListener('pointerover', onPointerOver);
      rootNode.removeEventListener('pointerleave', onPointerLeave);
      rootNode.removeEventListener('focusin', onFocus);
    };
  }, [emblaApi, isPlaying]);

  // Toggle autoplay function
  const toggleAutoplay = useCallback(() => {
    if (!emblaApi) return;
    const plugin = emblaApi.plugins().autoplay;
    if (!plugin) return;
    
    if (plugin.isPlaying()) {
      plugin.stop();
      setIsPlaying(false);
    } else {
      plugin.play();
      setIsPlaying(true);
    }
  }, [emblaApi]);

  // Announce slide changes
  const announceSlideChange = useCallback((index: number) => {
    if (liveRegionRef.current && workItems[index]) {
      const item = workItems[index];
      liveRegionRef.current.textContent = `Now showing: ${item.title}. ${item.description}`;
    }
  }, []);

  // Enhanced scroll functions with focus management
  const scrollPrev = useCallback(() => {
    if (emblaApi) {
      emblaApi.scrollPrev();
      const prevButton = document.querySelector('[aria-label="Previous slide"]');
      if (prevButton instanceof HTMLElement) {
        prevButton.focus();
      }
    }
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) {
      emblaApi.scrollNext();
      const nextButton = document.querySelector('[aria-label="Next slide"]');
      if (nextButton instanceof HTMLElement) {
        nextButton.focus();
      }
    }
  }, [emblaApi]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      switch (event.key) {
        case 'ArrowLeft':
          scrollPrev();
          break;
        case 'ArrowRight':
          scrollNext();
          break;
        case 'Home':
          emblaApi?.scrollTo(0);
          break;
        case 'End':
          emblaApi?.scrollTo(workItems.length - 1);
          break;
        case ' ':
        case 'Spacebar':
          event.preventDefault();
          toggleAutoplay();
          break;
      }
    };

    const rootNode = emblaApi?.rootNode();
    if (rootNode) {
      rootNode.addEventListener('keydown', handleKeyDown);
      return () => rootNode.removeEventListener('keydown', handleKeyDown);
    }
  }, [emblaApi, scrollNext, scrollPrev, toggleAutoplay]);

  // Enhanced select handler
  useEffect(() => {
    if (emblaApi) {
      emblaApi.on('select', () => {
        const index = emblaApi.selectedScrollSnap();
        setCurrentIndex(index);
        setCanScrollPrev(emblaApi.canScrollPrev());
        setCanScrollNext(emblaApi.canScrollNext());
        announceSlideChange(index);
      });
    }
  }, [emblaApi, announceSlideChange]);

  return (
    <section className="snap-start min-h-screen flex items-center bg-[#d8a0d2bf] py-16 relative overflow-hidden">
      <MaskedGradientBackground 
        maskPath="stars"
        gradientColors={["#FFE6F7", "#FFC6F3", "#FFB1F5"]}
      />

      {/* Live region for announcements */}
      <div
        ref={liveRegionRef}
        aria-live="polite"
        aria-atomic="true"
        className="sr-only"
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-6xl font-bold text-[#5e208e] mb-6">Our Work</h2>
          <p className="text-2xl text-[#5e208e]/80">
            Success stories from our veterinary practice
          </p>
        </motion.div>

        {/* Carousel Container */}
        <div 
          role="region" 
          aria-roledescription="carousel" 
          aria-label="Featured work"
          className="relative max-w-7xl mx-auto"
        >
          {/* Controls Group - Moved to top */}
          <div 
            role="group" 
            aria-label="Carousel controls"
            className="flex items-center justify-center gap-4 mb-6"
          >
            <button
              onClick={toggleAutoplay}
              aria-label={isPlaying ? "Pause auto-rotation" : "Start auto-rotation"}
              className="p-3 rounded-full bg-white/20 backdrop-blur-md hover:bg-white/30 
                transition-colors focus:outline-none focus:ring-2 focus:ring-[#5e208e] 
                focus:ring-offset-2 focus:ring-offset-[#d8a0d2bf] focus:scale-110"
            >
              {isPlaying ? <FaPause className="text-[#5e208e]" /> : <FaPlay className="text-[#5e208e]" />}
            </button>
            {/* Slide picker controls */}
            <div className="flex gap-2">
              {workItems.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => emblaApi?.scrollTo(idx)}
                  aria-label={`Show slide ${idx + 1} of ${workItems.length}`}
                  aria-current={currentIndex === idx ? "true" : undefined}
                  className={`w-4 h-4 rounded-full transition-colors focus:outline-none 
                    focus:ring-2 focus:ring-[#5e208e] focus:ring-offset-2 
                    focus:ring-offset-[#d8a0d2bf] ${
                    currentIndex === idx 
                      ? 'bg-[#5e208e] shadow-lg' 
                      : 'bg-[#5e208e]/40 hover:bg-[#5e208e]/60'
                  }`}
                />
              ))}
            </div>
            {/* Navigation buttons */}
            <div className="flex gap-2">
              <button
                onClick={scrollPrev}
                aria-label="Previous slide"
                disabled={!canScrollPrev}
                className="p-4 rounded-full bg-white/20 backdrop-blur-md hover:bg-white/30 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <FaChevronLeft />
              </button>
              <button
                onClick={scrollNext}
                aria-label="Next slide"
                disabled={!canScrollNext}
                className="p-4 rounded-full bg-white/20 backdrop-blur-md hover:bg-white/30 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <FaChevronRight />
              </button>
            </div>
          </div>

          {/* Carousel Viewport */}
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {workItems.map((item, idx) => (
                <div 
                  key={idx}
                  role="group"
                  aria-roledescription="slide"
                  aria-labelledby={`slide-${idx}-heading`}
                  className="flex-[0_0_100%] min-w-0 pl-4"
                >
                  <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 relative overflow-hidden">
                    {/* Blurred background image */}
                    <div 
                      className="absolute inset-0 -m-4"
                      style={{
                        backgroundImage: `url(${item.image})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        filter: 'blur(20px)',
                        opacity: 0.3,
                        transform: 'scale(1.1)', // Prevent blur edges from showing
                      }}
                    />
                    
                    {/* Content container with glass effect */}
                    <div className="relative z-10 bg-white/30 backdrop-blur-sm rounded-2xl p-4">
                      {/* Image container with dynamic aspect ratio */}
                      <div className="relative w-full max-h-[70vh] overflow-hidden rounded-xl">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <Image
                            src={item.image}
                            alt={item.title}
                            width={400}
                            height={400}
                            className="w-full h-full object-contain"
                          />
                        </div>
                        {/* Maintain aspect ratio without distortion */}
                        <div className="pb-[56.25%]" /> {/* 16:9 aspect ratio placeholder */}
                      </div>

                      {/* Text content */}
                      <div className="max-w-3xl mx-auto mt-6">
                        <h3 
                          id={`slide-${idx}-heading`} 
                          className="text-2xl font-bold text-[#5e208e] mb-2"
                        >
                          {item.title}
                        </h3>
                        <p className="text-lg text-[#5e208e]/80 mb-4">
                          {item.description}
                        </p>
                        <p className="text-sm text-[#5e208e]/60">
                          {item.date}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 