import Table from 'react-bootstrap/Table';
import {useState, useEffect} from "react";


const Tabla = () =>{
  /*
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://el-buen-sabor-cjbu.onrender.com/api/v1/rubrosArticulos/searchABM")
    .then(response => response.json())
    .then(res => console.log(res))
  },[])
*/
    return(
        <div>
      <Table responsive="sm">
        <thead>
          <tr>
            <th>Rubro</th>
            <th>Rubro Padre</th>
            <th>Estado</th>
            <th>Acciones</th>
            
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
          </tr>
          <tr>
            <td>1</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
          </tr>
          <tr>
            <td>1</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
          </tr>
        </tbody>
      </Table>
      
      
    </div>
    )
}

export default Tabla;