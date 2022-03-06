import {
  Button
} from "@mui/material";
import { useEffect, useState } from "react";
import app_config from "../config";
import toast from "react-hot-toast";

const ManageProduct = () => {
  const [productArray, setProductArray] = useState([]);
  const [loading, setLoading] = useState(true);

  const url = app_config.api_url;

  const fetchData = () => {
    fetch(url + "/product/getall")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProductArray(data);
        setLoading(false);
      });
  };

  const deleteProduct = (id) => {
    fetch(url + "/product/delete/" + id, { method:"DELETE"})
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        fetchData();
        toast.success("Successfully Deleted",{

        })
        
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const displayProducts = () => {
    if (!loading) {
      return productArray.map((product,i) => (
      
        <tr key={product._id} >
          <td>{i+1}</td>
          <td>{product.name}</td>
          <td>{product.category}</td>
          <td>{product.price}</td>
          <td>{new Date(product.createdAt).toLocaleDateString()}</td>
          <td>
            <Button variant="contained" color="error" onClick={ e=> deleteProduct(product._id)}>
              <i className="fas fa-trash-alt"></i>
            </Button>
          </td>
          
        </tr>
      ));
    }
  };

  return (
    <div className="container">
      <h1>Manage Products</h1>
      <br></br><br></br>
      <table className="table table-info table-striped">
        <thead>
          <tr>
          <th>So.No</th>
            <th>Name</th>
            <th>Category</th>
            <th>Price</th>
            <th>Time</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
        {displayProducts()}

        </tbody>
      </table>
      
      
    </div>
  );
};

export default ManageProduct;