import React from 'react'
import styled from 'styled-components'
import SearchIcon from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import {mobile, tablet} from "../responsive"
import { Link } from 'react-router-dom';
const Container=styled.div`

height:60px;

${mobile({height:"50px",
})}
${tablet({height:"50px",
})}


`
const Wrapper=styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    ${mobile(`padding:"10px 0px"
        
        
        `
    )}
    ${tablet(`padding:"10px 0px"
        
        
        `
    )}
`
const Left=styled.div`
flex: 0.5;
display:flex;
align-items: center;
justify-content: start;
${tablet({display:"none"})}

`
const Language =styled.span`
    font-size: 14px  ;
    cursor:pointer;
    ${mobile({ display: "none"})}
    ${tablet({ display: "none"})}
`
const Center=styled.div`
flex:3;
text-align:center;
`
const Right=styled.div`
flex:2;
display: flex;
align-items: center;
justify-content: flex-end;

${mobile({flex:2,justifyContent:"center"})}
${tablet({flex:3,justifyContent:"center"})}
`


const MenuItem=styled.div`
font-size:14px;
cursor: pointer;
margin-left:25px;
text-transform: uppercase;
${mobile({fontSize:"12px",marginLeft:"10px"})}



`

const SearchContainer =styled.div`
border:0.5px solid lightgray;
display: flex;
align-items: center;
margin-left:25px;
padding:5px;


`
const Input=styled.input`
border:none;
outline: none;
${mobile({ width: "50px" })}
`
const Logo=styled.h1`
    font-weight:bold;
    ${mobile({fontSize:"20px"})}
`
const Navbar = () => {
  return (
    <Container>
        <Wrapper>
          <Left>
          
        
          <Language>
          EN
          </Language>
          <SearchContainer>
         <Input/>
          <SearchIcon style={{color:"gray",fontSize:16}}/>
          </SearchContainer>

          </Left>
          <Center>
          <Logo>H&S APPAREL</Logo>
          </Center>
          <Right>

          <Link to="/register"><MenuItem Link to="/register">Register</MenuItem></Link>
          <Link to="/login"><MenuItem>Sign in</MenuItem></Link>
          <Link to="/cart">
          <MenuItem>
          <Badge badgeContent={1} color="secondary">
          <ShoppingCartOutlinedIcon/>
</Badge>
          </MenuItem></Link>
        
          </Right>
          </Wrapper>
    </Container>
  )
}

export default Navbar