import React, {useState} from 'react';
import {BsFillArrowUpSquareFill} from 'react-icons/bs';

import styled from 'styled-components';
  
export const Heading = styled.h1`
   text-align: center;
   color: green;
`;
  
export const Content = styled.div`
   overflow-y: scroll;
   height: 2500px;
`;
  
export const Button = styled.div`
   position: sticky; 
   width: 100%;
   bottom: 4rem;
   height: 20px;
   font-size: 3rem;
   z-index: 101;
   color: black;;
`;

const ScrollButton = () =>{

const [visible, setVisible] = useState(false)

const toggleVisible = () => {
	const scrolled = document.documentElement.scrollTop;
	if (scrolled > 600){
	setVisible(true)
	}
	else if (scrolled <= 600){
	setVisible(false)
	}
};

const scrollToTop = () =>{
	window.scrollTo({
	top: 0,
	behavior: 'smooth'
	});
};

window.addEventListener('scroll', toggleVisible);

return (
	<Button>
	<BsFillArrowUpSquareFill onClick={scrollToTop}
	style={{display: visible ? 'inline' : 'none', left: '1rem', position: 'relative', cursor: visible ? 'pointer' : 'auto'}} />
	</Button>
);
}

export default ScrollButton;
