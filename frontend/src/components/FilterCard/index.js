import React from "react";
import { FiFilter } from "react-icons/fi";

export default function FilterCard({ title }) {
  return (
    <div>
      <FiFilter />
      <span>{title}</span>
    </div>
  );
}
