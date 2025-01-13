'use client'
import React, { ReactEventHandler } from "react";

interface Button {
  title: string;
  click: any
}

export const CustomButton = ({title,click}:Button) => {
  return (
    <div>
      <button onClick={click}>{title}</button>
    </div>
  );
};
