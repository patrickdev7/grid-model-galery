import styled from 'styled-components';

export const Container = styled.div`

    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 10px;
    padding: 10px;



    div {
        display: grid;
        place-items: center;
        padding: 40px;
        background-color: orange;
    }

    @media (max-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
    }
    @media (max-width: 480px) {
        grid-template-columns: repeat(1, 1fr);
    }
`;
