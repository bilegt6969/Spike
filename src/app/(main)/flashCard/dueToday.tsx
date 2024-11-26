"use client";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import React, { useState } from "react";
import { Calendar, StarIcon, Check, X } from "lucide-react";

interface Word {
  date: string;
  word: string;
  definition: string;
  reviewCount: number;
}

const initialWords: Word[] = [
  {
    date: "11.12",
    word: "Apple",
    definition:
      "An apple is a round, edible fruit with a seedy core, firm white flesh, and a red, yellow, or green skin. It grows on the apple tree, which is part of the rose family.",
    reviewCount: 0,
  },
  {
    date: "11.11",
    word: "Cucumber",
    definition:
      "A cucumber is a long, green, fleshy fruit that grows on a vine in the gourd family. Cucumbers are technically berries and are often eaten raw in salads and sandwiches. They are made up of over 90% water and are a good source of hydration.",
    reviewCount: 0,
  },
  {
    date: "11.14",
    word: "Tomato",
    definition:
      "The tomato, Solanum lycopersicum, is a plant whose fruit is an edible berry that is eaten as a vegetable. The tomato is a member of the nightshade family that includes tobacco, potato, and chili peppers.",
    reviewCount: 0,
  },
];

function DueToday() {
  const [words, setWords] = useState<Word[]>(initialWords);
  const [isStarred, setIsStarred] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [number, setNumber] = useState(0);
  const [reviewedWords, setReviewedWords] = useState<number[]>([]);

  const toggleStar = () => {
    setIsStarred((prev) => !prev);
  };

  const open = () => {
    setIsOpen((prev) => !prev);
  };

  const handleForgot = (e: React.MouseEvent) => {
    e.stopPropagation();
    updateReviewCount(number);
    setNumber((prev) => (prev + 1) % words.length);
    setIsOpen(false);
  };

  const handleRemembered = (e: React.MouseEvent) => {
    e.stopPropagation();
    updateReviewCount(number);
    setNumber((prev) => (prev + 1) % words.length);
    setIsOpen(false);
  };

  const updateReviewCount = (index: number) => {
    setWords((prevWords) =>
      prevWords.map((word, i) =>
        i === index ? { ...word, reviewCount: word.reviewCount + 1 } : word
      )
    );
  };

  const allWordsReviewed = reviewedWords.length >= words.length;

  const handleReviewAgain = () => {
    setReviewedWords([]);
    setWords(initialWords.map(word => ({ ...word, reviewCount: 0 })));
    setNumber(0);
  };

  return (
    <div className="p-4 w-full h-screen flex flex-col justify-center items-center">
      {allWordsReviewed ? (
        <div className="mt-4 text-lg text-green-500">
          All words have been memorized!
          <button onClick={handleReviewAgain} className="ml-2 text-blue-500 underline">
            Review Again
          </button>
        </div>
      ) : (
        <div>
          <Card
            onClick={open}
            className="rounded-3xl w-96 h-96 flex flex-col justify-between bg-gray-900 transition-transform duration-300"
          >
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="flex justify-between w-full text-sm font-medium">
                <div className="flex items-center space-x-1 bg-black px-2 py-1 text-gray-500 font-semibold rounded-xl">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  <p>{words[number].date}</p>
                </div>
                <div className="flex items-center space-x-1">
                  <StarIcon
                    onClick={toggleStar}
                    className={`${isStarred ? "bg-green-500 text-white" : "text-muted-foreground"} rounded-full p-1 transition-colors duration-200`}
                  />
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent className="flex-grow cursor-pointer flex flex-col items-start mt-12">
              <div className="text-2xl font-bold">{words[number].word}</div>
              <div
                className={`text-base mt-4 font-serif transition-opacity duration-300 ease-in-out ${isOpen ? "opacity-100" : "opacity-0 h-0 overflow-hidden"}`}
              >
                {words[number].definition}
              </div>
            </CardContent>
          </Card>
          <div className="absolute bottom-1 flex w-96 justify-between p-4">
            <button onClick={handleForgot} className="flex items-center rounded-full border-1 border border-gray-800 bg-gray-900 text-white px-4 py-2">
              <X className="h-4 w-4 mr-1" />
              Forgot
            </button>
            <button onClick={handleRemembered} className="flex items-center rounded-full border-1 border border-gray-800 bg-gray-900 text-white px-4 py-2">
              <Check className="h-4 w-4 mr-1" />
              Remembered
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default DueToday;
