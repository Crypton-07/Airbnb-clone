import React from "react";
import Image from "next/legacy/image";

function SmallCard(props) {
  return (
    <div className="flex items-center m-2 mt-5 space-x-4 rounded-xl cursor-pointer hover:bg-gray-100 transition transform duration-200 hover:scale-105 ease-out">
      {/* left */}
      <div className="relative h-16 w-16">
        <Image className="rounded-lg" src={props.img} layout="fill" />
      </div>
      {/* right */}
      <div>
        <h2>{props.location}</h2>
        <h3 className="text-gray-500">{props.distance}</h3>
        <h4 className="text-gray-500">{props.price}</h4>
      </div>
    </div>
  );
}

export default SmallCard;
