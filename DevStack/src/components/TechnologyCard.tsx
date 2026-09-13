
import type { TechType } from "../types/techTypes";
import type { Dispatch, SetStateAction } from "react";
import { toast } from "react-toastify";

type TechnologyCardProps = {
    technology: TechType;
    stack: TechType[];
    setStack: Dispatch<SetStateAction<TechType[]>>;
};

const badgeColors: Record<string, string> = {
    react: "bg-[#e0f7ff] text-[#149eca]",
    vue: "bg-[#e3f8ed] text-[#42b883]",
    svelte: "bg-[#fff0e6] text-[#ff3e00]",
    nextjs: "bg-[#eeeeee] text-[#111111]",
    nodejs: "bg-[#e8f7e8] text-[#339933]",
    expressjs: "bg-[#eeeeee] text-[#222222]",
    postgresql: "bg-[#e5eff8] text-[#336791]",
    mongodb: "bg-[#e6f6e9] text-[#47a248]",
    javascript: "bg-[#fff8d6] text-[#a17f00]",
    typescript: "bg-[#e6f0ff] text-[#3178c6]",
    tailwindcss: "bg-[#e3f8fb] text-[#06b6d4]",
    docker: "bg-[#e4f3ff] text-[#2496ed]",
    java: "bg-[#fff0e8] text-[#e76f00]",
    redis: "bg-[#ffe9e9] text-[#d82c20]",
};

const TechnologyCard = ({
    technology,
    stack,
    setStack,
}: TechnologyCardProps) => {
    const alreadyExists = stack.some(
        (item) => item.id === technology.id
    );

    const handleAddToStack = () => {
        if (alreadyExists) {
            toast.warning(`${technology.name} is already in your stack!`);
            return;
        }

        setStack((previousStack) => [
            ...previousStack,
            technology,
        ]);

        toast.success(`${technology.name} added to your stack!`);
    };

    return (
        <div className="bg-white border border-[#e2e8f0] rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 h-full">
            <div className="p-5 flex flex-col h-full">

                {/* Icon + Badge */}
                <div className="flex items-start justify-between gap-2">
                    <img
                        src={technology.icon}
                        alt={technology.name}
                        className="w-11 h-11 object-contain"
                    />

                    {technology.badge && (
                        <span
                            className={`px-2.5 py-1 rounded-full text-[10px] font-medium whitespace-nowrap ${badgeColors[technology.id] ||
                                "bg-gray-100 text-gray-600"
                                }`}
                        >
                            {technology.badge}
                        </span>
                    )}
                </div>

                {/* Name */}
                <h3 className="text-lg font-bold text-[#0f172a] mt-4">
                    {technology.name}
                </h3>

                {/* Description */}
                <p className="text-xs text-[#64748b] leading-5 mt-2 flex-1">
                    {technology.description}
                </p>

                <hr className="text-[#faf3f3] mt-5 " />
                {/* Category + Difficulty + Rating */}

                <div className="grid grid-cols-3 gap-2 mt-3 w-full">
                    <div className="min-w-0">
                        <span className="block w-full text-center px-1 py-1 rounded-md bg-[#f1f5f9] text-[#64748b] text-[8px] whitespace-nowrap">
                            {technology.category}
                        </span>
                    </div>

                    <div className="min-w-0">
                        <span className="block w-full text-center px-1  py-1 rounded-md  text-[#64748b] text-[10px] whitespace-nowrap">
                            {technology.difficulty}
                        </span>
                    </div>

                    <div className="min-w-0 flex items-center justify-center">
                        <span className="text-[10px] text-[#334155] whitespace-nowrap">
                            ⭐ {technology.rating}
                        </span>
                    </div>
                </div>

                {/* Button */}
                <button
                    onClick={handleAddToStack}
                    disabled={alreadyExists}
                    className={`w-full mt-4 py-2.5 rounded-lg text-sm font-medium transition ${alreadyExists
                        ? "bg-[#e2e8f0] text-[#94a3b8] cursor-not-allowed"
                        : "bg-black text-white hover:bg-[#1f2937]"
                        }`}
                >
                    {alreadyExists
                        ? "✓ Added to Stack"
                        : "Add to Stack"}
                </button>

            </div>
        </div>
    );
};

export default TechnologyCard;

