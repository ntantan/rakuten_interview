import React from 'react';
import Box from '@mui/material/Box';
import styled from 'styled-components';
import { DataType } from './App';
import Link from '@mui/material/Link';

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

interface ProductTileProps {
    data?: DataType
}

function ProductTile ({
    data
}: ProductTileProps) {

    if (!data) {
        return null;
    }

    return (
        <ProductContainer>
            <ImageContainer>
                <Link href={data.href}>
                    <img 
                        src={data.image}
                        alt="product"
                        width={120}
                        height={120}
                    />
                </Link>
            </ImageContainer>

            <DescriptionContainer>
                <Box>
                    <Link href={data.href} underline="none">
                    <Brand>{data.brand}</Brand>
                    <Title>{data.title}</Title>
                    </Link>
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