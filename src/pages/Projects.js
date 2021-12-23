import React, { useState, useEffect } from 'react';
import MetaTags from 'react-meta-tags';
import { AiFillTag } from 'react-icons/ai'
import { BsFillArrowRightCircleFill } from 'react-icons/bs'
import PacmanLoader from 'react-spinners/PacmanLoader'; // Maybe change to ring loader if color scheme changes
import { Header, HeaderBox, Section, HeaderTitle, LoadingContainer, Loading } from '../components/Global/Global';
import { GridContainer, BlogCard, Img, CardInfo, Hr, TitleContent, HeaderThree, TagList, UtilityList, ExternalLinks, InternalLinks, Tag } from '../components/ProjectElements';
import { projects } from '../constants/constants';

// const [loading, setLoading] = useState(false);

// useEffect(() => {
//   setLoading(true);
//   setTimeout(() => {
//     setLoading(false);
//   }, 2000);
// }, []);

function Projects() {
    const [imgsLoaded, setImgsLoaded] = useState(false)

    useEffect(() => {
        const loadImage = image => {
        return new Promise((resolve, reject) => {
            const loadImg = new Image()
            loadImg.src = image.image
            // wait 2 seconds to simulate loading time
            loadImg.onload = () =>
            setTimeout(() => {
                resolve(image.image)
            }, 2000)

            loadImg.onerror = err => reject(err)
        })
        }

        Promise.all(projects.map(image => loadImage(image)))
        .then(() => setImgsLoaded(true))
        .catch(err => console.log("Failed to load images", err))
    }, [])
    return (
      <>
        {
            imgsLoaded ? (
            <>
            <MetaTags>
                <title>Samuel Swedberg | Projects</title> 
            </MetaTags>
            <Section>
                <Header style={{backgroundImage: `url("/media/pages/projects/3dprinting/header.jpg")`}}>
                    <HeaderBox><HeaderTitle>PROJECTS</HeaderTitle></HeaderBox>
                </Header>
            </Section>
            <Section>
                <GridContainer>
                    {projects.map((p, i) => { 
                        return ( 
                            <BlogCard key={i}>
                            <Img src={p.image} />
                                <TitleContent>
                                <HeaderThree title>{p.title}</HeaderThree>
                                <Hr />
                                </TitleContent>
                                <CardInfo className="card-info">{p.description}</CardInfo>
                                <UtilityList>
                                <TagList><AiFillTag/>
                                    {p.tags.map((t, i) => {
                                        return <Tag key={i}>{t}</Tag>;
                                    })}
                                </TagList>
                                <InternalLinks to={p.path} activeStyle>Read More <BsFillArrowRightCircleFill/></InternalLinks>
                                </UtilityList>
                            </BlogCard>
                        );
                    })}
                </GridContainer>
            </Section>
            </>
            ) : (
            <>
            <MetaTags>
                <title>Samuel Swedberg | Projects</title> 
            </MetaTags>
            <Section>
                <Header style={{backgroundImage: `url("/media/pages/projects/3dprinting/header.jpg")`}}>
                    <HeaderBox><HeaderTitle>PROJECTS</HeaderTitle></HeaderBox>
                </Header>
            </Section>
            <LoadingContainer>
                <Loading><PacmanLoader size={30} color={'#000'} /></Loading>
            </LoadingContainer>
            </>
            )}
      </>
    )
}

export default Projects
