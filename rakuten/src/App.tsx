import React from 'react';
import './App.css';
import ProductTile from './ProductTile';
import Box from '@mui/material/Box';
import styled from 'styled-components';

export interface DataType {
  brand: string;
  href: string;
  title: string;
  newPrice: string;
  usedPrice: string;
  image: string;
}

const data: DataType = {
      brand: "Apple",
      href: "/mfp/9623007/apple-iphone-15?pid=11517874360",
      title: "Apple iPhone 11 128 Go Double SIM Noir Sidéral",
      newPrice: "754 €",
      usedPrice: "720,99 €",
      image: "https://fr.shopping.rakuten.com/photo/4075345048_ML_NOPAD.jpg"
}

const BoxAlign = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
`

function App() {
  return (
    <BoxAlign>
      <ProductTile data={data}/>
    </BoxAlign>
  );
}

export default App;
