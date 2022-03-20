import { useEffect, useState } from "react";
import { Button } from "@mui/material";
import toast, { Toaster } from "react-hot-toast";
import app_config from "../../config";

const ManageNews= () => {
  const [NewsArray, setNewsArray] = useState([]);
  const [loading, setLoading] = useState(true);

  const url = app_config.api_url;

  const fetchData = () => {
    fetch(url + "/news/getall")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setNewsArray(data);
        setLoading(false);
      });
  };

  const deleteNews = (id) => {
    fetch(url + "/news/delete/" + id, { method: "DELETE" })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        fetchData();
        toast.success("News Successfully Deleted!!", {
        
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

  const displayNews = () => {
    if (!loading) {
      return NewsArray.map((news, i) => (
        <tr key={news._id}>
          <td>{news.title}</td>
          <td>{news.summary}</td>
          
          <td>
            <img src={url+'/'+news.thumbnail} style={{maxWidth: '100px'}} />
          </td>
          <td>
            {new Date(news.createdAt).toLocaleDateString()} &nbsp;
            {new Date(news.createdAt).toLocaleTimeString()}
          </td>
          <td>
            <Button
              variant="contained"
              color="error"
              onClick={(e) => deleteNews(news._id)}
            >
              <i className="fas fa-trash-alt"></i>Delete
            </Button>
          </td>
        </tr>
      ));
    }
  };

  return (
    <div className="container">
      <Toaster position="top-right" reverseOrder={false} />
      <h1>Manage News</h1>

      <table className="table table-dark">
        <thead>
          <tr>
            <th>title</th>
            <th>summary</th>
            
            <th></th>

            <th>Create At</th>
            <th></th>
          </tr>
        </thead>
        <tbody>{displayNews()}</tbody>
      </table>
    </div>
  );
};

export default ManageNews; 