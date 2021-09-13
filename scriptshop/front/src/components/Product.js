const Product = (product) => {
    console.log('product:', product);
    return (
        <tr className='m-5'>
            <td className='p-2'>
                {product.name}
            </td>
            <td className='p-2'>
                {product.created}
            </td>
            <td className='p-2'>
                {product.sum}
            </td>
        </tr>
    )
}

const ProductList = (props) => {
    console.log('propsProduct', props.props);
    return (
        <table className="product-list">
            <thead>
            <tr className="text-dark m-2">
                <th className='m-2'>Name</th>
                <th className='m-2'>Created</th>
                <th className='m-2'>Sum</th>
            </tr>
            </thead>
            <tbody>
            {props.products.map(Product)}
            </tbody>
        </table>
    )
}
export default ProductList;
