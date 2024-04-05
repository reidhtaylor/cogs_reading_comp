"use client";

// Import
import Link from 'next/link';
import { useState, useEffect } from "react";
import OptionButton from '../../components/optionButton';

const Survey = () => {
  const [data, setData] = useState(
    [
      {
        title: "What was the main character's name?",
        options: ["Mary", "Maya", "Myah"],
      },
      {
        title: "What was she supposed to do with Liam?",
        options: ["Go on a date", "Watch a movie", "Build a fort"],
      },
      {
        title: "What color was the fox's fur?",
        options: ["Autumn Leaves", "Rust", "Blazing Fire"],
      },
      {
        title: "What snack did she share with the fox first?",
        options: ["Bread Crumbs", "Pb&J", "Granola"],
      },
      {
        title: "The story takes place early in the morning...",
        options: ["tof"],
      },
      {
        title: "How did the fox react to her stories?",
        options: ["With Interest", "In Fear", "With Violence"],
      },
      {
        title: "What is the color of Maya's sneakers?",
        options: ["White", "Red", "Not mentioned"],
      },
      {
        title: "The girl and the fox first met by a small bird fountain...",
        options: ["tof"],
      },
      {
        title: "What is the overall mood of the story at the end?",
        options: ["Sad", "Story wasn't finished", "Lonely", "Optimistic"],
      },
    ]
  );

  return (
    <main className="flex min-h-screen flex-col items-center p-24 pt-14 space-y-14">
      {/* Header */}
      <div className="z-10 w-full items-center justify-between text-center font-mono text-white text-sm">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b pb-6 pt-8 backdrop-blur-2xl lg:static lg:w-auto lg:rounded-xl lg:border lg:p-4 border-neutral-800 bg-zinc-800/30 from-inherit lg:bg-zinc-800/30">
          Reading Comprehension Survey
        </p>
      </div>

      {/* Survey Panel */}
      <div className="flex w-2/3 flex-col items-center space-y-7 rounded-xl border border-neutral-800 bg-zinc-800/30 px-10 py-7">

        {
          data.map((d) => (
            <div key={d.title} className="flex w-full flex-row items-center justify-between border-b pb-2 border-neutral-800">
              <div className="flex flex-col">
                <h2 className={`mb-1 text-base text-white font-semibold`}>{d.title}</h2>
                <text className={`mb-1 text-xs text-white opacity-50`}>{d.options[0] == "tof" ? "True or False" : "Choose one"}</text>
              </div>

              { d.options[0] != "tof" ?
                <div className="flex flex-row space-x-1">
                  {
                    d.options.map((v) => (
                      <OptionButton key={v} content={v} />
                    ))
                  }
                </div>
                  :
                <div className="flex flex-row space-x-1">
                  <OptionButton content={"True"} col={"bg-blue-500/90"} />
                  <OptionButton content={"False"} col={"bg-red-500/90"} />
                </div>
              }
            </div>
          ))
        }
      </div>

      {/* Complete Button */}
      <div className="rounded-lg border border-transparent border-white border-opacity-20 px-20 py-5 text-center transition-all hover:border-2 hover:border-opacity-25 active:border">
        <Link href="/ads/survey/finished" className="group" target="_blank" rel="noopener noreferrer" >
          <h2 className={`text-2x1 mb-1 text-white font-semibold`}>Complete</h2>
          <p className={`text-sm text-white opacity-50`}>Finish this survey</p>
        </Link>
      </div>

    </main>
  );
};

export default Survey;
