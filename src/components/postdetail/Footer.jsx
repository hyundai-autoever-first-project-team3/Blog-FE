import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

function Footer() {
  return (
    <div>
      <div className="flex df size-32 mt mt-8">
        <FontAwesomeIcon icon={faUser} />
        <div className="flex-col">
          <div className="font-bold">고채린</div>
          <div>나는 개발자다</div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
