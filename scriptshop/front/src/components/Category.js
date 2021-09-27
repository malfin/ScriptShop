const Category = ({category}) => {
    // console.log('category:', category);
    return (
        <tr className="product-row">
            <td>
                {category.name}
            </td>
            <td>
                {category.created}
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
