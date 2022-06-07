import {databaseConnection} from "../../utils/dbConnect";

export default async function handler(req, res) {
    if(req.method === 'POST'){
        // Create Product
        return  createCities(req,res);
    } else if(req.method === 'GET'){
        // List Products
        return listCities(req, res);
    }else{
        res.status(405).send("METHOD_NOT_ALLOWED");
    }


}

async function  createCities(req, res) {
    return Promise.resolve(undefined);
}

async  function listCities(req, res) {
    let { db } = await databaseConnection();
    let data = await db
        .collection('Cities')
        .find({}).toArray()
    res.status(200).send({data:data});
}
