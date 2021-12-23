import React from 'react'
import MetaTags from 'react-meta-tags';
import { Header, HeaderBox, Section, SectionText, HeaderTitle, Divider } from '../../components/Global/Global';
import { Opening, OpeningCard, OpeningHeader, OpeningBody, OpeningText, OpeningLink, OpeningImg, ImgSection, ImgCard, Img } from '../../components/Global/Blog';
import { FaExternalLinkAlt } from 'react-icons/fa';

function darthvaderhelmet() {
    return (
        <>
            <MetaTags>
                <title>Samuel Swedberg | Darth Vader Helmet</title> 
            </MetaTags>
            <Section>
                <Header style={{backgroundImage: `url("/media/pages/about/header.jpg")`}}>
                    <HeaderBox><HeaderTitle>DARTH VADER HELMET</HeaderTitle></HeaderBox>
                </Header>
            </Section>
            <Divider/>
            <Opening>
                <OpeningCard>
                    <OpeningBody>
                        <OpeningHeader>Useful links</OpeningHeader>
                            <OpeningText><OpeningLink href="https://www.thingiverse.com/thing:2560287" target="_blank">Thingiverse <FaExternalLinkAlt/></OpeningLink></OpeningText>
                    </OpeningBody>
                    <OpeningImg style={{backgroundImage: `url("/media/pages/projects/3dprinting/vader/thang.jpg")`}}></OpeningImg>
                </OpeningCard>
            </Opening>
            <Divider/>
            <Section>
                <SectionText>Although the 501st helmet is my favorite helmet that I have made, this is the most surreal. Even though this is like my fourth helmet that I've made, it still is insane to see something from the movies actually in person.. in full size too.</SectionText>
            </Section>
            <Divider/>
                <ImgSection><ImgCard><Img style={{backgroundImage: `url("/media/pages/projects/3dprinting/vader/vader.jpg")`}}></Img></ImgCard></ImgSection>
            <Divider/>
        </>
    )
}

export default darthvaderhelmet
