import styled from 'styled-components'
import {mobile} from "../responsive"
import { Link } from 'react-router-dom';
const Container=styled.div`
flex:1;
margin:3px;
height:70vh;
position: relative;
` 
const Image=styled.img`
height:100%;
object-fit: cover;
width:100%;

${mobile({height:"35vh"
})}`


const Title=styled.h1`
color: white;
margin-bottom: 20px;
`
const Description =styled.p``
const Info=styled.div`
position:absolute;
width: 100%;
height:100%;
top:0;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
`
const Button =styled.button`
padding:10px;
border:none;
background-color: white;
color:gray;
cursor:pointer;
font-weight: 600;

`
const CategoryItem = ({item,id}) => {
    console.log(item);
    console.log(item.img);
  return (
    
    <Container>
        
        <Image src={item.img}/>
        <Info>
            <Title>{item.title}</Title>
            <Description>{item.description}</Description>
            <Link to="/productlist"><Button>Buy Now</Button></Link>
            
        </Info>
    </Container>
  )
}

export default CategoryItem