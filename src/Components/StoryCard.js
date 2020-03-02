import React from "react";
import styled, { keyframes } from "styled-components";

import Button from "./Button";

const fadeIn = keyframes`
0% { opacity: 0; filter: brightness(80%) }
100% { opacity: 100; filter: brightness(100%) }
`;

const StyledCard = styled.div`
  align-items: center;
  animation: ${fadeIn} 0.2s linear;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  height: 348px;
  justify-content: space-evenly;
  margin: 32px;
  outline: 4px solid #f86900;
  padding: 16px;
  position: relative;
  width: 230px;

  sup {
    align-self: flex-start;
    color: #f86900;
    margin-left: 16px;
  }

  h1 {
    font-size: 20px;
    height: 72px;
    margin: 36px auto;
    text-align: center;
    text-transform: uppercase;
    vertical-align: middle;
    width: 100%;
  }

  h2 {
    font-size: 18px;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  .score-container {
    align-items: center;
    background-color: #fff;
    border: 4px solid #f86900;
    border-radius: 50%;
    color: #f86900;
    display: flex;
    flex-direction: column;
    font-size: 24px;
    height: 80px;
    justify-content: center;
    position: absolute;
    right: -2rem;
    top: -2rem;
    width: 80px;
    h3 {
      margin: 0;
    }
  }
  .saved {
    color: #53a0dd;
    outline: 2px solid #53a0dd;
  }
  @media (hover: hover) {
    .saved:hover {
      background-color: #53a0dd;
      color: #fff;
    }
  }
  @media (max-width: 490px) {
    margin-top: 24px;
  }
`;

const StoryCard = props => {
  return (
    <>
      {props.storyData.map((story, i) => {
        return (
          <StyledCard key={i}>
            <sup>{story.type}</sup>
            <a href={story.url} target="blank">
              <h1>
                {story.title.length > 48
                  ? story.title.slice(0, 48) + "..."
                  : story.title}
              </h1>
            </a>
            <p>by</p>
            <h2>{story.by}</h2>
            <div className="score-container">
              <h3>{story.score}</h3>
              <sub>score</sub>
            </div>
            {!story.isSaved ? (
              <Button onClick={props.saveStory} id={story.id} label="save" />
            ) : (
              <Button
                className="saved"
                onClick={props.removeStory}
                id={story.id}
                label="remove"
              />
            )}
          </StyledCard>
        );
      })}
    </>
  );
};

export default StoryCard;
