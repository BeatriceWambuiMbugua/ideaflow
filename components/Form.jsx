import Link from "next/link";
import React from "react";

const Form = ({ type, post, setPost, submitting, handleSubmit }) => {
  return (
    <section className="w-full max-w-full flex-start flex-col">
      <h1 className="head_text text-left">
        <span className="blue_gradient">{type} Ideas</span>
      </h1>

      <p className="desc text-left max-w-md">
        {type} ideas that ignite change and inspire innovation using AI. Unleash
        your imagination and explore the endless possibilities that lie within
        your mind. From groundbreaking inventions to transformative solutions,
        let your creativity soar and shape a better future.
      </p>

      <form
        onSubmit={handleSubmit}
        className="mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism"
      >
        <label>
          <span className="font-raleway font-semibold text-base text-gray-700">
            Your AI Idea Prompt
          </span>
          <textarea
            value={post.idea}
            onChange={(e) => setPost({ ...post, idea: e.target.value })}
            placeholder="Write your AI Prompt  for an Idea here..."
            required
            className="form_textarea"
          />
        </label>
        <label>
          <span className="font-raleway font-semibold text-base text-gray-700">
            Tag {` `}
            <span className="font-normal">
              (#webdevelopment, #programming, #frontend)
            </span>
          </span>
          <input
            value={post.tag}
            onChange={(e) => setPost({ ...post, tag: e.target.value })}
            placeholder="#tag"
            required
            className="form_input"
          />
        </label>

        <div className="flex-end mx-3 mb-5 gap-4">
          <Link href="/" className="text-gray-500 text-sm">
            Cancel
          </Link>

          <button
            type="submit"
            disabled={submitting}
            className="px-5 py-1.5 text-sm bg-primary-coral rounded-full text-white"
          >
            {submitting ? `${type}ing...` : type}
          </button>
        </div>
      </form>
    </section>
  );
};

export default Form;
