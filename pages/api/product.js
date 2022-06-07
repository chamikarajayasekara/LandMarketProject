
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
        return  createProduct(req,res);
    }else if(req.method === 'GET'){
        // List Products
        // return listProducts(req, res);
        return listProductsDDB(req, res);
    }else{
        res.status(405).send("METHOD_NOT_ALLOWED");
    }
}


async function listProducts(req, res) {
    let vehicle = req.query.vehicle;
    let modal = req.query.model;
    let accessory = req.query.category;
    let { db } = await databaseConnection();

    let params;
    if (!vehicle && !modal && !accessory){
        let data = await db
            .collection('products')
            .find().toArray()
        res.status(200).send({data:data});
    }else if (vehicle && !modal && !accessory){
        let data = await db
            .collection('products')
            .find({ vehicle: vehicle }).toArray()
        res.status(200).send({data:data});
    }else if(vehicle && modal && !accessory){
        let data = await db
            .collection('products')
            .find({ "vehicle": vehicle , "model": modal}).toArray()
        res.status(200).send({data:data});
    }
    else{
        let data = await db
            .collection('products')
            .find({ vehicle: vehicle , model: modal, category: accessory}).toArray()
        res.status(200).send({data:data});
    }
}

function createProduct(req, res) {
    return Promise.resolve(undefined);
}

function updateProducts(req, res) {
    return Promise.resolve(undefined);
}

function deleteProduct(req, res) {
    return Promise.resolve(undefined);
}

export const config = {
    api: {
        externalResolver: true
    }
}


async function listProductsDDB(req, res) {
    let vehicle = req.query.vehicle;
    let modal = req.query.modal;
    let accessory = req.query.category;
    // let params;

    console.log(req.query)
    let params = {
        TableName:"Vehicle",
        Key:{
            "name":"Toyota"
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

    // if (!vehicle && !modal && !accessory){
    //     params = {
    //         TableName:"Products",
    //     };
    //
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
    // }else if (vehicle && !modal && !accessory){
    //     params = {
    //         TableName:"Products",
    //         KeyConditionExpression: "#vehicle = :vehicleValue",
    //         ExpressionAttributeNames: {
    //             "#vehicle": "vehicle"
    //         },
    //         ExpressionAttributeValues: {
    //             ":vehicleValue": vehicle,
    //         },
    //     };
    //     dynamodb.query(params, function (err, data) {
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
    // }else if(vehicle && modal && !accessory){
    //     params = {
    //         TableName:"Products",
    //         KeyConditionExpression: "#vehicle = :vehicleValue and #model = :modelValue",
    //         ExpressionAttributeNames: {
    //             "#vehicle": "vehicle",
    //             "#model": "model"
    //         },
    //         ExpressionAttributeValues: {
    //             ":vehicleValue": vehicle,
    //             ":modelValue":modal
    //         },
    //     };
    //     dynamodb.query(params, function (err, data) {
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
    // }
    // else{
    //     params = {
    //         TableName:"Products",
    //         KeyConditionExpression: "#vehicle = :vehicleValue and #model = :modelValue and #category = :categoryValue",
    //         ExpressionAttributeNames: {
    //             "#vehicle": "vehicle",
    //             "#model": "model",
    //             "#category":"category"
    //         },
    //         ExpressionAttributeValues: {
    //             ":vehicleValue": vehicle,
    //             ":modelValue":modal,
    //             ":categoryValue": accessory
    //         },
    //     };
    //     dynamodb.query(params, function (err, data) {
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
    // }




}