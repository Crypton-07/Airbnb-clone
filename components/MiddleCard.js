import React from "react";
import Image from "next/legacy/image";

function MiddleCard(props) {
  return (
    <div className="cursor-pointer hover:scale-105 transform transition duration-300 ease-out">
      <div className="relative h-80 w-80">
        <Image className="rounded-lg" src={props.img} layout="fill" />
      </div>
      <div>
        <h2 className="text-2xl mt-3">{props.location}</h2>
        <h3 className="text-xl mt-1">{props.price}</h3>
      </div>
    </div>
  );
}

export default MiddleCard;
