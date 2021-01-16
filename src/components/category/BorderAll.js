import React from 'react';
import MenuCT from './MenuCT'
import BorderProduct from './BorderProduct';
import Footer from '../home/Footer';
function BorderAll() {
    return (
        <div class="container">
            <div class="row">
                <MenuCT/>
                <BorderProduct/>
          
            </div>
        </div>
    );
}

export default BorderAll;
