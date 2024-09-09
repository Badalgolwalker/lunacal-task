import React, { useEffect, useState } from "react";
import item from "../itemdata.json";
import RightUpper from "../components/RightUpper";
import Imagewidget from "../components/imagewidget";

const right = () => {
  return (
    <div className="w-[50%] h-[100vh] flex flex-col relative items-center justify-center gap-5">
      <RightUpper />
    <Imagewidget />
    </div>
  );
};

export default right;
