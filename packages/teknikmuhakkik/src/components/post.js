import React from "react";
import { Head, connect, styled } from "frontity";
import dayjs from "dayjs";
import tw from "twin.macro";
// import { css, theme } from 'twin.macro' to import customisation from tailwind.config.js

const Post = ({ state, libraries }) => {
  const data = state.source.get(state.router.link);
  const post = state.source[data.type][data.id];
  const author = state.source.author[post.author];
  const Html2React = libraries.html2react.Component;

  const formattedDate = dayjs(post.date).format("DD MMMM YYYY");
  return (
    <div>
      <Head>
        <title>{post.title.rendered}</title>
        <meta name="description" content={post.excerpt.rendered} />
      </Head>
      <Title>{post.title.rendered}</Title>
      <PostInfo>
        <p>
          <strong>Posted: {formattedDate}</strong>
        </p>
        <p>
          <strong> By {author.name}</strong>
        </p>
      </PostInfo>
      <Html2React html={post.content.rendered} />
    </div>
  );
};

export default connect(Post);

const PostInfo = styled.div`
  background-image: linear-gradient(to right, lightcoral, palevioletred);
  margin-bottom: 1em;
  padding: 0.5em;
  border-left: 4px solid greenyellow;
  font-size: 0.8em;
  & > p {
    margin: 0;
  }
`;

const Title = tw.h2`bg-blue-400 text-sm md:text-3xl`;
