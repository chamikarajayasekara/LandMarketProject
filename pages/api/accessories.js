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
        return  createProductAccessories(req,res);
    } else if(req.method === 'GET'){
        // List Products
        return listProductAccessories(req, res);
    }else{
        res.status(405).send("METHOD_NOT_ALLOWED");
    }


}

async function  createProductAccessories(req, res) {
    return Promise.resolve(undefined);
}

async  function listProductAccessories(req, res) {

    let vehicle = req.query.vehicle;
    let modal = req.query.model;

    let { db } = await databaseConnection();
    let data = await db
        .collection('product_categories')
        .find({ vehicle: vehicle, model : modal}).toArray()
    res.status(200).send({data:data});
    // db.close();
    //
    // if(vehicle !== null && modal !== null){
    //     console.log("sssssssss")
    //     let params = {
    //         TableName:"Product_Accessories",
    //     };
    //     dynamodb.scan(params, function (err, data) {
    //         if (err)
    //         {
    //             res.statusCode = 500;
    //             res.json({error: 'Could not load items: ' + err});
    //         }
    //         else
    //         {
    //             res.status(200).send({data:data.Items});
    //         }
    //     })
    // }else{
    //     res.status(200).send({data:"data loading"});
    // }
}



export const config = {
    api: {
        externalResolver: true
    }
}