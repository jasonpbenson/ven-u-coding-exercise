import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";

import Header from "./Header";
import TopStoriesResults from "../Pages/TopStories";
import SavedStories from "../Pages/SavedStories";

import useLocalStorage from "../Hooks/useLocalStorageHook";

const LayoutStyles = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: flex-start;
  overflow: scroll;
  width: 100vw;
  .background-element {
    background-color: #53a0dd;
    clip-path: polygon(0 25%, 0% 100%, 59% 100%);
    height: 100%;
    position: fixed;
    width: 100%;
  }
  @media (max-width: 490px) {
    .background-element {
      display: none;
    }
  }
`;

const Layout = props => {
  const [apiData, setApiData] = useState([]);
  const [isSaved, setIsSaved] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const saveStory = event => {
    let id = parseInt(event.target.id);
    for (let i = 0; i < apiData.length - 1; i++) {
      if (apiData[i].id === id) {
        apiData[i].isSaved = true;
        console.log("saveStory id: ", apiData[i].id);
        console.log("saveStory isSaved: ", apiData[i].isSaved);
        isSaved.push(apiData[i]);
        setIsSaved(isSaved => [...isSaved]);
      }
    }
  };

  const removeStory = event => {
    let id = parseInt(event.target.id);
    console.log(id);
    for (let i = 0; i < apiData.length - 1; i++) {
      if (apiData[i].id === id) {
        apiData[i].isSaved = false;
        console.log("removeStory id: ", apiData[i].id);
        console.log("removeStory isSaved: ", apiData[i].isSaved);
      }
    }
    const element = event.target.parentElement;
    isSaved.splice(element, 1);
    setIsSaved(isSaved => [...isSaved]);
    // console.log("removeStory: ", isSaved);
    // console.log(apiData);
  };

  const topStoriesApi =
    "https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty";

  useEffect(() => {
    setIsLoading(true);
    const getTopStories = () => {
      axios
        .get(topStoriesApi)
        .then(response => {
          let storyIds = response.data.slice(0, 12);
          for (let i = 0; i < storyIds.length; i++) {
            axios
              .get(
                `https://hacker-news.firebaseio.com/v0/item/${storyIds[i]}.json?print=pretty`
              )
              .then(response => {
                // create isSaved value for data object and set to false
                response.data.isSaved = false;
                setApiData(apiData => [...apiData, response.data]);
              })
              .catch(function(error) {
                console.log(error);
              });
          }
        })
        .catch(function(error) {
          console.log(error);
          setIsError(true);
        });
    };
    getTopStories();
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, []);

  return (
    <LayoutStyles>
      <div className="background-element"></div>
      <Header location={props.location.pathname} />
      {props.location.pathname === "/search-results" ? (
        <TopStoriesResults
          topStories={apiData}
          isLoading={isLoading}
          isError={isError}
          isSaved={isSaved}
          saveStory={saveStory}
          removeStory={removeStory}
        />
      ) : props.location.pathname === "/saved-stories" ? (
        <SavedStories
          topStories={apiData}
          isSaved={isSaved}
          removeStory={removeStory}
        />
      ) : (
        <Redirect to="/" />
      )}
    </LayoutStyles>
  );
};

export default Layout;
