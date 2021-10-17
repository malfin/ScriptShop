import React from "react";
import {useParams} from "react-router";

const CategoryDetail = ({categories}) => {
    let {id} = useParams();
    let category = categories.filter((item) => item.id === +id)[0];

    return (
        <div className={"project-detail"}>
            <h2>Name: {category.name}</h2>
            <p>Created: {category.created}, Updated: {category.updated}</p>
        </div>
    )
}


export default CategoryDetail;
