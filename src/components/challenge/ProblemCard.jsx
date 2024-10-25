import React from "react";
import { Button } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faMedal } from "@fortawesome/free-solid-svg-icons";
import { useNavigate, useParams } from "react-router-dom";

const ProblemCard = ({problemId,title, site, siteKinds, level}

  
) => {
  const navigate = useNavigate();
  const {challengeId} = useParams('challengeId');
  console.log(site)
  
  return (
    <div className="relative flex min-h-30 justify-between h-full py-5 px-3 my-5 border-2 p-2 rounded-lg shadow-sm">
      <div className="flex flex-row justify-between w-5/6">
        <div className="flex flex-col px-3">
          <div className="text-xl font-semibold mb-2">{title}</div>
          <div className="text-lg">{siteKinds}</div>
          <div className="text- lg">{level}</div>
        </div>

        <div className="flex flex-row items-center ">
          <div className="flex flex-col mx-4 gap-2">
            <Button
              className="my-2"
              variant="outlined"
              color="success"
              style={{ borderRadius: "1rem" }}
              
              onClick={() => window.open(site)}
              
            >
            
              문제링크
            </Button>
            <Button
              className="my-2"
              variant="contained"
              color="success"
              style={{ borderRadius: "1rem" }}
              onClick={() => navigate(`/challenges/${challengeId}/problems/${problemId}`)}
            >
              토론방
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute top-0 right-5">
        {level === "Hard" && <FontAwesomeIcon
          icon={faMedal}
          style={{ color: "#FFD43B" }}
          className="fa-4x"
        />}
        {level === "Medium" && <FontAwesomeIcon
          icon={faMedal}
          style={{ color: "#C4BFBA" }}
          className="fa-4x"
        />}
        {level === "Easy" && <FontAwesomeIcon
          icon={faMedal}
          style={{ color: "#A6370F" }}
          className="fa-4x"
        />}
  
      </div>
      
    </div>
  );
};

export default ProblemCard;
