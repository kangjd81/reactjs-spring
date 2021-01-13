import axios from 'axios';

const NODE_API_BASE_URL = "http://localhost:8080/api/v1/employees";

class NodeService {

    getNodes(){
        return axios.get(NODE_API_BASE_URL);
    }

    createNode(node){
        return axios.post(NODE_API_BASE_URL, node);
    }

    getNodeById(nodeId){
        return axios.get(NODE_API_BASE_URL + '/' + nodeId);
    }

    updateNode(node, nodeId){
        return axios.put(NODE_API_BASE_URL + '/' + nodeId, node);
    }

    deleteNode(nodeId){
        return axios.delete(NODE_API_BASE_URL + '/' + nodeId);
    }

    getK8sNodeList(){
        return axios.get("http://localhost:8080/api/v1" + '/nodeList');
    }

}

export default new NodeService()