import {NavLink as Link} from "react-router-dom";
import React, {useEffect, Fragment} from "react";
import Loader from "./Loader";
import axios from "axios";


const API_URL = "http://127.0.0.1:8000";
const getResourceURL = (suffix) => `${API_URL}/api/v1/${suffix}/`;

const deleteCategory = (id) => {
    // console.log(id);
    axios
        .delete(getResourceURL(`category/${id}`))
        .then(() => {
            alert("Вы успешно удалили категорию!")
            window.location = 'category'
        })
        .catch((error) => console.log(error));
}

const Category = ({category}) => {
    return (
        <tr className="product-row">
            <td>
                <Link to={`/category/detail/${category.id}`}>{category.name}</Link>
            </td>
            <td>
                {category.created}
            </td>
            <td>
                <button className="btn btn-success" onClick={() => deleteCategory(category.id)}>delete</button>
            </td>
        </tr>
    )
}

const CategoryList = ({categories, loading}) => {
    useEffect(() => {
        document.title = 'Каталог'
    }, [])
    return (
        <Fragment>
            <table className={"table category-list"}>
                <thead>
                <tr>
                    <th>Название</th>
                    <th>Создано</th>
                    <th>Действие</th>
                </tr>
                </thead>
                <tbody>
                {loading && <Fragment>{categories.map((category) => <Category key={category.name}
                                                                              category={category}/>)}</Fragment>}
                </tbody>
            </table>
            {!loading && <Loader/>}
        </Fragment>
    )
}

export default CategoryList;
