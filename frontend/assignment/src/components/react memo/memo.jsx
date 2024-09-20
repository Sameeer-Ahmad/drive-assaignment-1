import React from "react";

const MemoizedComponent = (props) => {
  console.log("Rendering MyComponent");
  return <div>{props.text}</div>;
};

export default React.memo(MemoizedComponent);
