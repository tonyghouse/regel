"use client"
import React, {useContext, ChangeEvent, useState } from "react";
import { RxPlus, RxPencil1, RxCross1 } from "react-icons/rx";
import { ThemeContext, IThemeContextType } from "../context/ThemeContext";

interface ITestCasesSectionProps {
  userThemeMode: string;
  regExValue: string;
  regExFlags: string[];
  testCaseList: string[];
  setTestCaseList(values: string[]): any;
}

function TestCasesSection({
  userThemeMode,
  regExValue,
  regExFlags,
  testCaseList,
  setTestCaseList,
}: ITestCasesSectionProps) {
  const [newTestCase, setNewTestCase] = useState<string>("");
  const themeContext = useContext<IThemeContextType>(ThemeContext);

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

  const updateTestCaseList = (): void => {
    if (newTestCase) {
      setTestCaseList([...testCaseList, newTestCase]);
    }
  };

  const validateTestCase = (val: string): string => {
    console.log("regex: ", regex);
    if (!regex) {
      return "wrong-regex";
    }

    if (regex.test(val)) {
      return "valid";
    }

    return "in-valid";
  };

  const getTestCaseStyle = (val: string): string => {
    let testCaseRes = validateTestCase(val);

    if (testCaseRes === "valid") {
      return " border-green-500 bg-green-400 opacity-50";
    }

    if (testCaseRes === "in-valid") {
      return " border-red-500  bg-red-400 opacity-50";
    }

    return " border-gray-400 bg-gray-400 opacity-50 ";
  };

  const editTestCase = () => {};

  const removeTestCase = () => {};

  return (
    <div
      className={`${themeContext.themeMode === "dark" ? "border-[white]" : "border-[#020817]"} my-3 flex min-h-[90vh] min-w-[100%] flex-col md:min-h-[85vh] 
         md:min-w-[100%]  border-[0.05rem] `} 
         
    >
      <div id="test-cases-list">
        {testCaseList.map((val: string, key: number) => {
          return (
            <div  key={key} className="flex flex-row items-center ">
              <div
                className={`${getTestCaseStyle(val)}
                 m-[0.5rem] border-[0.05rem] p-[0.2rem]  flex-1
               `}
              >
                {val}
              </div>
              
              <div className="">
              <button className="px-3" onClick={editTestCase}>
                <RxPencil1 />
              </button>

              <button className="px-3" onClick={removeTestCase}>
                <RxCross1 />
              </button>
                </div>

            </div>
          );
        })}
      </div>

      <div
        id="new-test-case"
        className="m-[0.5rem] border-[0.05rem] p-[0.2rem] flex flex-row justify-start items-center"
      >
        <input
         
          className={`  ${
            userThemeMode === "dark"
              ? "bg-[#141414] text-[#fcfcfc]"
              : "bg-[#fcfcfc] text-[#141414]"
          } m-[0.5rem] border-[0.05rem] p-[0.2rem]  flex-1`}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setNewTestCase(e.target.value)
          }
        ></input>

        <div className="flex flex-row w-[5%]">
          <button className="px-3" onClick={updateTestCaseList}>
            <RxPlus />
          </button>
        </div>
      </div>
    </div>
  );
}

export default TestCasesSection;
