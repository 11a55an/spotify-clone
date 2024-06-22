import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import TopSongs from '../features/feed/customFeeds/TopSongs.jsx';
import NewReleases from '../features/feed/customFeeds/NewReleases.jsx';
import FavouriteArtists from '../features/feed/customFeeds/FavouriteArtists.jsx';

const StyledHome = styled.div`
  padding: calc(6.4rem + 0.8rem) 1.8rem 0;
  min-height: 100vh;

  transition: all 2s;

  ${({ $gradientColor }) => css`
    background-image: linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0.6),
        #121212 40vh
      ),
      linear-gradient(
        to bottom,
        ${$gradientColor},
        ${$gradientColor} 40vh,
        transparent 40vh,
        transparent 100%
      );
  `}
`;

const HiddenSpan = styled.span`
  display: none;
`;

const Home = () => {
  const [gradientColor, setGradientColor] = useState('#8b5cf6');

  return (
    <StyledHome className="home" $gradientColor={gradientColor}>
      <HiddenSpan>setGradientColor={setGradientColor}</HiddenSpan>
      <TopSongs />
      <NewReleases />
      <FavouriteArtists />
    </StyledHome>
  );
};

export default Home;
