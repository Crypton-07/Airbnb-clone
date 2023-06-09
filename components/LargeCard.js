import React from "react";
import Image from "next/legacy/image";

function LargeCard(props) {
  return (
    <section className="relative py-16 cursor-pointer">
      <div className="relative h-96 min-w-[300px]">
        <Image
          className="rounded-2xl"
          src={props.img}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="absolute top-32 left-12">
        <h3 className="text-4xl mb-3 w-64">{props.title}</h3>
        <p>{props.description}</p>
        <button className="text-sm text-white bg-gray-900 rounded-lg p-2 mt-5 shadow-sm hover:shadow-xl transform transition duration-200 active:scale-90">
          {props.buttonText}
        </button>
      </div>
    </section>
  );
}

export default LargeCard;
