import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
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
                    <div className="createRecipeContent">
                        <div className="row form">
                            <Form>
                                <FormGroup>
                                    <Label for="recipeTitle">Recipe Title</Label>
                                    <Input type="textarea" name="text" id="recipeTitle"></Input>
                                </FormGroup>
                            </Form>
                        </div>
                        <div className="row footer">
                            <Footer />
                        </div>
                    </div>
                </div>
            </div>
            
        );
    }

}


