import React from 'react';
import MenuPF from './MenuPF'
import BorderProFile from './BorderProFile';
import Footer from '../home/Footer';
import BorderProFilePW from './BorderProFilePW';
function BorderAll() {
    return (
        <div class="container">
            <div class="row">
                <MenuPF/>
                <BorderProFilePW/>
          
            </div>
        </div>
    );
}

export default BorderAll;
