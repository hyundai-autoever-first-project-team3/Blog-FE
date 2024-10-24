import { Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

function EditorFooter({ handlePostData }) {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className="flex items-center justify-between py-1.5 px-2 editor-footer">
      <Button variant="text" color="inherit" onClick={handleGoBack}>
        나가기
      </Button>
      {/* <button
        className="flex items-center px-2 py-2 font-bold text-gray-400 duration-200 rounded-xl hover:bg-red-500 hover:text-white"
        onClick={handleGoBack}
      >
        나가기 
      </button> */}
      <div className="flex space-x-2">
        <Button variant="text" color="info">
          임시저장
        </Button>
        <Button variant="contained" color="info" onClick={handlePostData}>
          출간하기
        </Button>
        {/* <button className="px-4 py-2 font-bold text-green-400 duration-150 rounded hover:text-green-600">
          임시저장
        </button>
        <button className="px-4 py-2 font-bold text-white duration-150 bg-green-500 rounded hover:bg-green-700">
          출간하기
        </button> */}
      </div>
    </div>
  );
}

export default EditorFooter;
