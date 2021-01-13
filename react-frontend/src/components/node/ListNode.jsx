import React, { Component } from 'react'
import NodeService from '../../services/NodeService'
import { Map, List } from 'immutable';

class ListNode extends Component {
    constructor(props) {
        super(props)
        console.log("ListNode constructor");
        this.state = {
                nodes: List()
        }
        this.addNode = this.addNode.bind(this);
        this.editNode = this.editNode.bind(this);
        this.deleteNode = this.deleteNode.bind(this);
    }

    deleteNode(id){
        NodeService.deleteNode(id).then(res => {
            this.setState({nodes: this.state.nodes.filter(node => node.id !== id)});
        });
    }
    viewNode(id){
        this.props.history.push(`/view-node/${id}`);
    }
    editNode(id){
        this.props.history.push(`/add-node/${id}`);
    }

    componentDidMount(){
        NodeService.getNodes().then((res) => {
            this.setState({ nodes: res.data});
        });
    }

    addNode(){
        this.props.history.push('/add-node/_add');
    }

    render() {
        return (
            <div>
                 <h2 className="text-center">Node List</h2>
                 <div className = "row">
                    <button className="btn btn-primary" onClick={this.addNode}> Add Node</button>
                 </div>
                 <br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th> Node First Name</th>
                                    <th> Node Last Name</th>
                                    <th> Node Email Id</th>
                                    <th> Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.nodes.map(
                                        node =>
                                        <tr key = {node.id}>
                                             <td> {node.firstName} </td>
                                             <td> {node.lastName}</td>
                                             <td> {node.emailId}</td>
                                             <td>
                                                 <button onClick={ () => this.editNode(node.id)} className="btn btn-info">Update </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deleteNode(node.id)} className="btn btn-danger">Delete </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.viewNode(node.id)} className="btn btn-info">View </button>
                                             </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>

                 </div>


            </div>
        )
    }
}

export default ListNode
