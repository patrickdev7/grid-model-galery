import React, { useState } from 'react';

import * as C from './styles';

const GridContainer: React.FC = () => {
    const [seeMore, setSeeMore] = useState(false);
    const wrapperSeeMore = () => setSeeMore(!seeMore);

  return (
    <C.Container>
        <div>AREA 1</div>
        <div>AREA 2</div>
        <div>AREA 3</div>
        <div>AREA 4</div>
        <div>AREA 5</div>
        <div>AREA 6</div>
        <div>AREA 7</div>
        <div>AREA 8</div>
        <div>AREA 9</div>
        <div>AREA 10</div>
        <div>AREA 1</div>
        <div>AREA 2</div>
        <div>AREA 3</div>
        <div>AREA 4</div>
        <div>AREA 5</div>
        <div>AREA 6</div>
        <div>AREA 7</div>
        <div>AREA 8</div>
        <div>AREA 9</div>
        <div>AREA 10</div>
        {seeMore ? 
            <>
                <div>AREA 1</div>
                <div>AREA 2</div>
                <div>AREA 3</div>
                <div>AREA 4</div>
                <div>AREA 5</div>
                <div>AREA 6</div>
                <div>AREA 7</div>
                <div>AREA 8</div>
                <div>AREA 9</div>
                <div>AREA 10</div>
                <div>AREA 1</div>
                <div>AREA 2</div>
                <div>AREA 3</div>
                <div>AREA 4</div>
                <div>AREA 5</div>
                <div>AREA 6</div>
                <div>AREA 7</div>
                <div>AREA 8</div>
                <div>AREA 9</div>
                <div>AREA 10</div>
            </>
        : null}
        <button onClick={wrapperSeeMore}>SEE MORE</button>
    </C.Container>
  );
}

export default GridContainer;