import React from "react";

// text: 버튼텍스트, type: round/rect

const Button = ({ text }) => {
  return (
    <div className={`bg-black text-white px-4 content-center rounded-full`}>
      {text}
    </div>
  );
};

export default Button;
