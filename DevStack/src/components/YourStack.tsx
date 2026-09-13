
import type { Dispatch, SetStateAction } from "react";
import type { TechType } from "../types/techTypes";
import { toast } from "react-toastify";

interface YourStackProps {
    stack: TechType[];
    setStack: Dispatch<SetStateAction<TechType[]>>;
}

const YourStack = ({
    stack,
    setStack,
}: YourStackProps) => {

    const handleRemove = (id: string) => {
        const removedTechnology = stack.find(
            (technology) => technology.id === id
        );

        setStack((previousStack) =>
            previousStack.filter(
                (technology) => technology.id !== id
            )
        );

        if (removedTechnology) {
            toast.info(
                `${removedTechnology.name} removed from your stack.`
            );
        }
    };

    const handleRemoveAll = () => {
        if (stack.length === 0) return;

        setStack([]);
        toast.success("All technologies removed from your stack!");
    };

    return (
        <section className="py-10 lg:py-0">

            <div className="bg-white border border-[#e2e8f0] rounded-xl shadow-sm p-5">

                {/* Header */}
                <div className="mb-5">
                    <h2 className="text-xl font-bold text-[#0f172a]">
                        Your Stack
                    </h2>

                    <p className="text-xs text-[#64748b] mt-1">
                        {stack.length === 0
                            ? "No technology selected"
                            : `${stack.length} ${stack.length === 1
                                ? "technology selected"
                                : "technologies selected"
                            }`}
                    </p>
                </div>

                {/* Empty State */}
                {stack.length === 0 ? (
                    <div className="border-2 border-dashed border-[#cbd5e1] rounded-lg p-7 text-center">
                        <p className="text-sm text-[#64748b]">
                            Your stack is empty
                        </p>

                    </div>
                ) : (
                    <>
                        {/* Selected Technologies */}
                        <div className="space-y-2.5">
                            {stack.map((technology) => (
                                <div
                                    key={technology.id}
                                    className="border border-[#e2e8f0] rounded-lg px-3 py-2.5"
                                >
                                    <div className="flex items-center gap-2.5">

                                        <img
                                            src={technology.icon}
                                            alt={technology.name}
                                            className="w-8 h-8 object-contain shrink-0"
                                        />

                                        <div className="min-w-0 flex-1">
                                            <h3 className="text-sm font-semibold text-[#0f172a] truncate">
                                                {technology.name}
                                            </h3>

                                            <span className="inline-block mt-1 px-2 py-0.5 rounded-md bg-[#f1f5f9] text-[#64748b] text-[9px]">
                                                {technology.category}
                                            </span>
                                        </div>

                                        <button
                                            onClick={() =>
                                                handleRemove(technology.id)
                                            }
                                            className="text-xl leading-none text-[#94a3b8] hover:text-red-500 transition shrink-0"
                                            aria-label={`Remove ${technology.name}`}
                                        >
                                            ×
                                        </button>

                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Remove All */}
                        <button
                            onClick={handleRemoveAll}
                            className="w-full mt-5 py-2.5 rounded-lg border border-[#fca5a5] text-[#ef4444] text-sm font-medium hover:bg-[#fef2f2] transition"
                        >
                            Remove All
                        </button>
                    </>
                )}

            </div>

        </section>
    );
};

export default YourStack;

