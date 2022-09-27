import Item from "../Item";

const ItemDetail = ({lista}) =>{
    return (
    <div>
        {
            lista.map((product)=> (
                <Item key={product.id} title={product.title} price={product.price} image={product.image} description={product.description}/>
            ))
        }        
    </div>
    );
};

export default ItemDetail;