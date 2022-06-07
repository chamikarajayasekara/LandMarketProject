import {collection, getDocs} from "firebase/firestore";
import {db} from "../../firebase";

export async function getProducts() {
    try {
        const querySnapshot = await getDocs(collection(db, "products"));
        let data =[]
        querySnapshot.forEach((doc) => {
            data.push(doc.data());
        });
        return data;
    }catch (e) {
        console.log(e)
    }


}