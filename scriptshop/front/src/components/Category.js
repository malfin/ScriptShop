import {NavLink as Link} from "react-router-dom";
import React, {useEffect} from "react";

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
                <Link to={`/category/delete/${category.id}`} className="nav-link">delete</Link>
            </td>
        </tr>
    )
}

const CategoryList = ({categories}) => {
    useEffect(() => {
        document.title = 'Каталог'
    }, [])
    return (
        <table className={"table category-list"}>
            <thead>
            <tr>
                <th>Название</th>
                <th>Создано</th>
                <th>Действие</th>
            </tr>
            </thead>
            <tbody>
            {categories.map((category) => <Category key={category.name} category={category}/>)}
            </tbody>
        </table>
    )
}

export default CategoryList;
