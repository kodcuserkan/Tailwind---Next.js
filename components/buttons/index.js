import React from "react";

const Button = (props) => {
  return (
    <div
      className="bg-primary rounded p-4 cursor-pointer w-40 text-lg text-blue-100 select-none active:opacity-75 hover:bg-red-600 flex align-middle justify-center"
      onClick={props.clickFunc}
    >
      {props.children}
    </div>
  );
};

export default Button;
