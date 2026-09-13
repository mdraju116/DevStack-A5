
import  { useEffect, useState } from 'react';
import type { TechType } from "../types/techTypes";
import TechnologyCard from './TechnologyCard';
import type { Dispatch, SetStateAction } from "react";

type TechnologiesProps = {
  stack:TechType[];
  setStack: Dispatch<SetStateAction<TechType[]>>;
};


const Technologies = ({ stack,setStack }: TechnologiesProps) => {

    const [technologies,setTechnologies]=useState <TechType[]> ([]);
    const [loading,setLoading] = useState (true);
    
    useEffect(()=>{
        fetch("/data.json")
            .then((res)=>res.json())
            .then((data:TechType[])=>{
                setTechnologies(data);
                setLoading(false);
            });
    },[]);

    if(loading){
        return <p>Loading technologies...</p>;
    }

    return (
        // <div className="container mx-auto px-6 md:px-10 lg:px-16 mb-50">
          <div className="py-10">
            <h1 className="text-[#0f1729] text-4xl font-bold">Explore the <span className="text-[#de4ba6]">Technologies</span></h1>
            <p className="text-[#64748b]">Pick one technology per category to build your ideal stack.</p>
            
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>   
                {
                    technologies.map((technology)=>(
                        <TechnologyCard
                            key={technology.id}
                            technology={technology}
                            stack={stack}
                            setStack={setStack}
                        />
                        
                    ))
                }
            </div>


        </div>
    );
};

export default Technologies;