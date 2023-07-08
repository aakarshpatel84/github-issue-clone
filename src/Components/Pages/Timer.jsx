import React from "react";
import { calcTimeAgo } from "./Time";

export const Timer = ({ time }) => {
  return <p>{calcTimeAgo(time)}</p>;
};
