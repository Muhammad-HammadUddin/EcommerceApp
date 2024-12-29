import React from 'react'
import Announcement from '../components/Announcement'
import Navbar from '../components/Navbar'
import styled from 'styled-components'
import Footer from '../components/Footer'
import {mobile, tablet} from "../responsive"

import { AddOutlined, RemoveOutlined } from '@mui/icons-material'
import { display, height } from '@mui/system'


const Container=styled.div`
position: relative;
`

const Info=styled.div`
flex:3
`
const Summary =styled.div`

flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
  position: sticky;
  top: 10px;
  z-index: 2; /* Make sure it stays above other content */
  
  /* Ensure responsiveness */
  ${mobile({ flex: "2", marginLeft: "20px" })}
  ${tablet({
    flex: "2",
    marginLeft: "20px",
    height: "auto",
  })}





`

const Wrapper=styled.div`
padding:20px;
min-height: 100vh;
`
const Title=styled.h1`
font-weight: 300;
text-align: center;
`
const TopButton=styled.button`
padding:10px;
font-weight: 600;
cursor:pointer;
border:${props=>props.type==="filled" && 'none'};
background-color:${props=>props.type==="filled" ? 'black' :'transparent'};
color:${props=>props.type==="filled" && 'white'}
`
const Bottom=styled.div`
display:flex;
justify-content:space-between;
position: relative;

${mobile({justifyContent:"space-between"
})}
${tablet({justifyContent:"space-between"
})}
`
const Top = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
padding:20px;
${mobile({display:"none"
})}
${tablet({display:"none"
})}
`
const TopTexts=styled.div``
const TopText=styled.span`
text-decoration: underline;
cursor:pointer;
margin:0px 10px;
`
const Product=styled.div `
display: flex;
justify-content: space-between;

`
const ProductDetail=styled.div `flex:2;
display:flex;
`
const Image=styled.img `width:200px
${mobile({width:"100px"
})}
${tablet({width:"100px"
})}
`
const Details=styled.div `
padding:20px;
display:flex;
flex-direction: column;
justify-content: space-around;
${mobile({width:"20px",
display: "none"
})}
${tablet({width:"20px",
display:"none"
})}
`
const ProductName=styled.span ``
const ProductId=styled.span ``
const ProductColor=styled.div `
width:20px;
height:20px;
border-radius: 50%;
background-color:${props=>props.color};
`
const ProductSize=styled.div ``
const PriceDetail=styled.div`
flex:1;
display:flex;
flex-direction: column;
align-items: center;
justify-content: center;

`
const ProductAmountContainer=styled.div`
display: flex;
align-items: center;
margin-bottom: 20px;
`
const ProductAmount=styled.div`
font-size: 24px;
margin:5px;
${mobile({fontSize:"20px"
})}
${tablet({fontSize:"20px"
})}
`
const ProductPrice=styled.div`
font-size: 30px;
font-weight: 200;
${mobile({fontSize:"20px"
})}
${tablet({fontSize:"20px"
})}
`
const SummaryTitle=styled.h1`
font-weight: 200;
`
const SummaryItem=styled.div`
margin:30px 0px;
display: flex;
justify-content: space-between;

`
const SummaryItemText=styled.span`
font-weight: ${(props) => props.type === "total" && "bolder"};
font-size: ${(props) => props.type === "total" && "24px"};`
const SummaryItemPrice=styled.span``
const SummaryButton=styled.button`
padding:10px;
width: 100%;
background-color: black;
border:none;
color:white;
font-weight: 600;
`

const Cart = () => {
  return (
    <Container>
        <Navbar/>
        <Announcement/>
        <Wrapper>
            <Title>YOUR BAG</Title>
            <Top>
                <TopButton>CONTINUE SHOPPING</TopButton>
                <TopTexts>
                    <TopText>Shopping Bag (2)</TopText>
                    <TopText>Your Wishlist (0)</TopText>
                </TopTexts>
                <TopButton type="filled">CHECKOUT NOW</TopButton>
            </Top>
            <Bottom>
            <Info>
            <Product>
            <ProductDetail>
                <Image src="https://i.pinimg.com/originals/2d/af/f8/2daff8e0823e51dd752704a47d5b795c.png" />
                <Details>
                  <ProductName>
                    <b>Product:</b> HAKURA T-SHIRT
                  </ProductName>
                  <ProductId>
                    <b>ID:</b> 93813718293
                  </ProductId>
                  <ProductColor color="gray" />
                  <ProductSize>
                    <b>Size:</b> M
                  </ProductSize>
                </Details>
              </ProductDetail>
            <PriceDetail>
            <ProductAmountContainer>
            <AddOutlined/>
            <ProductAmount>2</ProductAmount>
            <RemoveOutlined/>
            </ProductAmountContainer>
            <ProductPrice>$ 60.00</ProductPrice>
            </PriceDetail>
            </Product>
              <hr></hr>

            <Product>
            <ProductDetail>
                <Image src="https://i.pinimg.com/originals/2d/af/f8/2daff8e0823e51dd752704a47d5b795c.png" />
                <Details>
                  <ProductName>
                    <b>Product:</b> HAKURA T-SHIRT
                  </ProductName>
                  <ProductId>
                    <b>ID:</b> 93813718293
                  </ProductId>
                  <ProductColor color="gray" />
                  <ProductSize>
                    <b>Size:</b> M
                  </ProductSize>
                </Details>
              </ProductDetail>
            <PriceDetail>
            <ProductAmountContainer>
            <AddOutlined/>
            <ProductAmount>2</ProductAmount>
            <RemoveOutlined/>
            </ProductAmountContainer>
            <ProductPrice>$ 60.00</ProductPrice>
            </PriceDetail>
            </Product>
            </Info>
            <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
            <SummaryItemText>Subtotal</SummaryItemText>
            <SummaryItemPrice>$80</SummaryItemPrice>
            </SummaryItem>

           
            <SummaryItem>
            <SummaryItemText>Estimated Shipping Cost</SummaryItemText>
            <SummaryItemPrice>$6.0</SummaryItemPrice>
            </SummaryItem>

           
            <SummaryItem>
            <SummaryItemText>Shipping Discount</SummaryItemText>
            <SummaryItemPrice>$-5.90</SummaryItemPrice>
            </SummaryItem>

            <SummaryItem>
            <SummaryItemText type= "total">Total</SummaryItemText>
            <SummaryItemPrice>$80</SummaryItemPrice>
            </SummaryItem>

            <SummaryButton>CheckOut Now</SummaryButton>
            </Summary>
            
            </Bottom>
        </Wrapper>
        
        <Footer/>
    </Container>
  )
}

export default Cart