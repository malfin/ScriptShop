import React from "react";
import {useParams} from "react-router-dom";

const CategoryDetail = ({categories}) => {
    let {id} = useParams();
    console.log(id);
    let category = categories.filter((item) => item.id === +id)[0];
    console.log(category);

    return (
        <div className={"project-detail"}>
            <h2>Name: {category.name}</h2>
            <p>Created: {category.created}, Updated: {category.updated}</p>
        </div>
    )
}


export default CategoryDetail;
