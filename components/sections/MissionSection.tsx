// "use client"

// import { motion, useScroll, useTransform, MotionValue } from "framer-motion"
// import { useRef, useMemo } from "react"

// export function MissionSection() {
//   const containerRef = useRef<HTMLDivElement>(null)
//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start start", "end end"]
//   }) as { scrollYProgress: MotionValue<number> }

//   const words = [
//     { text: "Integrative", emoji: "🌿" },
//     { text: "and" },
//     { text: "General" },
//     { text: "Veterinary", emoji: "🏥" },
//     { text: "hospital." },
//     { text: "Because" },
//     { text: "we" },
//     { text: "all" },
//     { text: "deserve" },
//     { text: "a" },
//     { text: "second" },
//     { text: "chance", emoji: "🐾" },
//     { text: "Offering" },
//     { text: "comprehensive" },
//     { text: "pet" },
//     { text: "services", emoji: "🩺" },
//     { text: "including" },
//     { text: "wellness" },
//     { text: "exams", emoji: "🔍" },
//     { text: "surgeries", emoji: "🫀" },
//     { text: "and" },
//     { text: "emergency" },
//     { text: "care", emoji: "🚑" }
//   ]

//   // Create transforms using useMemo to avoid hooks in loops
//   const transforms = useMemo(() => {
//     const opacityTransforms: MotionValue<number>[] = []
//     const yTransforms: MotionValue<number>[] = []
//     const scaleTransforms: MotionValue<number>[] = []

//     for (let i = 0; i < words.length; i++) {
//       const start = i / words.length
//       const end = start + 1 / (words.length * 1.5)

//       opacityTransforms.push(
//         useTransform(scrollYProgress, [start, end], [0, 1])
//       )

//       yTransforms.push(
//         useTransform(scrollYProgress, [start, end], [20, 0])
//       )

//       scaleTransforms.push(
//         useTransform(scrollYProgress, [start, end], [0.5, 1])
//       )
//     }

//     return { opacityTransforms, yTransforms, scaleTransforms }
//   }, [scrollYProgress, words.length])

//   return (
//     <section 
//       ref={containerRef}
//       className="min-h-[400vh] relative"
//     >
//       <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#bc85cc]/60 to-transparent">
//         <div className="max-w-6xl mx-auto px-4">
//           <div className="relative flex flex-wrap gap-4 text-4xl md:text-6xl lg:text-7xl font-bold">
//             {words.map((word, i) => (
//               <motion.span
//                 key={`word-${i}`}
//                 className="text-white relative"
//                 style={{
//                   opacity: transforms.opacityTransforms[i],
//                   y: transforms.yTransforms[i],
//                   scale: transforms.scaleTransforms[i]
//                 }}
//               >
//                 {word.text}
//                 {word.emoji && <span className="inline-block ml-1">{word.emoji}</span>}
//                 {' '}
//               </motion.span>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// } 

export default function MissionSection() {}