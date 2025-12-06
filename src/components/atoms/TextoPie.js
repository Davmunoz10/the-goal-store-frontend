import React from "react";

export default function TextoPie({ children, className = "" }) {
  return <p className={className}>{children}</p>;
}
