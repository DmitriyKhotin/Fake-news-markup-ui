import React from 'react';
import styled from 'styled-components';

const getColor = (score) => {
  if (score > 0) {
    const intensity = Math.max(100, Math.floor(score * 5000));
    return `rgb(0, 0, ${intensity})`;
  } else {
    const intensity = Math.max(100, Math.floor(-score * 5000));
    return `rgb(${intensity}, 0, 0)`;
  }
};

const HighlightedText = styled.span`
  background-color: ${({ score }) => getColor(score)};
`;


const TextHighlighter = ({ text, features }) => {
  const words = text.split(/(\s+|\b)/)
    const highlightedWords = words.map((word, index) => {
      const cleanWord = word.toLowerCase().replace(/[.,/#!$%^&*;:{}=\-_`~()]/g, ''); // Убираем знаки препинания для поиска в features
      const score = features[cleanWord];

      if (score) {
        return (
          <HighlightedText key={index} score={score}>
            {word}
          </HighlightedText>
        );
      } else {
        return <span key={index}>{word}</span>;
      }
    });

    console.log('highlightedWords', highlightedWords)
  
    return <>{highlightedWords.map((word, index) => <React.Fragment key={index}>{word} </React.Fragment>)}</>;
  };
  
  export default TextHighlighter;