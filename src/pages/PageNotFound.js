import React from 'react'
import MetaTags from 'react-meta-tags';
import { Header, HeaderBox, Section, SectionText, HeaderTitle, LoadingContainer, Loading } from '../components/Global/Global';
import { Img, ImgContainer, PNFText } from '../components/404Elements'
function PageNotFound() {
    return (
        <>
            <MetaTags>
                <title>Samuel Swedberg | 404</title> 
            </MetaTags>
            <Section>
                <ImgContainer>
                    <Img style={{backgroundImage: `url("/logo512.png")`}}></Img>
                </ImgContainer>
            </Section>
            <Section>
                <PNFText>
                    404 page not found.
                </PNFText>
            </Section>
        </>
    )
}

export default PageNotFound
