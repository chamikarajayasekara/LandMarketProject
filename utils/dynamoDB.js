 let AWS = require("aws-sdk");

// Set the region
AWS.config.update({
    region: 'ap-southeast-1',
    accessKeyId: "AKIASJCPLGPHZZ2NCMUV",
    secretAccessKey: "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"
});

var dynamodb = new AWS.DynamoDB.DocumentClient();


export default function fetchData (req, res)  {
    let params = {
        TableName:"Products",
        Key:{
            "vehicle":"Toyota",
            "category":"Spoiler",
            "model":"Vitz"
        }
    };

    dynamodb.query(params, function (err, data) {
        if (err){
            res.statusCode = 500;
            res.json({error: 'Could not load items: ' + err});
        }else {
            console.log(data)
            res.status(200).send({data:data});
        }
    })
}