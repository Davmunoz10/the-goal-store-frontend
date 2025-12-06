import React from "react";

export default function EnlacePie({ href, children }) {
  return (
    <a href={href} className="block hover:underline">
      {children}
    </a>
  );
}
