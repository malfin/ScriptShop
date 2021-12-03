import {useEffect} from "react";

const Main = () => {
    useEffect(() => {
        document.title = 'Главная'
    }, [])
    return (
        <h3>Главная</h3>
    )
}
export default Main