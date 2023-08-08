import React from "react";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

function Guide() {
 const metacharacterList:any = [
   {
      character:"[]",
      desc:"A collection of characters, representing a range or a set of allowed characters",
      example: "\"[Ll]iberty\""
   },
   {
    character:"\\",
    desc:"Indicates a special sequence or is used to escape special characters",
    example: "\"\d{4}\""
 },
   {
    character:".",
    desc:"Any character, excluding newline, often used as a wildcard",
    example: "\"La.s\""
 },{
  character:"^",
  desc:"Specifies that the pattern must begin with the given characters",
  example: "\"^Regex\""
},
{
  character:"$",
  desc:"Specifies that the pattern must end with the given characters",
  example: "\"toolbuilder$\""
},{
  character:"*",
  desc:"Allows zero or more occurrences of the preceding character or group",
  example: "\"Re*gex\""
},{
  character:"+",
  desc:"Allows one or more occurrences of the preceding character or group",
  example: "\"La+bs\""
},




 ]

 const specialSequencesList:any = [
  {
     character:"\A",
     desc:"Matches if the specified characters are at the start of the string",
     example: "\"\ALiberty\""
  },
  {
    character:"\b",
    desc:"Matches if the specified characters are at the beginning or end of a word (use \"r\" in the beginning for treating the string as a \"raw string\")",
    example: "r\"\bLabs\", r\"Regex\b\""
 },
 {
  character:"\B",
  desc:"Matches if the specified characters are in the string, but NOT at the beginning or end of a word (use \"r\" in the beginning for treating the string as a \"raw string\")",
  example: "r\"\BR\", r\"L\B\""
},
,
 {
  character:"\d",
  desc:"Matches if the string contains digits (numbers 0-9)",
  example: "\"Lab\d\""
},
{
  character:"\D",
  desc:"Matches if the string DOES NOT contain digits",
  example: "\"Regex\D\""
},
{
  character:"\s",
  desc:"Matches if the string contains a white space character",
  example: "\"Liberty\sLabs\""
},
{
  character:"\S",
  desc:"Matches if the string DOES NOT contain a white space character",
  example: "\"toolbuilder\S\""
},
{
  character:"\w",
  desc:"Matches if the string contains any word characters (letters a to Z, digits 0-9, and the underscore _ character)",
  example: "\"Liberty\w\""
},{
  character:"\W",
  desc:"Matches if the string DOES NOT contain any word characters",
  example: "\“Labs\W\""
},{
  character:"\Z",
  desc:"Matches if the specified characters are at the end of the string",
  example: "\"toolbuilder\Z\""
},






]

  return (
    <>
      <div className="my-3 p-4 w-full h-full border-[0.07rem] md:border-[0.09rem] border-[black] ">
        <div className="text-2xl my-2 p-2">What is a Regular Expression?</div>
        <div className="my-2 p-2">
          Metacharacters are unique characters that possess specific meanings
          and play a vital role in defining patterns within regular expressions:
        </div>

        <Table className="m-2 w-full">
         
          <TableHeader>
            <TableRow>
              <TableHead>Character</TableHead>
              <TableHead>Description</TableHead>
              <TableHead>Example</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>

            {metacharacterList.map( (v:any) =>{
                  return  <TableRow>
                    <TableCell >{v.character}</TableCell>
                    <TableCell>{v.desc}</TableCell>
                    <TableCell>{v.example}</TableCell>
                  </TableRow>
            })}

          </TableBody>
        </Table>
        <br/>
        <br/>
        <div className="text-2xl my-2 p-2">Special Sequences</div>
        <div className="my-2 p-2">
        A special sequence consists of a \ followed by one of the characters listed below, giving it a unique meaning within the regular expression:
        </div>

        <Table className="m-2 w-full">
         
          <TableHeader>
            <TableRow>
              <TableHead>Character</TableHead>
              <TableHead>Description</TableHead>
              <TableHead>Example</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>

            {specialSequencesList.map( (v:any) =>{
                  return  <TableRow>
                    <TableCell >{v.character}</TableCell>
                    <TableCell>{v.desc}</TableCell>
                    <TableCell>{v.example}</TableCell>
                  </TableRow>
            })}

          </TableBody>
        </Table>



      </div>
    </>
  );
}

export default Guide;
