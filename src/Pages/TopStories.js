import React from "react";

import Container from "../Components/Container";
import Loader from "../Components/Loader";
import StoryCard from "../Components/StoryCard";
import Button from "../Components/Button";

import HackerNewsLogo from "../Assets/hacker-news-logo.svg";

const TopStories = props => {
  return (
    <Container>
      <header className="page-header">
        <img
          src={HackerNewsLogo}
          alt="Hacker News logo"
          className="hacker-news-logo"
        />
        <h1 className="page-title">Top Stories</h1>
      </header>
      {props.isLoading && <Loader />}
      {props.isError && (
        <>
          <h1>Something went wrong... try again?</h1>
          <Button onClick={document.location.reload()} label="reload" />
        </>
      )}
      {!props.isLoading && (
        <StoryCard
          storyData={props.topStories}
          saveStory={props.saveStory}
          removeStory={props.removeStory}
        />
      )}
    </Container>
  );
};

export default TopStories;
