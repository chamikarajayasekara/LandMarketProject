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
        return  createProductModals(req,res);
    } else if(req.method === 'GET'){
        // List Products
        return listProductModals(req, res);
    }else{
        res.status(405).send("METHOD_NOT_ALLOWED");
    }


}

async function  createProductModals(req, res) {
    return Promise.resolve(undefined);
}

async  function listProductModals(req, res) {

    let vehicle = req.query.vehicle;
    let { db } = await databaseConnection();
    let data = await db
        .collection('Vehicle_Brand')
        .find({ vehicle: vehicle }).toArray()
    res.status(200).send({data:data});


    // let params = {
    //     TableName:"Modal",
    //     KeyConditionExpression: "#vehicle = :vehicleValue",
    //     ExpressionAttributeNames: {
    //         "#vehicle": "vehicle"
    //     },
    //     ExpressionAttributeValues: {
    //         ":vehicleValue": vehicle,
    //
    //     },
    // };
    // dynamodb.query(params, function (err, data) {
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