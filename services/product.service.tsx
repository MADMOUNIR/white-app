import { Demo } from '../types/types';
import axios from 'axios';

const  url = 'https://localhost:7102/api/Product';
export const ProductService = {
    getProductsSmall() {
        return fetch('/demo/data/products-small.json', { headers: { 'Cache-Control': 'no-cache' } })
            .then((res) => res.json())
            .then((d) => d.data as Demo.Product[]);
    },

    getProducts() {
        return fetch('/demo/data/products.json', { headers: { 'Cache-Control': 'no-cache' } })
            .then((res) => res.json())
            .then((d) => d.data as Demo.Product[]);
    },

    getProductsWithOrdersSmall() {
        return fetch('/demo/data/products-orders-small.json', { headers: { 'Cache-Control': 'no-cache' } })
            .then((res) => res.json())
            .then((d) => d.data as Demo.Product[]);
    },

    
    getProductsFromDB()
    {
       // let url = 'https://localhost:7102/api/Product';
        return axios.get(url )
        .then(res => res.data)
        .catch(error => {
            console.log(error);
        }
        ) ;
    },
  
  
    //Ajouter un produit dans le server
   
     async AddProductToServer   (newProduct : Demo.Product) 
        {
        try {
                // console.log(newSite);
               
            const resp = await axios.post(url, newProduct );
            return 'OK';

        }
        catch (error)
        {
            console.log(error);
            return 'NOK';
        }


        },

         //Ajouter un produit dans le server
   
    async EditProductToServer   (newProduct : Demo.Product) 
     {
     try {   
            const resp = await axios.put(url, newProduct );
            return 'OK';
        }
     catch (error)
        {
             console.log(error);
            return 'NOK';
        }
     },

     //Delete 
     async DeleteProductToServer   (id_product : number |any) 
     {
     try {
        const urlDel =url + '/' + id_product.toString() ; 
       // console.log(urlDel);             
        const resp = await axios.delete(urlDel );
            return 'OK';
        }
     catch (error)
        {
             console.log(error);
            return 'NOK';
        }
     }
};
