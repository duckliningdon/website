import styled from 'styled-components'

export const Header = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin: 0 auto;
    width: 100%;
    background-color: #fff;
    background-position: 50% 40%;
    background-repeat: no-repeat;
    background-size: cover;
    box-shadow: inset 0px 0px 20px 5px rgba(0, 0, 0, .5);
`;

export const HeaderBox = styled.div`
    background-color: #000;
    padding: 2.5%;
    margin: 0 auto;
    margin-top: 2.5%;
    margin-bottom: 2.5%;
    max-width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    outline: white;
    outline-width: 2px;
    outline-style: groove;
`;

export const HeaderTitle = styled.h2`
    color: #fff;
    max-width: 100%;
    font-weight: 400;
    text-align: center;
`;


export const Section = styled.section`
    height: auto;
    position: relative;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin: 0 auto;
    background-color: #fff;
    z-index: 1;
    overflow: hidden;
    padding-bottom: 10px;
`;

export const SectionHeader = styled.h2`
    width: 100vmin;
    margin-bottom: auto;
    margin-left: 5%;
    margin-right: 5%;
    text-align: ${(props) => props.center ? 'center' : 'left'};
`;

export const SectionText = styled.p`
    width: 100vmin;
    margin-bottom: auto;
    margin-left: 5%;
    margin-right: 5%;
    text-align: ${(props) => props.center ? 'center' : 'left'};
`;


export const Divider = styled.div`
    width: 64px;
    height: ${(props) => props.line ? '4px' : '50px'};
    border-radius: 10px;
    background-color: #000;
    position: relative;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin: 0 auto;
    background-color: ${(props) => props.line ? '#000' : '#fff'};
`;

export const LoadingContainer = styled.div`
    width: 100%;
    height: 25vh;
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Loading = styled.div`
    text-align: center;
`;

