import React from 'react'
import MetaTags from 'react-meta-tags';
import { Header, HeaderBox, Section, SectionText, HeaderTitle, Divider } from '../../components/Global/Global';
import { Opening, OpeningCard, OpeningHeader, OpeningBody, OpeningText, OpeningLink, OpeningImg, ImgSection, ImgCard, Img } from '../../components/Global/Blog';
import { FaExternalLinkAlt } from 'react-icons/fa';

function energysword() {
    return (
        <>
            <MetaTags>
                <title>Samuel Swedberg | Energy Sword</title> 
            </MetaTags>
            <Section>
                <Header style={{backgroundImage: `url("/media/pages/about/header.jpg")`}}>
                    <HeaderBox><HeaderTitle>HALO ENERGY SWORD</HeaderTitle></HeaderBox>
                </Header>
            </Section>
            <Divider/>
            <Opening>
                <OpeningCard>
                    <OpeningBody>
                        <OpeningHeader>Useful links</OpeningHeader>
                            <OpeningText><OpeningLink href="https://www.thingiverse.com/thing:1296677" target="_blank">Thingiverse <FaExternalLinkAlt/></OpeningLink></OpeningText>
                    </OpeningBody>
                    <OpeningImg style={{backgroundImage: `url("/media/pages/projects/3dprinting/esword/thumbnail.jpg")`}}></OpeningImg>
                </OpeningCard>
            </Opening>
            <Divider/>
            <Section>
                <SectionText>This project was rather frustrating. It was fun to print out using transparent filament, putting together the sides were annoying. It was also difficult since the LED strip was too wide to fit inside, even when I cut down the sides. It's all connected to an Arduino nano.</SectionText>
            </Section>
            <Divider/>
                <ImgSection><ImgCard><Img style={{backgroundImage: `url("/media/pages/projects/3dprinting/esword/thumbnail.jpg")`}}></Img></ImgCard></ImgSection>
            <Divider/>
        </>
    )
}

export default energysword
