import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Skeleton } from "@mui/material";
import React from "react";

const CountCard = ({ title, count, icon, isLoading }) => {
  return isLoading ? (
    <Skeleton
      variant="rectangular"
      className="flex flex-row border min-h-32 rounded-md p-5 basis-2/6 flex-grow items-center w-full"
    />
  ) : (
    <div className="flex flex-row border min-h-32 rounded-md p-5 basis-2/6 flex-grow items-center w-full">
      <div className="flex flex-row gap-3 items-start">
        <div className="p-2 bg-blue-100 rounded-md">
          <FontAwesomeIcon
            icon={icon}
            className="text-blue-950 w-5
                  h-5"
          />
        </div>
        <div className="flex flex-col gap-1">
          <div className="text-base font-normal">{title}</div>
          <div className="text-base font-bold">
            <span className="text-3xl font-extrabold">{count}</span> 개
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountCard;
