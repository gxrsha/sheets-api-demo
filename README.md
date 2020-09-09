
# Google Sheets API demo with Express

Demo project using Express to posting to a google sheet

## Usage

Link to the Google Sheet where you can see the data or manually add data:
https://docs.google.com/spreadsheets/d/1rSknNRxHVSAYb6p_cKyZwdenYKBy362k8P5FhM8JXtA/edit#gid=0

Using Sheet.best to use their API methods:
https://sheet.best/


There are 2 paths you can play with 
```
GET /sheet
```
```
POST /sheet
```
```
Sample of body to send on POST request
[ {
    Network: 'NETWORK_NAME',
    Pageviews: 473848
}]
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)
