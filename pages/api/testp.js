import db from '../../utils/db'

function createProduct(req, res) {
    return Promise.resolve(undefined);
}

function listProductsDDB(req, res) {
    // filter API requests by method
    if (req.method === 'GET') {
        // Allow a blog post to get its number of likes and views
        const params = {
            TableName: 'lands',
        };

        db.scan(params, function (err, data) {
            if (err) {
                console.log('Error', err);
            } else {
                // send the json response from the callback
                res.json(data.Item);
            }
        });
    }
}

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

