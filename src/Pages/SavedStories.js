import React from "react";

import Container from "../Components/Container";
import SavedStoryCard from "../Components/SavedStoryCard";

import HackerNewsLogo from "../Assets/hacker-news-logo.svg";

const SavedStories = props => {
  return (
    <Container>
      <header className="page-header">
        <img
          src={HackerNewsLogo}
          alt="Hacker News logo"
          className="hacker-news-logo"
        />
        <h1 className="page-title">Saved Stories</h1>
      </header>
      <SavedStoryCard
        topStories={props.topStories}
        isSaved={props.isSaved}
        removeStory={props.removeStory}
      />
    </Container>
  );
};

export default SavedStories;
