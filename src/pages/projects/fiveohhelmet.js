import React from 'react'
import MetaTags from 'react-meta-tags';
import { Header, HeaderBox, Section, SectionText, HeaderTitle, Divider } from '../../components/Global/Global';
import { Opening, OpeningCard, OpeningHeader, OpeningBody, OpeningText, OpeningLink, OpeningImg, ImgSection, ImgCard, Img } from '../../components/Global/Blog';
import { FaExternalLinkAlt } from 'react-icons/fa';

function fiveohhelmet() {
    return (
        <>
            <MetaTags>
                <title>Samuel Swedberg | 501st Helmet</title> 
            </MetaTags>
            <Section>
                <Header style={{backgroundImage: `url("/media/pages/about/header.jpg")`}}>
                    <HeaderBox><HeaderTitle>501ST HELMET</HeaderTitle></HeaderBox>
                </Header>
            </Section>
            <Divider/>
            <Opening>
                <OpeningCard>
                    <OpeningBody>
                        <OpeningHeader>Useful links</OpeningHeader>
                            <OpeningText><OpeningLink href="https://www.thingiverse.com/thing:2718242" target="_blank">Thingiverse <FaExternalLinkAlt/></OpeningLink></OpeningText>
                    </OpeningBody>
                    <OpeningImg style={{backgroundImage: `url("/media/pages/projects/3dprinting/501st/tnh.jpg")`}}></OpeningImg>
                </OpeningCard>
            </Opening>
            <Divider/>
            <Section>
                <SectionText>This was the main reason why I wanted to get a 3D printer in the first place. I saw on reddit a Captain Rex and Commander Cody helmet figure and I wondered how hard it would be to get one of those. That's when I discovered that 3D printing price has come down since the last time I checked it (which was like over 5 years ago when I was 12 or something and had no money...) That's when I decided to pull the trigger on getting myself an Ender 3 Pro, which looking back was a fantastic decision. I won't go into the details of how I made the helmet, since you can go check the references page. Even a year later while rewriting this section, it is probably my favorite thing I've made with the 3D printer.</SectionText>
            </Section>
            <Divider/>
                <ImgSection><ImgCard><Img style={{backgroundImage: `url("/media/pages/projects/3dprinting/501st/tnh.jpg")`}}></Img></ImgCard></ImgSection>
            <Divider/>
        </>
    )
}

export default fiveohhelmet
