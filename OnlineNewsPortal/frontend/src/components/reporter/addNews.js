import './news.css';

const AddNews = () => {
  return (
    <div>
        <div class="card">
  <h5 class="card-header">Add News</h5>
  <div class="card-body">
      
<div className="mb-3">
  <label for="exampleFormControlInput1" className="form-label">News Title</label>
  <input type="email" className="form-control" id="exampleFormControlInput1" />
</div>

<div className="mb-3">
<label for="exampleFormControlInput2" className="form-label">Add Category</label>
<select className="form-select" aria-label="Default select example">
  <option selected>Category</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select>
</div>

<div className="mb-3">
<label for="exampleFormControlInput3" className="form-label">Add SubCategory</label>
<select className="form-select" aria-label="Default select example">
  <option selected>Sub Category</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select>
</div>

<div className="mb-3">
  <label for="exampleFormControlTextarea1" className="form-label">Add News</label>
  <textarea className="form-control" id="exampleFormControlTextarea1" rows="5"></textarea>
  
  
</div>

<div className="mb-3">
  <label for="formFile" class="form-label">Add Image</label>
  <input className="form-control" type="file" id="formFile"/>
</div>
<button type="button" className="btn btn-primary">Submit</button>

</div>
</div>
    </div>
  )
}

export default AddNews