const Product = (product) => {
    console.log('product:', product);
    return (
        <tr>
            <td>
                {product.name}
            </td>
            <td>
                {product.created}
            </td>
            <td>
                {product.sum}руб.
            </td>
        </tr>
    )
}

const ProductList = (props) => {
    console.log('propsProduct', props.props);
    return (
        <table className="product-list text-justify">
            <thead>
            <tr className="text-dark m-2">
                <th className='m-2'>Товар</th>
                <th className='m-2'>Создано</th>
                <th className='m-2'>Сумма</th>
            </tr>
            </thead>
            <tbody>
            {props.products.map(Product)}
            </tbody>
        </table>
    )
}
export default ProductList;
