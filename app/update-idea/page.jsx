"use client";
import Form from "@components/Form";
import {  useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const UpdateIdea = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const ideaId = searchParams.get("id");
  const [submitting, setSubmitting] = useState(false);
  const [post, setPost] = useState({
    idea: "",
    tag: "",
  });

  useEffect(() => {
    const getIdeaDetails = async () => {
        const response = await fetch(`/api/idea/${ideaId}`)
        const data = await response.json();

        setPost({idea: data.idea, 
        tag: data.tag})
    }
    if(ideaId) getIdeaDetails()
  }, [ideaId]);

  const updateIdea = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    if(!ideaId) return alert("Idea ID not found")
    try {
      const response = await fetch(`/api/idea/${ideaId}`, {
        method: "PATCH",
        body: JSON.stringify({
          idea: post.idea,
         
          tag: post.tag,
        }),
      });
      if (response.ok) {
        router.push("/");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setSubmitting(false);
    }
  };
  return (
    <Form
      type="Edit"
      post={post}
      setPost={setPost}
      submitting={submitting}
      handleSubmit={updateIdea}
    />
  );
};

export default UpdateIdea;
