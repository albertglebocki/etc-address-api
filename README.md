# Ethereum Classic Address Generator 🔐
### What is Ethereum Classic?
**Ethereum Classic** is a decentralized computing platform that executes **smart contracts**. Applications are ran exactly as programmed without the possibility of **censorship**, **downtime**, or **third-party interference**.

**Ethereum Classic** is a distributed network consisting of a **blockchain ledger**, native cryptocurrency (**ETC**) and robust ecosystem of on-chain applications and services.<br><br>

### What this API can do?
This API on request generates JSON object with:
- **ETC** (Ethereum Classic) **Address**
- **Key Pair** (Public And Private Key) **of this Address**<br><br>

### Usage
Request URL **`https://etc-api.herokuapp.com`**.<br>
On response you will get a JSON object containing 3 keys (`address`, `publickey`, `privatekey`), as well as their values.<br>
Then you can fetch this data on your own and use it in your project.<br><br>

### Example Code
##### main.js
```javascript
var express = require('express'); 
var request = require('request');
var app = express();

let url = "https://etc-api.herokuapp.com"; // Requested URL

app.get('/', function(req, res){

    request({
        url: url,
        json: true
    }, 

    function (error, response, body) {
    
        if (!error && response.statusCode === 200) {
            res.send(body); // Print whole JSON response

            // To get specific data use:
            //     res.send(body[key]);
            // where key is 'address', 'publickey' or 'privatekey'
        }
    })
});

app.listen(process.env.PORT || 3000); // App listening on port 3000
```

### Npm Dependencies
&bull; express<br>
&bull; request

### Example Response
```json
{ 
"address":"0x1c8339d840a14a01f78b256bf50ff35765153f36",
"publickey":"0xb79c1886c075ed84a1051fc32c74c290a0cea2cace90a658429534a7b25963adf08c2ff14e254247719b9013271ebf1a616e0afe3a8e9dcba1aee9c050fc5a07",
"privatekey":"a590906f38d320da1365655590f74727aa6d02a931dc4c20c65593ac42ec63fb"
}
```

##### As we can see, generated address is a valid Ethereum Network address
![](https://i.ibb.co/swxm5K4/test-addr.png)

###### Keep in mind that when an app isn't used by anyone for a longer period of time, it takes longer to get first response. After that, app should send response faster.
