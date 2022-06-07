import {databaseConnection} from "../../utils/dbConnect";
import axios from "axios";

export default async function handler(req, res) {
    // let { db } = await databaseConnection();
    // let data = await  db
    //     .collection('listingsAndReviews')
    //     .find({}).limit(20).toArray()

    try {
        let data = (await axios.get('https://jsonplaceholder.typicode.com/posts')).data;
        res.send({data: data})
    }catch (e) {
        console.log(e)
        throw Error("Product get failed")
    }
}