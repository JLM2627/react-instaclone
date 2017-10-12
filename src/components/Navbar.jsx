import React, { Component } from 'react';
import { FaInstagram, FaUser, FaHeartO, FaCompass, FaSearch } from 'react-icons/lib/fa';
import styled from 'styled-components';



const Nav = styled.div`
background-color: white;
display: flex;
justify-content: space-between;
align-items: center;
padding: 26px 5vw;
width: 90vw;
height: 25px;
border-bottom: 1px solid rgba(0,0,0,.0975)
;


p{
font-size: 1.7em;
font-family: 'Oleo Script',cursive;
margin: 0;
}
`
const searchContainer = styled.div`
background: #fafafa;
border: 1px solid #dbdbdb;
width: 25%;
padding: 7px;
border-radius: 3px;
color: #999;
}

input{
  border: none;
  font-weight: 300;
  background: transparent;
  text-align: center;
}`

const iconWrapper = styled.div`
  size: 28;
  viewBox: "0 0 40 40",
  display: flex;
  justify-content: space-around;
  

`;

class Navbar extends Component{
  render(){
    return (
      <Nav>
        <p><FaInstagram /> | Instaclone</p>
       <searchContainer> <FaSearch/><input type="text" placeholder="Search"/></searchContainer>
        <div>
          <iconWrapper>
          <FaCompass />
          <FaHeartO />
          <FaUser />
          </iconWrapper>
        </div>
      </Nav>
    );
  }
}

export default Navbar