'use client';

import React from "react";
import { useForumModal } from "./ForumModalContext";

const ForumModal = () => {
  const { visible, toggleModal } = useForumModal();

  return (
    <div hidden={!visible}>
      <div className="bg-white fixed shadow-2xl md:w-[400px] w-fit rounded-md md:bottom-0 bottom-20 md:right-0 md:m-16 m-5 z-50">
        <div className='absolute right-4 top-2 text-red-600 hover:font-black transition-all duration-200 cursor-pointer'><button onClick={toggleModal}>✕</button></div>
        
        <input
          type="text"
          placeholder="Title"
          className="mb-2 rounded-t-md w-full text-black placeholder:text-zinc-600 placeholder:underline px-4 py-3 outline-none"
        />
        <textarea
          placeholder="Topic"
          className="w-full resize-none md:h-[20vh] h-[28vh] text-black placeholder:text-zinc-600 px-4 outline-none"
        />
        <button className="w-full text-white font-semibold rounded-b-md p-2 bg-cyan-700 hover:bg-cyan-600 transition">
          Post new topic
        </button>
      </div>
    </div>
  );
};

export default ForumModal;