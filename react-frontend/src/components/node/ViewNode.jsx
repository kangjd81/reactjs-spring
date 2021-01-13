import React, { Component } from 'react'
import NodeService from '../../services/NodeService'

class ViewNode extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            node: {}
        }
    }

    componentDidMount(){
        NodeService.getNodeById(this.state.id).then(res => {
            this.setState({node: res.data});
        })
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> View Node Details</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label> Node First Name: </label>
                            <div> { this.state.node.firstName }</div>
                        </div>
                        <div className = "row">
                            <label> Node Last Name: </label>
                            <div> { this.state.node.lastName }</div>
                        </div>
                        <div className = "row">
                            <label> Node Email ID: </label>
                            <div> { this.state.node.emailId }</div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default ViewNode
