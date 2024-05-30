"use client"
import React, { ReactElement, useState,useContext } from "react";
import { Option } from "../util/GenericUtil";

import { ThemeContext, IThemeContextType } from "../context/ThemeContext";


import {RxChevronDown} from "react-icons/rx"

interface IMultiSelectProps {
  options: Option[];
  selectedOptions: Option[];
  setSelectedOptions(values: Option[]):any;
}

function MultiSelect({ options , selectedOptions, setSelectedOptions }: IMultiSelectProps): ReactElement {
  
  const [isOpen, setIsOpen] = useState<boolean>(false);
  
  const themeContext = useContext<IThemeContextType>(ThemeContext);

  const isOptionSelected = (option: Option): boolean => {
    return selectedOptions.some(so => so.label === option.label);
  };

  const toggleSelectedOptions = (option: Option): void => {
    if (selectedOptions.some(so => so.label === option.label)) {
      let filteredTasks = selectedOptions.filter((o) => {
        return o.label !== option.label;
      });
      setSelectedOptions(filteredTasks);
    } else {
      setSelectedOptions([...selectedOptions, option]);
    }
  };

  const closeMultiSelectMenu = (): void =>{
    setIsOpen(false);
  }

  return (
    <>
      <div className={`${themeContext.themeMode === "dark" ? "bg-[#020817] " : " bg-[white]"}  h-[100%] `}
        onBlur={closeMultiSelectMenu}>
            
        <div
          className="flex flex-row text-[0.6rem]  md:text-[0.8rem] font-medium
          px-[0.2rem] md:px-3 justify-evenly items-center border-[0.05rem]  h-[100%] "
          onClick={() => setIsOpen((prev) => !prev)}>
            
          <div className="flex-1 w-[85%]  ">

            {selectedOptions.length !==0 ? selectedOptions.map((so) => {
              return <span key={so.id}>{so.value}</span>;
            }) : <span>Flags</span>
           }
          </div>

          <div className="w-[15%]">
          <RxChevronDown/>
          </div>

        </div>

        <ul
          className={`${isOpen ? " " : " hidden "} 
          ${themeContext.themeMode === "dark" ? "bg-[#020817]  border-[white]" : " bg-[white] border-[#020817]"}
          inline-block border-[0.05rem] text-[0.7rem]  md:text-[0.8rem]
             my-1 px-1 w-fit float-right z-10   font-normal `}
        >
          {options.map((o) => {
            return (
              <li
                key={o.id}
                className={`${isOptionSelected(o) ?  themeContext.themeMode === "dark" ? "bg-[#20232c]  " : "  bg-[#f4f4f4]  " : ""}  
                  my-1  font-uno py-1 px-2 md:px-4`}
                onClick={() => toggleSelectedOptions(o)}
              >
                {o.label}
                
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default MultiSelect;
