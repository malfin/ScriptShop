import {Link} from "react-router-dom";

const Category = ({category}) => {
    // console.log('category:', category);
    return (
        <tr className="product-row">
            <td>
                <Link to={`/category/detail/${category.id}`}>{category.name}</Link>
            </td>
            <td>
                {category.created}
            </td>
            <td>
                <Link to={`/category/delete/${category.id}`}>delete</Link>
            </td>
        </tr>
    )
}

const CategoryList = ({categories}) => {
    // console.log('categories:', categories);

    return (
        <table className={"category-list"}>
            <thead>
            <tr>
                <th>Название</th>
                <th>Создано</th>
                <th>Действие</th>
            </tr>
            </thead>
            <tbody>
            {/*{products.map(product)}*/}
            {categories.map((category) => <Category key={category.name} category={category}/>)}
            </tbody>
        </table>
    )
}

export default CategoryList;
