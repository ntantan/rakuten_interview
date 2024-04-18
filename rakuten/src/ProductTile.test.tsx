import React from 'react';
import { render, screen } from '@testing-library/react';
import { DataType } from './App';
import ProductTile from './ProductTile';

const mockData: DataType = {
    brand: "Apple",
    href: "/mfp/9623007/apple-iphone-15?pid=11517874360",
    title: "Apple iPhone 11 128 Go Double SIM Noir Sidéral",
    newPrice: "754 €",
    usedPrice: "720,99 €",
    image: "https://fr.shopping.rakuten.com/photo/4075345048_ML_NOPAD.jpg"
}

test('renders', () => {
    render(<ProductTile data={mockData}/>);

    const brandElement = screen.getByText(mockData.brand);
    const titleElement = screen.getByText(mockData.title);
    const newPriceElement = screen.getByText(mockData.newPrice);
    const usedPriceElement = screen.getByText(mockData.usedPrice);

    expect(brandElement).toBeInTheDocument();
    expect(titleElement).toBeInTheDocument();
    expect(newPriceElement).toBeInTheDocument();
    expect(usedPriceElement).toBeInTheDocument();
});

test('do not renders if missing data', () => {
    render(<ProductTile />);

    const brandElement = screen.queryByText(mockData.brand);
    const titleElement = screen.queryByText(mockData.title);
    const newPriceElement = screen.queryByText(mockData.newPrice);
    const usedPriceElement = screen.queryByText(mockData.usedPrice);

    expect(brandElement).not.toBeInTheDocument();
    expect(titleElement).not.toBeInTheDocument();
    expect(newPriceElement).not.toBeInTheDocument();
    expect(usedPriceElement).not.toBeInTheDocument();
});