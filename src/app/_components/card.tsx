"use client";
import { TodoData } from "@/types/todo";
import { deleteBt } from "@/service/todo";
import React from "react";

export const Card: React.FC<TodoData> = ({ img, name, prise, id }) => {
  const deleteButton = async () => {
    deleteBt(id).then((res) => {
      console.log(res);
    });
  };
  return (
    <div>
      <div>
        <div></div>
        <div>
          <h2>{name}</h2>
          <img src={img} alt="" />
          <h4>{prise}</h4>
          <div>
            <button
              onClick={deleteButton}
              className="w-[150px] h-[40px] bg-[#654343]"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
