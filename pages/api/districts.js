import {databaseConnection} from "../../utils/dbConnect";

let AWS = require("aws-sdk");

// Set the region
AWS.config.update({
    region: 'ap-southeast-1',
    accessKeyId: "AKIASJCPLGPHZZ2NCMUV",
    secretAccessKey: "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"
});

let dynamodb = new AWS.DynamoDB.DocumentClient();

export default async function handler(req, res) {
    if(req.method === 'POST'){
        // Create Product
        return  createDistricts(req,res);
    } else if(req.method === 'GET'){
        // List Products
        return listDistricts(req, res);
    }else{
        res.status(405).send("METHOD_NOT_ALLOWED");
    }


}

async function  createDistricts(req, res) {
    return Promise.resolve(undefined);
}

async  function listDistricts(req, res) {
    let { db } = await databaseConnection();
    let data = await db
        .collection('Districts')
        .find({}).toArray()
    res.status(200).send({data:data});
    // db.close();
    // let params = {
    //     TableName:"Vehicle",
    // };
    // dynamodb.scan(params, function (err, data) {
    //     if (err)
    //     {
    //         res.statusCode = 500;
    //         res.json({error: 'Could not load items: ' + err});
    //     }
    //     else
    //     {
    //         res.status(200).send({data:data.Items});
    //     }
    // })
}


export const config = {
    api: {
        externalResolver: true
    }
}