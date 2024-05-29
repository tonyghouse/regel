import React from "react";

function CheatSheetPage() {
  return (
    <>
      <div className="my-3 w-full h-[100vh] border-[0.07rem] md:border-[0.09rem] border-[black] ">
        <div className="grid grid-flow-row-dense grid-cols-3 grid-rows-3  gap-1">
          <div className="h-[10rem] w-[15rem]  m-2 border">01</div>
          <div className="h-[10rem] w-[15rem]  m-2 border">02</div>
          <div className="h-[10rem] w-[15rem]  m-2 border">03</div>
          <div className="h-[10rem] w-[15rem]    m-2 border">04</div>
          <div className="h-[10rem] w-[15rem]   m-2 border">05</div>
         
        </div>
      </div>
    </>
  );
}

export default CheatSheetPage;
