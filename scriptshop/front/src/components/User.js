const User = ({user}) => {
    // console.log('user:', user);
    return (
        <tr className="product-row">
            <td>
                {user.id}
            </td>
            <td>
                {user.username}
            </td>
            <td>
                {user.first_name}
            </td>
        </tr>
    )
}

const UserList = ({users}) => {
    // console.log('users:', users);

    return (
        <table className={"user-list"}>
            <thead>
            <tr>
                <th>ID</th>
                <th>UserName</th>
                <th>First_name</th>
            </tr>
            </thead>
            <tbody>
            {/*{products.map(product)}*/}
            {users.map((user) => <User key={user.id} user={user}/>)}
            </tbody>
        </table>
    )
}

export default UserList;
