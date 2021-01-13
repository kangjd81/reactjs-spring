import React, {Component} from 'react';
import {Button, Modal} from "react-bootstrap";


class Popup extends Component {
    constructor(props) {
        super(props);
        console.log("Popup constructor");
    }

    getSelData = () => {
        const listItems = this.props.data;
        const newItems = listItems.filter(item => {
            if (item.isSelected) {
                return true;
            }
        });
        return newItems;
    }

    handleClick = (selectedID) => {
        //debugger;
        const listItems = this.props.data;
        const newItems = listItems.forEach((item, index) => {
            if (index === selectedID) {
                item.isSelected = true;
            } else {
                item.isSelected = false;
            }
        });
        this.setState({ data: newItems });
    };


    render(){
        const {data} = this.props

        return (
            <div>
            <Modal size="lg" aria-labelledby="contained-modal-title-vcenter" centered show={this.props.show} animation={false} onHide={this.props.handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        {this.props.title}
                    </Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <h4>Centered Modal</h4>
                    <p>
                        {this.props.body}
                    </p>

                    <ul id="container" className="group-column">
                    {data.map((item,index) => (
                        <li key={item.node}
                            className={"list-item " + (item.isSelected ? "list-item-highlighted" : "list-item-normal")}
                            onClick={() => {this.handleClick(index);}}
                        >
                            ID: {item.node} | Name: {item.ip} | Address: {item.cpu} | {item.isSelected}
                        </li>
                    ))}
                    </ul>

                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={() => this.props.handleClose()}  >취소</Button>
                    <Button variant="primary" onClick={() => this.props.selData(this.getSelData())}  >선택</Button>
                </Modal.Footer>
            </Modal>
            </div>
        )
    }

}

export default Popup;
