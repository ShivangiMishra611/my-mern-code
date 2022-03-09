
import "./addreporter.css";
const AddReporter = () => {
  return (
   
      
    <div className=" sides container-fluid ">
   
    <div className="d-flex align-items-start  mt-5">
      
  <div className="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
  <img className="logo1" src="https://www.google.com/search?q=avatar+pngrlz=1C1RXMK_enIN970IN970&sxsrf=APq-WBszquvHfVEwhJ0Sq8vQ_vwVUrNzww:1644817696936&tbm=isch&source=iu&ictx=1&vet=1&fir=ImUpqcIf_MU0FM%252CUUPtDBJdc_Dc4M%252C_%253ByOtkbrQuOOYhTM%252CIJZuUe81vUIdsM%252C_%253BZbfKLfY7kfTJVM%252CipbR41MZZFVtOM%252C_%253BmbRvk1gh0P1_-M%252Ch-Q13qmubn106M%252C_%253B8C7lIS-1cIFLOM%252CsjdPs0Oc9wdIHM%252C_%253BQRDeu9Vt1l6dmM%252CIZQZ3bK5nhYV5M%252C_%253BkoR5k7ff7vqzMM%252CS2q8JsK3GxUv7M%252C_%253BL74TpWVhIld6LM%252CrQHSgaEq6Lc3HM%252C_%253BRdHRQ2dJN7LFaM%252CvKernhaiNJ00BM%252C_%253BbhzxrWoNgtx2YM%252CuglQnDVaECXO6M%252C_%253B8G6fmXU0gaeaZM%252CUUPtDBJdc_Dc4M%252C_%253Ba1RzgA4nFgMB8M%252CEq9shWjZMc4mPM%252C_%253BxnzJrcJfl-pbZM%252CUUPtDBJdc_Dc4M%252C_%253BeQVeQDEFEiYFZM%252CIZQZ3bK5nhYV5M%252C_%253BOmyLfgFTjuk_qM%252CBJb3ZNagGqc-9M%252C_%253BWIIf8_tfUEjtZM%252CU6ZrTS8pM9ElEM%252C_&usg=AI4_-kRebAieqaXXp0P21cbULx9QBUP2Xg&sa=X&ved=2ahUKEwi78K60v_71AhVdUGwGHSlvCX8Q9QF6BAgaEAE#imgrc=QRDeu9Vt1l6dmM"></img>alt=""
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
                   