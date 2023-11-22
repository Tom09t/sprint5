import Search from "../Components/search/Search"
import Button from "../Components/button/Button";
import Tabla from "../Components/table/Tabla";

const HomePageProducto = () =>{
    return(
    <>
        <div className="flex-container">
        <Button />
        <Search />
        </div>
        <Tabla />
        
    </>
    );
}
export default HomePageProducto;