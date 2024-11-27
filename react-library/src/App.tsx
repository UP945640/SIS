import React, { useState } from 'react';
import './App.css';
import ProductModel from './models/ProductModel';
import { ProductListForm } from './components/ProductListForm';

function App() {

    return (
        <div className="App">
            <h1>SIS Project</h1>
            <ProductListForm />
        </div>
    );
}

export default App;
