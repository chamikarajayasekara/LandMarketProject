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
    let id = req.query.id;
    let isProduct = req.query.isProduct;
    let { db } = await databaseConnection();

    if(isProduct){
        let data = await db
            .collection('products')
            .find({ id: id}).toArray()
        res.status(200).send({data:data});
    }else{
        let data = await db
            .collection('Universal_items')
            .find({ id: id}).toArray()
        res.status(200).send({data:data});
    }

}

function createProduct(req, res) {
    return Promise.resolve(undefined);
}