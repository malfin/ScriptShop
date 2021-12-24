import React, {Fragment, useEffect} from "react";
import Loader from "./Loader";
import axios from "axios";

const API_URL = "http://127.0.0.1:8000";
const getResourceURL = (suffix) => `${API_URL}/api/v1/${suffix}/`;

const deleteProduct = (id) => {
    console.log(id);
    axios
        .delete(getResourceURL(`products/${id}`))
        .then(() => {
            alert("Вы успешно удалили товар!")
            window.location = 'products'
        })
        .catch((error) => console.log(error));
}

const Product = ({product}) => {
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
                <button className="btn btn-primary"
                        onClick={() => deleteProduct(product.id)}>delete
                </button>
            </td>
        </tr>
    )
}

const ProductList = ({products, loading}) => {
    useEffect(() => {
        document.title = 'Товары'
    }, [])
    return (
        <Fragment>
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
                {loading &&
                    <Fragment>{products.map((product) => <Product key={product.name} product={product}/>)}</Fragment>}
                </tbody>
            </table>
            {!loading && <Loader/>}
        </Fragment>
    )
}

export default ProductList;
