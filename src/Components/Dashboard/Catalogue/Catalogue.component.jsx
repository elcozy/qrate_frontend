import React, { Component } from "react";


// IMPORTING REACT ROUTER DOM

import catalogueData from './catalogueData';

import CatalogueCollection from './CatalogueCollection/CatalogueCollection.component';

import Button from '../artist/Button/Button.component';

import Input from '../artist/Input/Input.component';

import MainWrapper from "../Shared/MainWrapper";

import  Modal from "../artist/Modal/Modal.component";

import "./Catalogue.style.scss";

class Catalogue extends Component {
  constructor() {
    super();

    this.state = {
      catalogues: catalogueData,
      showModal: false,
    }
  }

  openModal = (e) => {
    // prevent scroll on body when modal is open
    const scrollY = document.documentElement.style.getPropertyValue('--scroll-y');
    document.body.style.position = 'fixed';
    document.body.style.width = '100vw';
    document.body.style.top = `-${scrollY}`; 

    e.preventDefault();

    this.setState({showModal: true})
  }

  closeModal = () => {
    //make body scrollable again
    const scrollY =document.body.style.top;
    document.body.style.position = '';
    document.body.style.width = '100%';
    document.body.style.top = '';

    window.scrollTo(0, parseInt(scrollY || '0') * -1);

    this.setState({showModal: false})
  }


  render() {

    const {catalogues} = this.state;

    //scroll Event Listener
    window.addEventListener('scroll', ()=> {
      document.documentElement.style.setProperty('--scroll-y', `${window.scrollY}px`);
    })

    return (
      <MainWrapper className="container-fluid">
        <div className='catalogue-page'>
          <h2 className='page-title'>My Catalogue</h2>
                
          <Button text='New Catalogue' click={this.openModal}/>

          <Modal show={this.state.showModal} close={this.closeModal}>
            <h5>New Catalogue</h5>

            <Input 
              placeholder='Untitled Catalogue'
              type='text'
            />

            <div className='buttons'>
              <Button text='CANCEL' cancel click={this.closeModal}/>
              <Button text='CREATE'/>
            </div>
          </Modal>

          {
            catalogues
            .map(catalogue => (
              <div className='catalogue' key={catalogue.id}> 
                <div className='heading'>
                  <h4>{catalogue.name}</h4>
                </div>

                <CatalogueCollection catalogue={catalogue}/>
              </div>
            ))
          }
        </div>
      </MainWrapper>
    );
  }
}

export default Catalogue;
