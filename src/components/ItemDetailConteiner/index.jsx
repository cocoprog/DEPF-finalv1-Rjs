import { useEffect, useState } from "react"
import {data} from '../Data/index';
import ItemDetail from "../ItemDetail";

export function ItemDetailConteiner (){

    const [productList, setProductList] = useState([])

    useEffect(()=>{
        getProducts.then((response)=>{
            setProductList(response);
        })
        .catch(error => console.log(error));
    },[]);
    
    const getProducts = new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve([data.find(zapato => zapato.id === 1)])
        }, 2000)
      })
    
    return <>
            <ItemDetail lista={productList}/>
           </>
}
