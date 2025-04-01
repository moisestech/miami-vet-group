import { cn } from "@/lib/utils";
import { Service } from "@/data/services"; // Make sure this path is correct

const ServiceCard = ({ name, description, icon, color, keywords }: Service) => {
  return (
    <figure
      className={cn(
        "relative mx-auto min-h-fit w-full cursor-pointer overflow-hidden rounded-2xl md:rounded-3xl p-4 md:p-8",
        "transition-all duration-300 ease-in-out hover:scale-[102%]",
        "bg-white/20 backdrop-blur-md",
        "transform-gpu [border:1px_solid_rgba(255,255,255,.2)] [box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
      )}
    >
      <div className="flex flex-row items-start gap-3 md:gap-8">
        <div
          className="flex size-16 md:size-24 items-center justify-center rounded-xl md:rounded-2xl shrink-0"
          style={{
            backgroundColor: color,
          }}
        >
          <span className="text-2xl md:text-3xl">{icon}</span>
        </div>
        <div className="flex flex-col overflow-hidden min-w-0 flex-1">
          <figcaption className="flex flex-row items-center text-xl md:text-2xl font-medium text-[#5e208e] gap-2 md:gap-3 flex-wrap">
            <span className="break-words">{name}</span>
          </figcaption>
          <p className="text-base md:text-lg font-normal text-[#5e208e]/80 break-words">
            {description}
          </p>
          {keywords && keywords.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-2">
              {keywords.map((keyword: string, idx: number) => (
                <span 
                  key={idx} 
                  className="text-xs px-2 py-1 bg-[#5e208e]/10 rounded-full text-[#5e208e]/70"
                >
                  {keyword}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </figure>
  );
};

export default ServiceCard; 