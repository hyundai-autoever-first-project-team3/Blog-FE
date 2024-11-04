import { Tab, Tabs } from "@mui/material";
import React from "react";
import {
  faChartSimple,
  faHeart,
  faPenToSquare,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SubTabBar = ({ value, handleChange }) => {
  return (
    <div className="flex flex-row justify-center items-center py-3 px-2">
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="wrapped label tabs example"
        TabIndicatorProps={{
          style: {
            backgroundColor: "black",
          },
        }}
      >
        <Tab
          value="write"
          label="작성 글"
          icon={<FontAwesomeIcon icon={faPenToSquare} />}
          iconPosition="start"
          sx={{
            padding: "0px 8px",
            minHeight: "48px",
            minWidth: "150px",
            fontSize: "16px",
            "&.Mui-selected": {
              color: "black", // 선택된 탭의 텍스트 색상 변경
              fontWeight: 600,
            },
          }}
        />
        <Tab
          value="like"
          label="좋아요 글"
          icon={<FontAwesomeIcon icon={faHeart} />}
          iconPosition="start"
          sx={{
            padding: "0px 8px",
            minHeight: "48px",
            minWidth: "150px",
            fontSize: "16px",
            "&.Mui-selected": {
              color: "black", // 선택된 탭의 텍스트 색상 변경
              fontWeight: 600,
            },
          }}
        />
        <Tab
          value="statistic"
          label="통계"
          icon={<FontAwesomeIcon icon={faChartSimple} />}
          iconPosition="start"
          sx={{
            padding: "0px 8px",
            minHeight: "48px",
            minWidth: "150px",
            fontSize: "16px",
            "&.Mui-selected": {
              color: "black", // 선택된 탭의 텍스트 색상 변경
              fontWeight: 600,
            },
          }}
        />
      </Tabs>
    </div>
  );
};

export default SubTabBar;
