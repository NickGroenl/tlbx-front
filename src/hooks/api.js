import axios from "axios";

const url = 'https://tlbx-backend.herokuapp.com/v1/';
const getFileByName = async (name) => {
    return await axios.post(url + 'files/data/select/', {filename: name})
    .then(function(response) {
        return response?.data;
    }).catch(error => error)
    
};

const getFiles = async () => {
    return await axios.get(url + 'files/data')
    .then(function(response) {
        console.log(response)
        return response?.data?.files;
    })
    .catch(error => error)
};

export {getFileByName, getFiles};