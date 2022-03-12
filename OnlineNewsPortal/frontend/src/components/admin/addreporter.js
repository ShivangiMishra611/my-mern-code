
import "./addreporter.css";
const AddReporter = () => {
  return (
   
      
    <div className=" sides container-fluid ">
   
    <div className="d-flex align-items-start  mt-5">
      
  <div className="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
  <img className="logo1" src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"></img>
    <button className="nav-link active" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true">Account</button>
    <button className="nav-link" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false">Security</button>    <button className="nav-link" id="v-pills-messages-tab" data-bs-toggle="pill" data-bs-target="#v-pills-messages" type="button" role="tab" aria-controls="v-pills-messages" aria-selected="false">Mobile</button>
    <button className="nav-link" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-settings" type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false">Settings</button>
  </div>
  <div className="tab-content" id="v-pills-tabContent ">
    <div className="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab  mt-5">
      <h5 className='mt-2 text-danger'>Account Settings</h5>
    <form class="row g-3 mt-2 ">
  <div class="col-md-6 ">
    <label for="inputEmail4" class="form-label">UserName</label>
    <input type="text" class="form-control" id="inputEmail4"/>
  </div>
  <div class="col-md-6">
 
     <label for="inputPassword4" class="form-label">CurrentPassword</label>
    <input type="password" class="form-control" id="inputPassword4"/>
  </div>
 
  <div class="col-md-6">
    <label for="inputState" class="form-label">Gender</label>
    <select id="inputState" class="form-select">
      <option selected>Select</option>
      <option>Male</option>
      <option>Female</option>
    </select>
  </div>
  <div class="col-md-6">
    <label for="inputPassword4" class="form-label">Confirm Password</label>
    <input type="password" class="form-control" id="inputPassword4"/>
  </div>
  <div class="col-md-6">
    <label for="inputPassword4" class="form-label">Date Of Birth</label>
    <input type="date" class="form-control" id="inputPassword4"/>
  </div>
  <div class="col-md-6">
    <label for="inputPassword4" class="form-label">Facebook link</label>
    <input type="email" class="form-control" id="inputPassword4"/>
  </div>
  
  <div class="col-md-6">
    <label for="inputPassword4" class="form-label">Designation</label>
    <select id="inputState" class="form-select">
      <option selected>Select</option>
      <option>Student</option>
      <option>businessman</option>
      <option>Freelancer</option>
      <option>Employee </option>


    </select>
  </div>
 
  <div class="col-md-6">
    <label for="inputPassword4" class="form-label">Twitter link</label>
    <input type="email" class="form-control" id="inputPassword4"/>
  </div>
  <div class="col-md-6">
    <label for="inputPassword4" class="form-label">Languages Known</label>
    <select id="inputState" class="form-select">
      <option selected>Select</option>
      <option>English</option>
      <option>Hindi</option>
      <option>Both</option>
    </select>
  </div>
  <div class="col-md-6">
    <label for="inputState" class="form-label">Landmark</label>
    <select id="inputState" class="form-select">
      <option selected>select</option>
      <option>Hazratganj</option>
      <option>Mumbai</option>
    </select>
  </div>
  <div class="col-md-4">
    <label for="inputState" class="form-label">Country</label>
    <select id="inputState" class="form-select">
      <option selected>select</option>
      <option>INDIA</option>
      <option>China</option>
    </select>
  </div>
  <div class="col-md-4">
    <label for="inputState" class="form-label">City</label>
    <select id="inputState" class="form-select">
      <option selected>select</option>
      <option>Lucknow</option>
      <option>Mumbai</option>
    </select>
  </div>
  <div class="col-md-4">
    <label for="inputZip" class="form-label">Zip</label>
    <input type="text" class="form-control" id="inputZip"/>
  </div>

 
  <div class="col-12">
  <button className=" mybtn btn btn-primary  w-100">Save</button>
  </div>
</form></div>
    <div className="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">...''oipoipoipoiopiopioi'</div>
    <div className="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">...</div>
    <div className="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab">...</div>
  </div>
</div>
    </div>
    
      
     
  );
    
  
};

export default AddReporter;
  

// const AddReporter = () => {
//   return (
//     <div>
//     <section className="vh-100" ></section>
//   <div className="container h-100"></div>
//     <div className="row d-flex justify-content-center align-items-center h-100">   </div>
    


//       <div className="col-xl-9"></div>

//         <h1 className="text-white mb-4">Apply for a job</h1>

//         <div className="card" ></div>
//           <div className="card-body"></div>

//             <div className="row align-items-center pt-4 pb-3">
//               <div className="col-md-3 ps-5">

//                 <h6 className="mb-0">Full name</h6>

//               </div>
//               <div className="col-md-9 pe-5">

//                 <input type="text" className="form-control form-control-lg" />

//               </div>
//             </div>

//             <hr className="mx-n3"></hr>

//             <div className="row align-items-center py-3">
//               <div className="col-md-3 ps-5">

//                 <h6 className="mb-0">Email address</h6>

//               </div>
//               <div className="col-md-9 pe-5">

//                 <input type="email" className="form-control form-control-lg" placeholder="example@example.com" />

//               </div>
//             </div>

//             <hr className="mx-n3"></hr>

//             <div className="row align-items-center py-3">
//               <div className="col-md-3 ps-5">

//                 <h6 className="mb-0">Full name</h6>

//               </div>
//               <div className="col-md-9 pe-5">

//                 <textarea className="form-control" rows="3" placeholder="Message sent to the employer"></textarea>

//               </div>
//             </div>

//             <hr className="mx-n3"></hr>

//             <div className="row align-items-center py-3">
//               <div className="col-md-3 ps-5">

//                 <h6 className="mb-0">Upload CV</h6>

//               </div>
//               <div className="col-md-9 pe-5">

//                 <input className="form-control form-control-lg" id="formFileLg" type="file" />
//                 <div className="small text-muted mt-2">Upload your CV/Resume or any other relevant file. Max file size 50 MB
                
//                 </div>

//               </div>
//             </div>

//             <hr className="mx-n3"></hr>

//             <div className="px-5 py-4">
//               <button type="submit" className="btn btn-primary btn-lg">Send application</button>
//             </div>

       
//   </div>


    
    
   
      
//   );
// };

// export default AddReporter;