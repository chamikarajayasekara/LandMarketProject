import {databaseConnection} from "../../utils/dbConnect";

export default async function handler(req, res) {
    if(req.method === 'POST'){
        // Create Product
        return  createHomes(req,res);
    } else if(req.method === 'GET'){
        // List Products
        return listHomes(req, res);
    }else{
        res.status(405).send("METHOD_NOT_ALLOWED");
    }


}

async function  createHomes(req, res) {
    return Promise.resolve(undefined);
}

async  function listHomes(req, res) {
    let values = req.query.values;

    let { db } = await databaseConnection();

    values = JSON.parse(values);
    console.log(values)
    let data = await db
        .collection('Houses')
        .find(values).toArray()
    res.status(200).send({data:data});

}
