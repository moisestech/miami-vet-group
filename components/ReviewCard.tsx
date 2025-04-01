import { cn } from "@/lib/utils";

interface ReviewCardProps {
  name: string;
  text: string;
  petName: string;
  emoji: string;
}

export function ReviewCard({ name, text, petName, emoji }: ReviewCardProps) {
  return (
    <figure
      className={cn(
        "relative h-full w-80 overflow-hidden rounded-xl p-6 mx-3",
        "bg-white/40 backdrop-blur-md border border-white/60",
        "hover:bg-white/50 transition-all duration-300",
        "transform-gpu [box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]"
      )}
    >
      <div className="flex flex-row items-center gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#5e208e]/10">
          <span className="text-2xl">{emoji}</span>
        </div>
        <div className="flex flex-col">
          <figcaption className="text-base font-medium text-[#5e208e]">
            {name}
          </figcaption>
          <p className="text-sm font-medium text-[#e83f85]">& {petName}</p>
        </div>
      </div>
      <blockquote className="mt-4 text-[#5e208e]/90 text-sm italic">
        &ldquo;{text}&rdquo;
      </blockquote>
    </figure>
  );
} 