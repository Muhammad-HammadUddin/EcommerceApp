import styled from "styled-components"
import Navbar from "../components/Navbar"
import Announcement from "../components/Announcement"
import NewsLetter from "../components/NewsLetter"
import Footer from "../components/Footer"
import { Add, AddBoxOutlined, AddOutlined, PlusOne, Remove } from "@mui/icons-material"
import {popularProducts} from "../data"
import { useParams } from "react-router-dom"
const Container=styled.div``
const Wrapper=styled.div`
padding:50px;
display:flex;`
const ImgContainer=styled.div`
flex: 1;`
const InfoContainer=styled.div`
flex: 1;
padding: 0px 50px;

`
const Image=styled.img`
width: 100%;
height: 90vh;
object-fit: cover;
`
const Title=styled.h1`
font-weight: 200;
`
const Desc=styled.p`
margin:20px 0px;
`
const Price=styled.span`
font-weight: 100;
font-size: 40px;
`
const FilterContainer=styled.div`
width: 50%;
display:flex;
justify-content: space-between;
margin:30px 0px;
`
const Filter=styled.div`
display: flex;
align-items: center;
`
const FilterTitle=styled.span`
font-size: 20px;
font-weight: 200;
`
const FilterColor=styled.div`
width: 20px;
height: 20px;
border-radius: 50%;
background-color: ${props=>props.color};
margin:0px 5px;
cursor:pointer
`


const FilterSize=styled.select`
margin-left: 10px;
padding: 5px;
`
const FilterSizeOption=styled.option``
const AddContainer=styled.div`
width: 50%;
display: flex;
align-items: center;
justify-content: space-between;
`

const AmountContainer=styled.div`
display: flex;
font-weight: 700;

align-items: center;
`
const Amount=styled.span`
width:30px;
height:30px;
border-radius: 10px;
border:1px solid teal;
display: flex;
justify-content: center;
align-items: center;
margin:0px 5px;


`
const Button = styled.button`
padding:15px;
border:2px solid teal;
background-color: white;
cursor:pointer;
font-weight: 500;

&:hover{
    background-color: #f8f4f4;
}
`

const Product = () => {
  const { productId } = useParams();
  console.log(productId)
  // Retrieve productId from the URL
  const productIndex = Number(productId) - 1; // Convert to a valid array index
  const product = popularProducts[productIndex];
  console.log(product)
  return (
    <Container>
        <Navbar/>
        <Announcement/>
        <Wrapper>
        <ImgContainer>
        <Image src={product.img}></Image>
        </ImgContainer>
        <InfoContainer>
            <Title>Product Title</Title>
            <Desc>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores vitae qui eum omnis vero asperiores velit, doloribus distinctio ut inventore!</Desc>
            <Price>$40</Price>
            <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              <FilterColor color="black" />
              <FilterColor color="darkblue" />
              <FilterColor color="gray" />
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize>
                <FilterSizeOption>XS</FilterSizeOption>
                <FilterSizeOption>S</FilterSizeOption>
                <FilterSizeOption>M</FilterSizeOption>
                <FilterSizeOption>L</FilterSizeOption>
                <FilterSizeOption>XL</FilterSizeOption>
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
          <AmountContainer>
          <Remove/>
          <Amount>2</Amount>
          <AddOutlined/>
          
          
          
          </AmountContainer>
          <Button>ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>
        </Wrapper>
        <NewsLetter/>
        <Footer/>
    </Container>
  )
}

export default Product