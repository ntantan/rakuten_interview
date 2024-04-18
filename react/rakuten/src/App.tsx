import React from 'react';
import './App.css';
import ProductTile from './ProductTile';
import Box from '@mui/material/Box';
import styled from 'styled-components';

const BoxAlign = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
`

function App() {
  return (
    <BoxAlign>
      <ProductTile />
    </BoxAlign>
  );
}

export default App;
