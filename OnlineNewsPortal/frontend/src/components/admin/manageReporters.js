import { useEffect, useState } from "react";
import { Button } from "@mui/material";
import toast, { Toaster } from "react-hot-toast";
import app_config from "../../config";



const ManageReporters= () => {
  const [ReporterArray, setReporterArray] = useState([]);
  const [loading, setLoading] = useState(true);

  const url = app_config.api_url;

  const fetchData = () => {
    fetch(url + "/reporter/getall")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setReporterArray(data);
        setLoading(false);
        
      });
  };

  const deleteReporter = (id) => {
    fetch(url + "/reporter/delete/" + id, { method: "DELETE" })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        fetchData();
        toast.success("Reporter Successfully Deleted!!", {
        
        
          style: {
            borderRadius: "10px",
            background: "#333",
            color: "#fff",
          },
        });
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const displayReporters = () => {
    if (!loading) {
      return ReporterArray.map((reporter, i) => (
        <tr key={reporter._id}>
          <td>{reporter.name}</td>
          <td>{reporter.username}</td>
          <td>{reporter.age}</td>
          <td>
            <img src={url+'/'+reporter.thumbnail} style={{maxWidth: '100px'}} />
          </td>
          <td>
            {new Date(reporter.createdAt).toLocaleDateString()} &nbsp;
            {new Date(reporter.createdAt).toLocaleTimeString()}
          </td>
          <td>
            <Button
              variant="contained"
              color="error"
              onClick={(e) => deleteReporter(reporter._id)}
            >
              <i className="fas fa-trash-alt"></i> Delete
            </Button>
          </td>
        </tr>
      ));
    }
  };

  return (
    <div className="container">
      <Toaster position="top-right" reverseOrder={false} />
      <h1>Manage Reporters</h1>

      <table className="table table-dark">
        <thead>
          <tr>
            <th>name</th>
            <th>username</th>
            <th>age</th>
            <th></th>

            <th>Create At</th>
            <th></th>
          </tr>
        </thead>
        <tbody>{displayReporters()}</tbody>
      </table>
    </div>
  );
};

export default ManageReporters; 