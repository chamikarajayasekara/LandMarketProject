import {useEffect, useState} from "react";
import {db} from "../firebase";
import { getFirestore,onSnapshot,  collection, getDocs, query,orderBy  } from "firebase/firestore";

const TodoList = () =>{
     const [todos, setTodos] = useState();
    async function todoF() {
        const querySnapshot = await getDocs(collection(db, "products"));
        querySnapshot.forEach((doc) => {
            console.log(doc.data());
        });
    }
    useEffect(()=>{
        todoF().then(r => console.log(r));
    },[])



    return (
        <div>
            hii
        </div>
    )
}
export  default  TodoList