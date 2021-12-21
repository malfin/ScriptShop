import {Link} from "react-router-dom";
import {useEffect} from "react";

const User = ({user}) => {

    return (
        <tr className="product-row">
            <td>
                <Link to={`/users/detail/${user.id}/`}>{user.id}</Link>
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
    useEffect(() => {
        document.title = 'Пользователи'
    }, [])

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
