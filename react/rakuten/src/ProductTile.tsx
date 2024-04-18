import React from 'react';
import Box from '@mui/material/Box';
import styled from 'styled-components';

interface DataType {
    brand: string;
    href: string;
    title: string;
    newPrice: string;
    usedPrice: string;
    image: string;
}

const fetchData = (): DataType => {
    return {
        brand: "Apple",
        href: "/mfp/9623007/apple-iphone-15?pid=11517874360",
        title: "Apple iPhone 11 128 Go Double SIM Noir Sidéral",
        newPrice: "754 €",
        usedPrice: "720,99 €",
        image: "https://fr.shopping.rakuten.com/photo/4075345048_ML_NOPAD.jpg"
    }
}

const ProductContainer = styled(Box)`
    display: flex;
    width: 343px;
    gap: 16px;
    border: 2px solid #E5E5E5;
    border-radius: 8px;
    padding-top: 16px;
    padding-bottom: 16px;
`

const DescriptionContainer = styled(Box)`
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-right: 16px;
`
const ImageContainer = styled(Box)`
    margin-left: 16px;
`

const Brand = styled.p`
    font-size: 12px;
    color: #696969;
    font-weight: 650;
    margin: 0;
`

const Title = styled.p`
    font-size: 14px;
    color: #333;
    font-weight: bold;
    margin: 0;
`

const NewPriceContainer = styled.div`
    display: flex;
    color: #BF0000;
    font-weight: 700;
`
const NewPrice = styled.span`
    font-size: 20px;
`

const NewLabel = styled.span`
    margin-left: 4px;
    font-size: 14px;
    display: flex;
    align-self: flex-end;
`

const UsedPriceContainer = styled.div`
    display: flex;
    color: #333;
`

const UsedLabel = styled.span`
    font-size: 14px;
    display: flex;
    align-self: flex-end;
    font-weight: 600;
`
const UsedPrice = styled.span`
    font-size: 20px;
    margin-left: 4px;
    font-weight: 700;
`

function ProductTile() {
    const data = fetchData();

    if (!data) {
        return null;
    }

    return (
        <ProductContainer>
            <ImageContainer>
                <img src={data.image} alt="product" width={120} height={120}/>
            </ImageContainer>

            <DescriptionContainer>
                <Box>
                    <Brand>{data.brand}</Brand>
                    <Title>{data.title}</Title>
                </Box>

                <Box>
                    <NewPriceContainer>
                        <NewPrice>{data.newPrice}</NewPrice>
                        <NewLabel>Neuf</NewLabel>
                    </NewPriceContainer>
                    <UsedPriceContainer>
                        <UsedLabel>Occasion dès</UsedLabel>
                        <UsedPrice>{data.usedPrice}</UsedPrice>
                    </UsedPriceContainer>
                </Box>
            </DescriptionContainer>
        </ProductContainer>
    );
}

export default ProductTile;