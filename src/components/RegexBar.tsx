'use client'
import React, { useState, useContext, useEffect, ReactElement,ChangeEvent } from "react";
import { IThemeContextType, ThemeContext } from "../context/ThemeContext";
import MultiSelect from "./MultiSelect";
import { Option } from "../util/GenericUtil";
import { Input } from "@/components/ui/input"


interface IRegexBarProps {
  // setRegExValue(value: string): any;
  //TODO
  setRegExValue: (value: string) => any;
  setRegExFlags(values: string[]): any;
}

const RegexBar = ({ setRegExValue, setRegExFlags }: IRegexBarProps) : ReactElement => {
  const options: Option[] = [
    { id: 0, label: "Global", value: "g" },
    { id: 1, label: "Case Insensitive", value: "i" },
    { id: 2, label: "Multiline mode", value: "m" },
    { id: 3, label: "Dotall mode", value: "s" },
    { id: 4, label: "Unicode support", value: "u" },
    { id: 5, label: "Sticky mode", value: "y" },
  ];

  const themeContext = useContext<IThemeContextType>(ThemeContext);

  const [selectedOptions, setSelectedOptions] = useState<Option[]>([]);

  useEffect(() => {
    let regExFlags: string[] = selectedOptions.map((so) => {
      return so.value;
    });
    setRegExFlags(regExFlags);
  }, [selectedOptions]);

  const changeRegExValue = (event:ChangeEvent<HTMLInputElement>) : void => {
    setRegExValue(event.target.value);
  };
  return (
    <div id="regex-container" className="w-full my-3">
      <div className={` ${themeContext.themeMode === "dark" ? "border-[white]" : "border-[#020817]"}  flex h-[5vh] flex-row items-center border-[0.05rem]   `}>
        <div className="px-2 font-extrabold">
          <pre> /</pre>
        </div>
        <Input
        placeholder="Enter Regex"
          onChange={changeRegExValue}
          className={`  ${
            themeContext.themeMode === "dark"
              ? "bg-[#141414] text-[#fcfcfc]"
              : "bg-[#fcfcfc] text-[#141414]"
          }

          ${themeContext.themeMode === "dark" ? "border-[white]" : "border-[#020817]"} 
           h-[100%]
         align-middle rounded-none border-y-[0rem] border-x-[0.05rem]  `}
        />

        <div className="px-2 font-extrabold">
          <pre>/ </pre>
        </div>

        <div className={`${themeContext.themeMode === "dark" ? "border-[white]" : "border-[#020817]"}  h-[100%] w-[15%] border-[0.05rem] border-black  z-[10] `}>
          <MultiSelect
            options={options}
            selectedOptions={selectedOptions}
            setSelectedOptions={setSelectedOptions}
          />
        </div>
      </div>
    </div>
  );
}

export default RegexBar;
