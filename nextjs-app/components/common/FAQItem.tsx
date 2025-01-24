"use client";

import { FC, useState } from "react";
import { twMerge } from "tailwind-merge";
import Image from "next/image";
import { default as QuestionIcon } from "@/public/images/question.svg";
import { default as PlusIcon } from "@/public/images/plus-icon.svg";
import { default as MinusIcon } from "@/public/images/minus-icon.svg";

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
        <div className="basis-8 p-2 bg-blue-8 rounded-3">
          <QuestionIcon className="w-7 h-7 text-white" />
        </div>

        <div
          className="grow flex gap-3 items-start cursor-pointer bg-blue-1 rounded-3 rounded-bl-none p-6 relative ml-6 mr-[69px]"
          onClick={handleToggleAnswer}
        >
          <svg
            className="absolute bottom-0 left-[-19px] text-blue-1"
            width="20"
            height="17"
            viewBox="0 0 20 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19.4783 16.6406V0.640625C14.9075 11.333 10.4342 14.5238 0 16.6406H19.4783Z"
              fill="currentColor"
            />
          </svg>

          <p className="grow text-subtitle-lg text-neutral-10">{question}</p>

          <div className="text-neutral-8 w-5 h-5 m-2">
            {isAnswerExpanded ? <MinusIcon /> : <PlusIcon />}
          </div>
        </div>
      </div>

      <div
        className={twMerge(
          isAnswerExpanded
            ? "grid-rows-[1fr] opacity-100 mb-2"
            : "grid-rows-[0fr] opacity-0",
          "grid overflow-hidden transition-[grid-template-rows,opacity] duration-300 ease-in-out"
        )}
      >
        <div className="overflow-hidden flex items-end">
          <div className="grow cursor-pointer bg-yellow-1 rounded-3 rounded-br-none p-6 relative mr-6 ml-[73px]">
            <svg
              className="absolute bottom-0 right-[-19px] text-yellow-1"
              width="20"
              height="17"
              viewBox="0 0 20 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.52174 16.6406V0.640625C5.09252 11.333 9.56584 14.5238 20 16.6406H0.52174Z"
                fill="currentColor"
              />
            </svg>

            <p className="text-body-md text-neutral-10">{answer}</p>
          </div>

          <div className="basis-8 shrink-0 p-2 bg-yellow-6 rounded-3 mb-2">
            <Image
              src="/images/faq-program-logo.png"
              className="w-7 h-7 object-contain"
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
