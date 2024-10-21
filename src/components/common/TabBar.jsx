import { Box, Tab, Tabs } from "@mui/material";
import React from "react";
import {
  faArrowTrendUp,
  faFlagCheckered,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TabBar = () => {
  const [value, setValue] = React.useState("total");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="flex flex-row justify-start items-center py-3 px-2">
      <Box sx={{ width: "100%" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="wrapped label tabs example"
          TabIndicatorProps={{
            style: {
              backgroundColor: "black", // 밑줄(인디케이터) 색상을 변경
            },
          }}
        >
          <Tab
            value="total"
            label="전체 글"
            icon={<FontAwesomeIcon icon={faArrowTrendUp} />}
            iconPosition="start"
            sx={{
              padding: "0px 8px",
              minHeight: "48px",
              fontSize: "16px",
              "&.Mui-selected": {
                color: "black", // 선택된 탭의 텍스트 색상 변경
                fontWeight: 600,
              },
            }}
          />
          <Tab
            value="challenge"
            label="챌린지"
            icon={<FontAwesomeIcon icon={faFlagCheckered} />}
            iconPosition="start"
            sx={{
              padding: "0px 8px",
              minHeight: "48px",
              fontSize: "16px",
              "&.Mui-selected": {
                color: "black", // 선택된 탭의 텍스트 색상 변경
                fontWeight: 600,
              },
            }}
          />
          <Tab
            value="community"
            label="커뮤니티"
            icon={<FontAwesomeIcon icon={faUsers} />}
            iconPosition="start"
            sx={{
              padding: "0px 8px",
              minHeight: "48px",
              fontSize: "16px",
              "&.Mui-selected": {
                color: "black", // 선택된 탭의 텍스트 색상 변경
                fontWeight: 600,
              },
            }}
          />
        </Tabs>
      </Box>
    </div>
  );
};

export default TabBar;
