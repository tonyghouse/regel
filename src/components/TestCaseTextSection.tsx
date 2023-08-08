import React, { useContext,ChangeEvent } from "react";
// import  {Highlight}  from "react-highlighter";
// var Highlight = require('react-highlighter');
import ErrorBoundary from "./ErrorBoundary";
import ErrorPage from "./ErrorPage";
import _ from "lodash";
import { ThemeContext, IThemeContextType } from "../context/ThemeContext";

interface ITestCaseTextSectionProps {
  userThemeMode: string;
  regExValue: string;
  regExFlags: string[];
  testCaseText: string;
  setTestCaseText(value: string): any;
}

const Highlighted = ({ text, regex }:any) => {
  if (!regex) {
    return <span className="whitespace-pre">{text}</span>;
  }
  // const regex = new RegExp(`(${_.escapeRegExp(highlight)})`, "gi");
  const parts = [text];

  console.log("parts: ", regex.test(text));
  return (
    <span>
      {parts
        .filter((part:any) => part)
        .map((part:any, i:any) =>
          regex.test(part) ? (
            <mark className="bg-[#cacacb] text-[rgba(0,0,0,0)] whitespace-pre" key={i}>{part}</mark>
          ) : (
            <span className="whitespace-pre" key={i}>{part}</span>
          )
        )}
    </span>
  );
};

function TestCaseTextSection({
  userThemeMode,
  regExValue,
  regExFlags,
  testCaseText,
  setTestCaseText,
}: ITestCaseTextSectionProps) {

  const themeContext = useContext<IThemeContextType>(ThemeContext);

  //       try{
  //   const Highlight = require("react-highlighter");

  // }catch(error){
  //     console.log("highligher issue ",error);
  // }
  const getRegex = (): RegExp | null => {
    if (!regExValue) {
      return null;
    }

    let regExFlagsStr = regExFlags.join("");
    try {
      return new RegExp(regExValue, regExFlagsStr);
    } catch (error) {
      return null;
    }
  };

  const regex: RegExp | null = getRegex();

  return (
    <>
      <div className={`${themeContext.themeMode === "dark" ? "border-[white]" : "border-[#020817]"} flex flex-col font-monospace my-3 rounded-none border-[0.05rem] relative`}>
        <textarea

          className={` 
        ${
          userThemeMode === "dark"
            ? "bg-[#141414] text-[#fcfcfc]"
            : "bg-[#fcfcfc] text-[#141414]"
        }
        
        h-[100vh] min-w-[100%] resize-none border-[0.05rem]
        md:h-[100vh] md:min-w-[100%] z-[3]  bg-[rgba(0,0,0,0)] `}
          onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
            setTestCaseText(e.target.value)
          }
        >
          {testCaseText}
        </textarea>
        <ErrorBoundary fallback={<ErrorPage/>}>
        <div id="two" className="h-[80vh] min-w-[100%] resize-none border-[0.05rem]
        md:h-[80vh] md:min-w-[100%] absolute z-[2] ">
            <Highlighted text= {testCaseText} regex={regex} />
          </div>
        </ErrorBoundary>
      </div>
    </>
  );
}

export default TestCaseTextSection;
