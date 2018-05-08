import React, { Component } from 'react';
import ReactModal from 'react-modal';
require('../styles/form_modal.css');

export default class FormModal extends Component {

    constructor(props){
        super(props);
        this.state = {
            showModal: false
        };

        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
    }

    handleOpenModal () {
        this.setState({ showModal: true });
      }
      
      handleCloseModal () {
        this.setState({ showModal: false });
      }


    render() {
        return (
                <div>
                    <button onClick={this.handleOpenModal}>Trigger Modal</button>
                        <ReactModal 
                            isOpen={this.state.showModal}
                            contentLabel="Minimal Modal Example"
                        >
                            <button onClick={this.handleCloseModal}>Close Modal</button>
                        </ReactModal>
                </div>
        );
    }
  }