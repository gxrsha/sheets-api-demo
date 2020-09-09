import axios from 'axios';


// Calling sheet best api

function getSheetData() {
   return axios.get('https://sheet.best/api/sheets/a02bdfb9-8e0e-4740-8a20-480fdd406bd0')
    .then(function (response) {
        // let sheetData = [];
        console.log('response.data: ', response.data);
        return response.data;
    })
    .catch(function (error) {
        console.log('error: ', error);
    });
    
}

function insertRow(data) {
    return axios.post('https://sheet.best/api/sheets/a02bdfb9-8e0e-4740-8a20-480fdd406bd0', {
        Network: data.Network,
        Pageviews: data.Pageviews
    })
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });
}




export { getSheetData, insertRow };
