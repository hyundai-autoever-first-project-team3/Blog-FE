import React from "react";
import { Button, IconButton } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";

function InfoBar() {
  return (
    <div>
      <div className="flex justify-between items-center">
        <div>
          <span className="font-bold" style={{ marginRight: "1rem" }}>
            고채린
          </span>
          <span>2024년 10월 21일</span>
        </div>
        <Button
          variant="outlined"
          color="#eee"
          startIcon={<FavoriteIcon sx={{ color: "#F20789" }} />}
          sx={{ borderRadius: "1rem" }}
        >
          101
        </Button>
      </div>
    </div>
  );
}

export default InfoBar;
