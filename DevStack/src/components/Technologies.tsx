
import { useEffect, useState } from "react";
import type { Dispatch, SetStateAction } from "react";
import type { TechType } from "../types/techTypes";
import TechnologyCard from "./TechnologyCard";

type TechnologiesProps = {
    stack: TechType[];
    setStack: Dispatch<SetStateAction<TechType[]>>;
};

const Technologies = ({
    stack,
    setStack,
}: TechnologiesProps) => {
    const [technologies, setTechnologies] = useState<TechType[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("/data.json")
            .then((res) => res.json())
            .then((data: TechType[]) => {
                setTechnologies(data);
                setLoading(false);
            })
            .catch(() => {
                setLoading(false);
            });
    }, []);

    if (loading) {
        return (
            <section className="py-10 text-center">
                <span className="loading loading-spinner loading-lg"></span>
                <p className="mt-3 text-gray-500">
                    Loading technologies...
                </p>
            </section>
        );
    }

    return (
        <section className="py-10">

            {/* Section Heading */}
            <div className="mb-7">
                <h1 className="text-3xl sm:text-4xl font-bold text-[#0f172a]">
                    Explore the{" "}
                    {/* <span className="text-[#de4ba6]">
                        Technologies
                    </span> */}
                    <span className="text-(--brand-pink-text)">
                        Technologies
                    </span>
                </h1>

                <p className="mt-2 text-md text-[#64748b]">
                    Pick one technology per category to build your ideal stack.
                </p>
            </div>

            {/* Technology Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {technologies.map((technology) => (
                    <TechnologyCard
                        key={technology.id}
                        technology={technology}
                        stack={stack}
                        setStack={setStack}
                    />
                ))}
            </div>

        </section>
    );
};

export default Technologies;

