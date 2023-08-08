
import React, { ReactElement, useContext, useState } from "react";
import { ThemeContext, IThemeContextType } from "../context/ThemeContext";
import RegexBar from "./RegexBar";
import TestCasesSection from "./TestCasesSection";
import TestCaseTextSection from "./TestCaseTextSection";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar"

function HomeSection() {
    const themeContext = useContext<IThemeContextType>(ThemeContext);

  const [regExValue, setRegExValue] = useState<string>("");
  const [regExFlags, setRegExFlags] = useState<string[]>([]);
  
  const [testCaseCategory, setTestCaseCategory] = useState<string>("single");
  const [testCaseText, setTestCaseText] = useState<string>("");
  const [testCaseList, setTestCaseList] = useState<string[]>([]);

  const onMenuChange = (value: string) => {
   console.log(" value ",value)
   setTestCaseCategory(value);
  }
  return (
    <>
    <RegexBar setRegExValue={setRegExValue}  setRegExFlags ={setRegExFlags}/>

    <Menubar className={`${themeContext.themeMode === "dark" ? "border-[white]" : "border-[#020817]"} my-2 border-[0.07rem] md:border-[0.09rem]  rounded-none`}>
          <MenubarMenu >
            <MenubarTrigger onClick={()=>onMenuChange("single")}>Text</MenubarTrigger>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger onClick={()=>onMenuChange("list")}>TestCases</MenubarTrigger>
          </MenubarMenu>
    </Menubar>
   

   
    {testCaseCategory === "list" ? (
          <TestCasesSection
            userThemeMode={themeContext.themeMode}
            regExValue={regExValue}
            regExFlags={regExFlags}
            testCaseList={testCaseList}
            setTestCaseList={setTestCaseList}
          />
        ) : (
          <TestCaseTextSection
            userThemeMode={themeContext.themeMode}
            regExValue={regExValue}
            regExFlags={regExFlags}
            testCaseText={testCaseText}
            setTestCaseText={setTestCaseText}
          />
        )}
    </>
  )
}

export default HomeSection