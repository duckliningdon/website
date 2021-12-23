import React from 'react'
import { FooterSection, FooterText, FooterLink, FooterList } from './FooterElements';
import { AiFillMail, AiFillLinkedin } from 'react-icons/ai'


function Footer() {
    return (
        <FooterSection>
            <FooterText>© Samuel Swedberg 2021</FooterText>
            <FooterList>
                <FooterLink href='mailto:samuel@samuelswedberg.com' target="_blank"><AiFillMail/></FooterLink>
                <FooterLink href='https://www.google.com' target="_blank"><AiFillLinkedin/></FooterLink>
            </FooterList>
        </FooterSection>
    )
}

export default Footer
