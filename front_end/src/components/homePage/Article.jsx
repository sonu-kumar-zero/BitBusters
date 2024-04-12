import React from "react";
import ArticleCard from "./ArticleCard";

const Article = () => {
  // const articleCardList = [
  //     {},
  // ]

  return (
    <div className="px-[140px] flex py-24 gap-5 w-full">
      <div className="flex flex-col gap-5 w-1/3">
        <div className="">
          <div className="text-[30px] font-bold">
            Read top articles from health experts
          </div>
          <div className="text-base">
            Health articles that keep you informed about good health practices
            and achieve your goals.
          </div>
        </div>
        <div className="">
          <div className="bg-blue-500 text-[24px] font-semibold w-fit text-white px-5 py-2 rounded">
            See all articles
          </div>
        </div>
      </div>
      <div className="flex gap-5 w-2/3">
        <ArticleCard />
        <ArticleCard />
      </div>
    </div>
  );
};

export default Article;
