import {NavLink as Link} from "react-router-dom";
import React from "react";

const Product = ({product}) => {
    // console.log('product:', product);
    return (
        <tr className="product-row">
            <td>
                {product.id}
            </td>
            <td>
                {product.name}
            </td>
            <td>
                {product.category.name}
            </td>
            <td>
                {product.created}
            </td>
            <td>
                {product.sum} руб.
            </td>
            <td>
                <Link to={`/products/delete/${product.id}`} className="nav-link">delete</Link>
            </td>
        </tr>
    )
}

const ProductList = ({products}) => {
    // console.log('products:', products);

    return (
        <table className={"table product-list"}>
            <thead>
            <tr>
                <th>ID</th>
                <th>Название</th>
                <th>категория</th>
                <th>Создано</th>
                <th>Сумма</th>
                <th>actions</th>
            </tr>
            </thead>
            <tbody>
            {/*{products.map(product)}*/}
            {products.map((product) => <Product key={product.name} product={product}/>)}
            </tbody>
        </table>
    )
}

export default ProductList;
