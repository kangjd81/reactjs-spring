import React, { Component } from 'react'
import NodeService from '../../services/NodeService';
import Popup from "./Popup";

class CreateNode extends Component {
    constructor(props) {
        super(props)
        console.log("CreateNode constructor");
        this.state = {
            // step 2
            id: this.props.match.params.id,
            firstName: '',
            lastName: '',
            emailId: '',
            show: false,
            title:'Node List',
            body:'Kubernetes Node 연동',
            nodeData: []
        }
    }

    selData = (list) => {
        console.log("parent seldata,,,,")
        if(list.length > 0){
            list.map(item => {
                this.setState({
                    firstName: item.node,
                    lastName: item.ip,
                    emailId: item.cpu,
                    show: false
                })
            });
        }else{
            this.setState({show: false})
        }
    }

    handleClose = () => {
        this.setState({show: false})
    }

    handleShow = (e) => {
        // 페이지 리로딩 방지
        e.preventDefault();

        // 데이터 가져오기
        console.log("데이터 로드,,,,");
        NodeService.getK8sNodeList().then( (res) =>{
            this.setState({
                nodeData: res.data,
                show: true
            });
        });
    }

    // step 3
    componentDidMount(){
        // step 4
        if(this.state.id === '_add'){
            return
        }else{
            NodeService.getNodeById(this.state.id).then( (res) =>{
                let node = res.data;
                this.setState({firstName: node.firstName,
                    lastName: node.lastName,
                    emailId : node.emailId
                });
            });
        }        
    }
    saveOrUpdateNode = (e) => {
        e.preventDefault();
        let node = {firstName: this.state.firstName, lastName: this.state.lastName, emailId: this.state.emailId};
        console.log('node => ' + JSON.stringify(node));

        // step 5
        if(this.state.id === '_add'){
            NodeService.createNode(node).then(res =>{
                this.props.history.push('/nodes');
            });
        }else{
            NodeService.updateNode(node, this.state.id).then(res => {
                this.props.history.push('/nodes');
            });
        }
    }
    
    changeFirstNameHandler= (event) => {
        this.setState({firstName: event.target.value});
    }

    changeLastNameHandler= (event) => {
        this.setState({lastName: event.target.value});
    }

    changeEmailHandler= (event) => {
        this.setState({emailId: event.target.value});
    }

    cancel(){
        this.props.history.push('/nodes');
    }

    getTitle(){
        if(this.state.id === '_add'){
            return <h3 className="text-center">Add Node</h3>
        }else{
            return <h3 className="text-center">Update Node</h3>
        }
    }




    render() {
        console.log("CreateNode render()");
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                {
                                    this.getTitle()
                                }
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> First Name: </label>
                                            <input placeholder="First Name" name="firstName" className="form-control" disabled
                                                value={this.state.firstName} onChange={this.changeFirstNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Last Name: </label>
                                            <input placeholder="Last Name" name="lastName" className="form-control" 
                                                value={this.state.lastName} onChange={this.changeLastNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Email Id: </label>
                                            <input placeholder="Email Address" name="emailId" className="form-control" 
                                                value={this.state.emailId} onChange={this.changeEmailHandler}/>
                                        </div>

                                        <button className="btn btn-success" onClick={this.saveOrUpdateNode}>Save</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                        <button className="btn btn-info" onClick={this.handleShow} style={{marginLeft: "10px"}}>node</button>
                                    </form>
                                </div>
                            </div>
                        </div>


                   </div>

                <Popup
                    show={this.state.show}
                    title={this.state.title}
                    body={this.state.body}
                    data={this.state.nodeData}
                    handleClose={this.handleClose}
                    selData={this.selData}
                />



            </div>



        )
    }
}

export default CreateNode
