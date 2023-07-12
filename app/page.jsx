"use client";
import Feed from "@components/Feed";
import { Suspense } from "react";
import Loading from "./loading";


const Home = () => {
  return (
    
      <section className="w-full flex-col flex-center">
        <h1 className="head_text text-center">
          Capture & Share
          <br className="max-md:hidden" />
          <span className="orange_gradient text-center">AI-Powered Ideas</span>
        </h1>
        <p className="desc text-center">
          IdeaFlow is a powerful platform designed to unlock and harness the
          full potential of creativity. With its intuitive interface and robust
          features, IdeaFlow empowers individuals and teams to streamline the
          process of generating and refining ideas using AI.
        </p>
        <Suspense fallback={<Loading />}>
        <Feed />
        </Suspense>
       
      </section>
   
  );
};

export default Home;
