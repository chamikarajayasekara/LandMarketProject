import {databaseConnection} from "../../utils/dbConnect";

export default async function handler(req, res) {
    if(req.method === 'POST'){
        // Create Product
        return  createProduct(req,res);
    }else if(req.method === 'GET'){
        // List Products
        return listProducts(req, res);
    }else{
        res.status(405).send("METHOD_NOT_ALLOWED");
    }
}


async function listProducts(req, res) {
    let { db } = await databaseConnection();

    let data = await db
        .collection('Universal_categories')
        .find().toArray()
    res.status(200).send({data:data});

}

function createProduct(req, res) {
    return Promise.resolve(undefined);
}