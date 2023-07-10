"use client";

import { useEffect, useState } from "react";
import IdeaCard from "./IdeaCard";

const IdeaCardList = ({ data, handleTagClick }) => {
  return (
    <div className="mt_16 prompt_layout">
      {data.map((post) => (
        <IdeaCard key={post._id} post={post} handleTagClick={handleTagClick} />
      ))}
    </div>
  );
};
const Feed = () => {
  const [searchText, setSearchText] = useState("");
  const [posts, setPosts] = useState([]);
  //const handleSearchTextChange = (e) => {};

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch("/api/idea");
      const data = await response.json();

      setPosts(data);
    };
    fetchPosts();
  }, []);
  return (
    <section className="feed">
      <form className="relative w-full flex-center">
        <input
          // value={searchText}
          placeholder="Search for a tag or an username"
          // onChange={handleSearchTextChange}
          type="text"
          required
          className="search_input peer"
        />
       
      </form>
      <IdeaCardList data={posts} handleTagClick={() => {}} />
    </section>
  );
};

export default Feed;
