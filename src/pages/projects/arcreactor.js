import React from 'react'
import MetaTags from 'react-meta-tags';
import { Header, HeaderBox, Section, SectionText, HeaderTitle, Divider } from '../../components/Global/Global';
import { Opening, OpeningCard, OpeningHeader, OpeningBody, OpeningText, OpeningLink, OpeningImg, ImgSection, ImgCard, Img } from '../../components/Global/Blog';
import { FaExternalLinkAlt } from 'react-icons/fa';

function arcreactor() {
    return (
        <>
           <MetaTags>
                <title>Samuel Swedberg | Arc Reactor</title> 
            </MetaTags>
            <Section>
                <Header style={{backgroundImage: `url("/media/pages/about/header.jpg")`}}>
                    <HeaderBox><HeaderTitle>ARC REACTOR</HeaderTitle></HeaderBox>
                </Header>
            </Section>
            <Divider/>
            <Opening>
                <OpeningCard>
                    <OpeningBody>
                        <OpeningHeader>Useful links</OpeningHeader>
                            <OpeningText><OpeningLink href="https://www.thingiverse.com/thing:2560287" target="_blank">Thingiverse <FaExternalLinkAlt/></OpeningLink></OpeningText>
                    </OpeningBody>
                    <OpeningImg style={{backgroundImage: `url("/media/pages/projects/references/thumbnail.jpg")`}}></OpeningImg>
                </OpeningCard>
            </Opening>
            <Divider/>
            <Section>
                <SectionText>Coming soon</SectionText>
            </Section>
            <Divider/>
                <ImgSection><ImgCard><Img style={{backgroundImage: `url("/media/pages/projects/references/thumbnail.jpg")`}}></Img></ImgCard></ImgSection>
            <Divider/>
        </>
    )
}

export default arcreactor
