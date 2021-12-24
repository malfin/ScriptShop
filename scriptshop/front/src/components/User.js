import {Link} from "react-router-dom";
import {useEffect, Fragment} from "react";
import Loader from "./Loader";

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

const UserList = ({users, isAuthenticated, loading}) => {
    useEffect(() => {
        document.title = 'Пользователи'
    }, [])
    if (isAuthenticated) {
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
                {loading && <Fragment>{users.map((user) => <User key={user.id} user={user}/>)}</Fragment>}
                {!loading && <Loader/>}
                </tbody>
            </table>
        )
    } else {
        return (
            <h3>Авторизуйтесь!</h3>
        )
    }

}

export default UserList;
