import React from 'react'
import MetaTags from 'react-meta-tags';
import { Header, HeaderBox, Section, SectionText, SectionHeader, HeaderTitle, Divider } from '../../components/Global/Global';
import { Opening, OpeningCard, OpeningHeader, OpeningBody, OpeningText, OpeningLink, OpeningImg, ImgSection, ImgCard, Img } from '../../components/Global/Blog';
import { FaExternalLinkAlt } from 'react-icons/fa';

function hmp() {
    return (
        <>
            <MetaTags>
                <title>Samuel Swedberg | Helmet Making Process</title> 
            </MetaTags>
            <Section>
                <Header style={{backgroundImage: `url("/media/pages/about/header.jpg")`}}>
                    <HeaderBox><HeaderTitle>HELMET MAKING PROCESS</HeaderTitle></HeaderBox>
                </Header>
            </Section>
            <Divider/>
            <Opening>
                <OpeningCard>
                    <OpeningBody>
                        <OpeningHeader>Useful links</OpeningHeader>
                            <OpeningText><OpeningLink href="https://www.youtube.com/user/JustTheBigBaby" target="_blank">Galatic Armory <FaExternalLinkAlt/></OpeningLink></OpeningText>
                            <OpeningText><OpeningLink href="https://www.youtube.com/watch?v=YNL0qx3BEKA" target="_blank">Tethan Props <FaExternalLinkAlt/></OpeningLink></OpeningText>
                            <OpeningText><OpeningLink href="https://www.youtube.com/channel/UC70YIbdCTrXgnegjVHbLt-A" target="_blank">PatchBOTS <FaExternalLinkAlt/></OpeningLink></OpeningText>
                            <OpeningText><OpeningLink href="https://databank.501st.com/databank/Costuming:CT_-_501st_Legion" target="_blank">501st Legion Measurements <FaExternalLinkAlt/></OpeningLink></OpeningText>
                            <OpeningText><OpeningLink href="https://www.amazon.com/gp/product/B000LB4P72/" target="_blank">Sellstrom Replacement Window <FaExternalLinkAlt/></OpeningLink></OpeningText>
                    </OpeningBody>
                    <OpeningImg style={{backgroundImage: `url("/media/pages/projects/references/thumbnail.jpg")`}}></OpeningImg>
                </OpeningCard>
            </Opening>
            <Divider/>
            <Section>
                <SectionText center><em>Note: This is skipping the process of getting all the files AND printing them out.</em></SectionText>
                <SectionHeader title>Putting it all together</SectionHeader>
                <SectionText>I used Gorilla Gel Super Glue to put together the bottom pieces first. I used clamps to hold the ends to get as close to a perfect line-up as possible. I did the following for the middle layer and the top layer. Once I have the three layers put together (remember this was printed on an Ender 3 Pro. CR-10, or printers with bigger beds, could print is less pieces than mine) I glued the bottom and middle together, then put the top dome on. Of course, the glue isn't the strongest in the world... in the beginning I actually dropped the first two pieces and it didn't stick. However, after all the pieces are fully assembled, I used a 5 minute epoxy to strengthen the seams. (At the end of the project I superglued the seams one last time along with the visor for one final protection.) After the glue and assembly period is complete, it's time to take care of the print lines.</SectionText>
            </Section>
            <Divider/>
                <ImgSection><ImgCard><Img style={{backgroundImage: `url("/media/pages/projects/references/thumbnail.jpg")`}}></Img></ImgCard></ImgSection>
            <Divider/>
            <Section>
                <SectionHeader title>Bondooo</SectionHeader>
                <SectionText>I followed Galactic Armory's process, however I want to document my personal process and experience, even if it is similar. Other sources for techniques were from Tethan Props and PatchBOTS. I went outside with a RESPIRATOR and put Bondo Glazing and Spot Putty all over the helmet, except in the smaller details which would be hard to sand. Once the bondo has hardened, I sanded it with 120 grit sandpaper until it was fairly smooth. If there was a rough spot I put more Bondo over it and sanded it again. Once I was happy with the sanding, I moved on to filler primer. I had Rust-Oleum Primer White, so it was the base coat as well. I had a few areas where the spray paint ran so I sanded and smoothened out rough spots, especially the seam lines. After I felt confident with what I had, I put two more layers of filler primer before moving onto painting.</SectionText>
            </Section>
            <Divider/>
                <ImgSection><ImgCard><Img style={{backgroundImage: `url("/media/pages/projects/references/thumbnail.jpg")`}}></Img></ImgCard></ImgSection>
            <Divider/>
            <Section>
                <SectionHeader title>Painting</SectionHeader>
                <SectionText>I started off with the stripe. I used masking tape, following the 501st Legion measurements with my general eye to mask the stripe. Once the masking tape was on, I put blue painters tape around the outer edges to secure it more. To cover the rest of the helmet I used grocery bags, taped using the painters tape. Before the paint, to recreate battle damage, I used liquid latex using a small paint brush over the area to be painted. For the paint, I used Rust-Oleum Nantucket Blue. PatchBOTS used Krylon Global Blue, however I personally was satisfied with the look of it, either would look acceptable. I let the paint dry for about an hour, before I took off the tape and let it dry completely over night. I repeated the process for the black brim stripe and grey inside area on the dome. I again used Rust-Oleum "grey and black" (I don't remember specific name). I did not use the liquid latex for these parts. On the frown, vocoder, and grill lookin' things on the sides of the vocodor (I can't think of the name right now), I hand painted them using acrylic black paints. However, on the frown on the outer frown I used a mix of black and white to get that perfect grey.</SectionText>
            </Section>
            <Divider/>
                <ImgSection><ImgCard><Img style={{backgroundImage: `url("/media/pages/projects/references/thumbnail.jpg")`}}></Img></ImgCard></ImgSection>
            <Divider/>
            <Section>
                <SectionHeader title>Weathering</SectionHeader>
                <SectionText>For the weathering process I followed Galactic Armory's method by mixing black acryic paint and water and using a sponge brush all... over... the helmet. Personally, I wanted a very damaged look, so I went all out. It all depends on if you want a shiny or not. For me, I was satisfied with the weathered white color, but I wasn't happy with the corners, so I went even more, especially on the sides. I didn't have a perfect masking job so I went in with a fine brush with black acrylic paint in the corners to show more dirt and grime (especially on the brim since that was difficult to mask). In addition to the weathering, I looked up a picture of a 501st helmet and saw some numbering and a very defined bullet mark, so I added those in with the paint brush, firstly smudging it with my finger to add some depth and then with a finer brush making the defined marks.</SectionText>
            </Section>
            <Divider/>
                <ImgSection><ImgCard><Img style={{backgroundImage: `url("/media/pages/projects/references/thumbnail.jpg")`}}></Img></ImgCard></ImgSection>
            <Divider/>
            <Section>
                <SectionHeader title>Visor</SectionHeader>
                <SectionText>Galactic Armory recommended a Hobart face shield, however I couldn't find any on Amazon so I got a Sellstrom Replacement Window. I thought I got black but in the light it was a dark green. I wasn't really upset as you couldn't tell unless you shined a light on it or looked through it. In my opinion, I remember on the original Battlefront 2 the 501st Grunts had a "dark green" visor so I was actually very pleased with the cards I was dealt. I measured roughly with a paper and pencil of the outline, and cut a rectangular shape out of the visor. Since this was my first time, I didn't go as exact as Galactic Armory did, but rather bit by bit I removed a piece until I got something that fit good. I superglued it in, and used a lot more superglue than was needed, but I wanted it to be very secure. I started on one end, pushing on the visor to be as flush as possible, and glued. I did this on the other side as well and finished in the middle. Since the helmet was a little big on me, I reused some of the foam from the Ender 3 Pro shipping box and cut out and superglued it in the helmet until I got a snug fit at eye level. Now the helmet sits and collects dust... Nevertheless, it is still unreal to look at and is, in a way, a dream come true.</SectionText>
            </Section>
            <Divider/>
                <ImgSection><ImgCard><Img style={{backgroundImage: `url("/media/pages/projects/references/thumbnail.jpg")`}}></Img></ImgCard></ImgSection>
            <Divider/>
        </>
    )
}

export default hmp
