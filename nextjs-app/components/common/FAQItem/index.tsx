"use client";

import { FC, useState } from "react";
import { twMerge } from "tailwind-merge";
import Image from "next/image";
import { default as QuestionIcon } from "@/public/images/question.svg";
import { default as PlusIcon } from "@/public/images/plus-icon.svg";
import { default as MinusIcon } from "@/public/images/minus-icon.svg";
import { default as ChatStyleLeft } from "./assets/chat-style-left.svg";
import { default as ChatStyleRight } from "./assets/chat-style-right.svg";

interface IFAQItem {
  question: string;
  answer: string;
}

const FAQItem: FC<IFAQItem> = ({ question, answer }) => {
  const [isAnswerExpanded, setIsAnswerExpanded] = useState(true);

  const handleToggleAnswer = () => {
    setIsAnswerExpanded((prev) => !prev);
  };

  return (
    <div className={twMerge(isAnswerExpanded && "gap-3", "flex flex-col")}>
      <div className="flex items-end">
        <div className="basis-8 rounded-3 bg-blue-8 p-2">
          <QuestionIcon className="h-7 w-7 text-white" />
        </div>

        <div
          className="relative ml-6 mr-[69px] flex grow cursor-pointer items-start gap-3 rounded-3 rounded-bl-none bg-blue-1 p-6"
          onClick={handleToggleAnswer}
        >
          <ChatStyleLeft className="absolute bottom-0 left-[-19px] text-blue-1" />

          <p className="grow text-subtitle-lg text-neutral-10">{question}</p>

          <div className="m-2 h-5 w-5 shrink-0 text-neutral-8">
            {isAnswerExpanded ? <MinusIcon /> : <PlusIcon />}
          </div>
        </div>
      </div>

      <div
        className={twMerge(
          isAnswerExpanded
            ? "mb-2 grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0",
          "grid overflow-hidden transition-[grid-template-rows,opacity] duration-300 ease-in-out"
        )}
      >
        <div className="flex items-end overflow-hidden">
          <div className="relative ml-[73px] mr-6 grow cursor-pointer rounded-3 rounded-br-none bg-yellow-1 p-6">
            <ChatStyleRight className="absolute bottom-0 right-[-19px] text-yellow-1" />

            <p className="text-body-md text-neutral-10">{answer}</p>
          </div>

          <div className="mb-2 shrink-0 basis-8 rounded-3 bg-yellow-6 p-2">
            <Image
              src="/images/faq-program-logo.png"
              className="h-7 w-7 object-contain"
              width={24}
              height={24}
              alt="program-logo"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQItem;
