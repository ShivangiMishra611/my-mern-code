import "./addreporter.css"; //
const AddReporter = () => {
  return (
    <div>
    <section class="vh-100" style="background-color: #2779e2;"></section>
  <div class="container h-100"></div>
    <div class="row d-flex justify-content-center align-items-center h-100">   </div>
    


      <div class="col-xl-9"></div>

        <h1 class="text-white mb-4">Add Reporter</h1>

        <div class="card" style="border-radius: 15px;"></div>
          <div class="card-body"></div>

            <div class="row align-items-center pt-4 pb-3">
              <div class="col-md-3 ps-5">

                <h6 class="mb-0">Username</h6>

              </div>
              <div class="col-md-9 pe-5">

                <input type="text" class="form-control form-control-lg" />

              </div>
            </div>

            <hr class="mx-n3"></hr>

            <div class="row align-items-center py-3">
              <div class="col-md-3 ps-5">

                <h6 class="mb-0">Email address</h6>

              </div>
              <div class="col-md-9 pe-5">

                <input type="email" class="form-control form-control-lg" placeholder="example@example.com" />

              </div>
            </div>

            <hr class="mx-n3"></hr>

            <div class="row align-items-center py-3">
              <div class="col-md-3 ps-5">

                <h6 class="mb-0"> Password</h6>

              </div>
              <div class="col-md-9 pe-5">

                 <textarea class="form-control" rows="3" placeholder="Must be of 8-10 characters"></textarea>

              </div>
            </div>

            <hr class="mx-n3"></hr>

            <div class="row align-items-center py-3">
              <div class="col-md-3 ps-5">

                <h6 class="mb-0">Upload CV</h6>

              </div>
              <div class="col-md-9 pe-5">

                <input class="form-control form-control-lg" id="formFileLg" type="file" />
                <div class="small text-muted mt-2">Upload your CV/Resume or any other relevant file. Max file size 50 MB</div>

              </div>
            </div>

            <hr class="mx-n3"></hr>

            <div class="px-5 py-4">
              <button type="submit" class="btn btn-primary btn-lg">Submit</button>
            </div>

       
  </div>


    
    
   
      
  )
};

export default AddReporter;
