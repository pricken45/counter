import React from "react";

export default function Button(props) {
  let { action, title, classname } = props;
  return <button className={classname} onClick={action}>{title}</button>;
}