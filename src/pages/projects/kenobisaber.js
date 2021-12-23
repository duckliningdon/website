import React from 'react'
import MetaTags from 'react-meta-tags';
import { Header, HeaderBox, Section, SectionText, HeaderTitle, Divider } from '../../components/Global/Global';
import { Opening, OpeningCard, OpeningHeader, OpeningBody, OpeningText, OpeningLink, OpeningImg, ImgSection, ImgCard, Img } from '../../components/Global/Blog';
import { FaExternalLinkAlt } from 'react-icons/fa';

function kenobisaber() {
    return (
        <>
            <MetaTags>
                <title>Samuel Swedberg | Obi-Wan Kenobi Lightsaber</title> 
            </MetaTags>
            <Section>
                <Header style={{backgroundImage: `url("/media/pages/about/header.jpg")`}}>
                    <HeaderBox><HeaderTitle>OBI-WAN KENOBI LIGHTSABER</HeaderTitle></HeaderBox>
                </Header>
            </Section>
            <Divider/>
            <Opening>
                <OpeningCard>
                    <OpeningBody>
                        <OpeningHeader>Useful links</OpeningHeader>
                            <OpeningText><OpeningLink href="https://www.thingiverse.com/thing:1839833" target="_blank">Thingiverse <FaExternalLinkAlt/></OpeningLink></OpeningText>
                    </OpeningBody>
                    <OpeningImg style={{backgroundImage: `url("/media/pages/projects/3dprinting/kenobi/thumbnail.jpg")`}}></OpeningImg>
                </OpeningCard>
            </Opening>
            <Divider/>
            <Section>
                <SectionText>This was the first actual project I did on my Ender 3 Pro. I was still discovering and learning about all the settings, and somehow while messing around my infill settings got put to some crazy value (like less than 1%), which basically made all of the parts hallow. I still went with it, however a few of the parts I had to reprint since they either fell apart when putting together the lightsaber or they just didn't come out great at all. The connection holes were crazy tight too, so it was very difficult to get them to go together, so I can to really sand down the holes.</SectionText>
            </Section>
            <Divider/>
                <ImgSection><ImgCard><Img style={{backgroundImage: `url("/media/pages/projects/3dprinting/kenobi/thumbnail.jpg")`}}></Img></ImgCard></ImgSection>
            <Divider/>
        </>
    )
}

export default kenobisaber
