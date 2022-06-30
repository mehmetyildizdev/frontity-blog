import React from "react";
import { Head, connect, Global, css, styled } from "frontity";
import Link from "@frontity/components/link";
import Switch from "@frontity/components/switch";
import List from "./list";
import Post from "./post";
import Page from "./page";
import Loading from "./loading";
import Error from "./error";

const Root = ({ state, actions }) => {
  const data = state.source.get(state.router.link);
  return (
    <>
      <Global
        styles={css`
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
          html {
            font-family: system-ui Verdana Arial sans-serif;
          }
        `}
      />
      <Head>
        <title>Teknik Muhakkik Frontity Site</title>
        <meta name="description" content="Based on Frontity tutorial" />
      </Head>
      <Header isPostType={data.isPostType} isPage={data.isPage}>
        {/* header data checks passed as props in CSS in JS below
        (its not JSX, so it needs $ sign) */}
        <HeaderContent>
          <h1>Hello Frontity</h1>
          {state.theme.isUrlVisible ? (
            <>
              Current URL: {state.router.link}
              <Button onClick={actions.theme.toggleUrl}>&#x3c; hide URL</Button>
              }
            </>
          ) : (
            <Button onClick={actions.theme.toggleUrl}>Show URL &#x3e;</Button>
          )}
          <h3>This is Mehmet!</h3>

          <Menu>
            <Link link="/">Home</Link>
            <Link link="/destinations">Destinations</Link>

            <Link link="about-us">About</Link>
          </Menu>
        </HeaderContent>
      </Header>

      <hr />
      <Main>
        <Switch>
          <Loading when={data.isFetching} />
          <Error when={data.isError} />

          <List when={data.isArchive} />
          <Post when={data.isPost} />
          <Page when={data.isPage} />
          <Page when={data.isDestinations} />
        </Switch>
      </Main>
    </>
  );
};

export default connect(Root);

const Header = styled.header`
  background-color: bisque;
  border-width: 0 0 8px 0;
  border-style: solid;
  border-color: ${(props) =>
    props.isPostType ? (props.isPage ? "black" : "brown") : "blue"};
  h1 {
    color: mediumvioletred;
  }
`;

const HeaderContent = styled.div`
  max-width: 800px;
  padding: 2em 1em;
  margin: auto;
`;

const Main = styled.main`
  max-width: 800px;
  padding: 1em;
  margin: auto;

  img {
    max-width: 100%;
  }
  h2 {
    margin: 0.5em 0;
  }
  p {
    line-height: 1.25em;
    margin-bottom: 0.75em;
  }
  figcaption {
    color: #828282;
    font-size: 0.8em;
    margin-bottom: 1em;
  }
`;

const Menu = styled.nav`
  display: flex;
  flex-direction: row;
  margin-top: 1em;
  & > a {
    margin-right: 1em;
    color: blue;
    text-decoration: none;
  }
`;

const Button = styled.button`
  background: transparent;
  border: none;
  color: #aaa;

  :hover {
    cursor: pointer;
    color: #888;
  }
`;
