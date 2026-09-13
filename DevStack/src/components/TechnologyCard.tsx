
import type { TechType } from "../types/techTypes";
import type { Dispatch, SetStateAction } from "react";
import { toast } from "react-toastify";


type TechnologyCardProps = {
    technology: TechType;
    stack: TechType[];
    setStack: Dispatch<SetStateAction<TechType[]>>;
};

const TechnologyCard = ({ technology, stack, setStack }: TechnologyCardProps) => {

    const alreadyExists = stack.some((item) => item.id === technology.id);
    const handleAddToStack = () => {
        if (alreadyExists) {
            toast.warning(`${technology.name} is already in your stack!`);
            return;
        }
        setStack((previousStack) => [...previousStack, technology]);
        toast.success(`${technology.name} added to your stack!`);
    }



    return (
        <div className="card bg-base-100 border border-base-300 shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="card-body ">
                {/* Icon + Badge */}
                <div className="flex items-start justify-between">
                    <img src={technology.icon} alt={technology.name} className="w-12 h-12" />

                    {technology.badge && (
                        <span className="badge badge-primary"> {technology.badge} </span>
                    )}
                </div>


                {/* technology name */}
                <h3 className="card-title mt-3"> {technology.name} </h3>


                {/* Description */}
                <p className="text-sm text-gray-600">{technology.description}</p>


                {/* Category+ Rating + Difficulty */}

                <div className="flex items-center mt-3">

                    <div className="w-1/3 text-left">
                        <p className="text-sm text-primary font-medium">{technology.category}</p>
                    </div>

                    <div className="w-1/3 flex justify-center">
                        <span className="badge badge-outline whitespace-nowrap"> {technology.difficulty}</span>
                    </div>

                    <div className="w-1/3 text-right">
                        <span className="text-sm whitespace-nowrap">⭐ {technology.rating}</span>
                    </div>

                </div>


                {/* Button */}
                <div className="card-actions mt-4">
                    <button className="btn btn-primary w-full"
                        onClick={handleAddToStack}
                        disabled={alreadyExists}

                    > Add to Stack </button>
                </div>


            </div>

        </div>
    );
};

export default TechnologyCard;