import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import MainSearch from '../../components/MainSearch/MainSearch.js';
import Header from '../../components/Header/Header.js';
import Footer from '../../components/Footer/Footer.js';
import './CreateRecipe.css';


export default class CreateRecipe extends React.Component {
    render() {
        return (
            <div className="createRecipe container-fluid ">
                <div className="row">
                    <div className="header">
                        <Header/>
                    </div>
                </div>
                <div className="row">
                    <div className="formBody">
                        <Footer />
                    </div>
                </div>
            </div>
            
        );
    }

}


