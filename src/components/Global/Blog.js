import styled from 'styled-components'

export const Opening = styled.div`
    display: flex;
    justify-content: center;
    height: 100%;
    width: 80%;
    margin-left: 5%;
    margin-right: 5%;
`;

export const OpeningCard = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const OpeningBody = styled.div`
    width: 100vmin;
    display: block;
    justify-content: center;
    align-items: center;
    text-align: center;
    top: 25%;
    position: relative;
`;

export const OpeningHeader = styled.div`
    font-weight: 400;
    font-size: 2rem;
    display: inline-block;
    text-align: left;
    @media screen and (max-width: 400px) {
        font-size: 8vw;
    }
`;

export const OpeningText = styled.div`
    font-size: 1rem;
    @media screen and (max-width: 525px) {
        font-size: 3vw;
    }
`;

export const OpeningLink = styled.a`
    font-size: 1rem;
    color: #808080;
    cursor: pointer;
    &.active {
    color: #808080;
    }
    &:hover {
        color: #808080;
    }
    @media screen and (max-width: 525px) {
        font-size: 3vw;
    }
`;

export const OpeningImg = styled.div`
    height: 30vmin;
    width: 100%;
    background-repeat: no-repeat;
    background-size: cover;
`;

export const ImgSection = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
`;

export const ImgCard = styled.div`
    width: 100vmin;
    height: 67vmin;

`;

export const Img = styled.div`
    height: 100%;
    width: 100%;
    background-repeat: no-repeat;
    background-size: cover;
`;