import React from "react";
import styled from "styled-components";

import Button from "./Button";

import LinkIcon from "../Assets/link-icon.svg";
import RemoveIcon from "../Assets/remove-button.svg";

const StyledSavedStoryCard = styled.div`
  align-items: center;
  background-color: white;
  display: flex;
  justify-content: space-between;
  margin-top: 36px;
  outline: 4px solid #f86900;
  padding: 8px;
  width: 80%;
  .title-link-container {
    align-items: center;
    display: flex;
    margin-left: 36px;
  }
  .title-link-container a img {
    width: 20px;
  }
  .title-link-container h1 {
    color: #f86900;
    font-size: 20px;
    margin: 0 16px;
    text-transform: capitalize;
  }
  .remove-button {
    margin: 16px 0;
    outline: none;
  }
  @media (max-width: 490px) {
    margin-top: 24px;
    width: 100%;
    ,
    .title-link-container {
      margin-left: 0;
    }
    .title-link-container h1 {
      font-size: 16px;
    }
  }
`;

const SavedStoryCard = props => {
  return (
    <>
      {props.isSaved.length > 0 ? (
        props.isSaved.map((story, i) => {
          return (
            <StyledSavedStoryCard key={i}>
              <div className="title-link-container">
                <a href={story.url} target="new">
                  <img src={LinkIcon} alt="link" />
                </a>
                <h1>
                  {story.title.length < 40
                    ? story.title
                    : story.title.slice(0, 40) + "..."}
                </h1>
              </div>
              <Button
                className="remove-button"
                onClick={props.removeStory}
                id={props.isSaved[i].id}
                label="remove"
              />
            </StyledSavedStoryCard>
          );
        })
      ) : (
        <h2>You haven't saved any stories... </h2>
      )}
    </>
  );
};

export default SavedStoryCard;
