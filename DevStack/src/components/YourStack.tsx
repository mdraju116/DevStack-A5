import type { Dispatch, SetStateAction } from "react";
import type { TechType } from "../types/techTypes";
import { toast } from "react-toastify";

interface YourStackProps {
    stack: TechType[];
    setStack: Dispatch<SetStateAction<TechType[]>>
}

const YourStack = ({ stack, setStack }: YourStackProps) => {

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
            toast.info(`${removedTechnology.name} removed from your stack.`);
        }
    };


    const handleRemoveAll = () => {
        setStack([]);
        toast.success("All technologies removed from your stack!");
    };


    return (

        // <div className="container mx-auto  px-4 py-10 ">
        <div className="py-10 lg:pt-24 ">
            <div className="flex justify-between items-center mb-8">
                <h2 className="text-3xl font-bold">
                    Your Stack
                </h2>

                {/* Remove all items */}
                <button
                    className="btn btn-error btn-sm"
                    onClick={handleRemoveAll}
                    disabled={stack.length === 0}
                >
                    Remove All
                </button>
            </div>



            {stack.length === 0 ? (
                <div className="border-2 border-dashed rounded-lg p-10 text-center">
                    <p className="text-gray-500">Your stack is empty</p>
                    <p className="text-sm text-gray-400 mt-2">Add Technologies</p>
                </div>
            ) : (

                // Remove a single item
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {stack.map((technology) => (
                        <div key={technology.id} className="border rounded-lg p-5">
                            <h3 className="text-xl font-bold">
                                {technology.name}
                            </h3>

                            <button
                                className="btn btn-error btn-sm mt-3"
                                onClick={() => handleRemove(technology.id)}
                            >
                                Remove
                            </button>
                        </div>
                    ))}
                </div>
            )};

        </div>
    );
};

export default YourStack;