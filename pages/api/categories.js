import {databaseConnection} from "../../utils/dbConnect";

export default async function handler(req, res) {
    if(req.method === 'POST'){
        // Create Product
        return  createProductCategories(req,res);
    } else if(req.method === 'GET'){
        // List Products
        return listProductCategories(req, res);
    }else{
        res.status(405).send("METHOD_NOT_ALLOWED");
    }


}

async function  createProductCategories(req, res) {
    return Promise.resolve(undefined);
}

async  function listProductCategories(req, res) {
    let { db } = await databaseConnection();
    let data = await db
        .collection('product_categories')
        .find({}).toArray()
    res.status(200).send({data:data});
}
