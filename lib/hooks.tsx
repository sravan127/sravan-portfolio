import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { useActiveSectionContext } from "@/context/active-section-context";
import {links} from "@/lib/data";

type SectionName= typeof links[number]["name"];


export function useSectionInView(threshold: number, sectionName: SectionName){
    const {ref, inView} = useInView({
        threshold
      });
      const {setActiveSection, timeOfLastClick} = useActiveSectionContext();
    
      useEffect(()=>{
        if(inView && Date.now() - timeOfLastClick > 1000)
          setActiveSection(sectionName);
    }, [inView, setActiveSection, timeOfLastClick, sectionName]);

    return {
        ref,
    };
}