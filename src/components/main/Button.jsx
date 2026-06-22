import React from "react";

const Button = ({btnName}) => {
  return (
    <button className="bg-[hsl(213,96%,18%)] cursor-pointer my-4 w-fit text-white rounded-lg px-6 py-3 self-end">
      {btnName}
    </button>
  );
};

export default Button;
