
import "./practice.css";
// import "./ToggleSwitch";
// import React, { Component } from "react";
// import "./ToggleSwitch.css";
import React, { Component } from "react";
import ToggleSwitch from "./ToggleSwitch";


const Practice = () => {
    return(
        <div className="row">
            <div className="col-md  profile">
           
                 <div className="sidebar">
                     <div className="card-body">
                     <img
                className="logo"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Avatar_icon_green.svg/2048px-Avatar_icon_green.svg.png "
                alt="Shivangi Mishra" 
              />
                <div className="link1">
                    <h4>Shivangi Mishra</h4>
                
                    <a  href="" >(Click to change image)</a>
                </div>
                <hr className="line
                
                "></hr>

               
                <div className="profile-link">
                    <a href="">Account</a>
                    <a href="">Security & Privacy</a>
                    <a href="">Mobile</a>
                    <a href="">Find Friends</a>
                    <a href="">History</a>
                </div>
                </div>
                </div>
            
            </div>
            <div className="col-md  form1">
            <div className="profile-form">
                    <h2 className="profile-title">Account Setting</h2>
                    <form className="user-form">
                        <div className="form-group">
                        <label className="label1">UserName</label>
                            <span>
                            
                            <input className="no-outline" type="text" />
                            </span>

                        </div>

                        <div className="form-group">
                            <label className="label1">Email</label>
                            <span>
                            <input  className="no-outline" type="text" />
                            </span>

                        </div>

                        <div className="form-group">
                            <label className="label1">Gender</label>
                            <select className="no-outline">
                            <option></option>
                            <option>Male</option>
                            <option>Female</option>
                            
                            
                            </select>

                        </div>

                        <div className="form-group">
                            <label className="label1">Birthday</label>
                            <div className="d">
                            <div className="d1">
                            <select className="no-outline">
                            <option></option>
                            <option>12</option>
                            <option>6</option>
                            
                            
                            </select>
                            </div>
                            <div className="d2">
                            <select className="no-outline">
                            <option></option>
                            <option>January</option>
                            <option>February</option>
                            <option>November</option>
                            
                            
                            </select>
                            </div>
                            <div className="d3">
                            <select className="no-outline">
                            <option></option>
                            <option>2001</option>
                            <option>2002</option>
                            <option>2003</option>
                            
                            
                            </select>
                            </div>
                            </div>
                            
                            

                        </div>

                        <div className="form-group">
                            <label className="label1">Job</label>
                            <span>
                            <input className="no-outline" type="text" />
                            </span>

                        </div>

                        <div className="form-group">
                            <label className="label1">Language</label>
                            
                            <select className="no-outline">
                            <option></option>
                            <option>English</option>
                            <option>Hindi</option>
                            <option>French</option>
                            
                            </select>
                            
                            

                        </div>

                        <div className="form-group">
                            <label className="label1">Country</label>
                            
                            <select className="no-outline">
                            <option></option>
                            <option>India</option>
                            <option>China</option>
                            <option>Sweden</option>
                            
                            </select>
                            

                        </div>

                        <div className="form-group">
                            <label className="label1">City</label>
                            
                            <select className="no-outline">
                            <option></option>
                            <option>Lucknow</option>
                            <option>Agra</option>
                            <option>Rampur</option>
                            
                            </select>
                            

                        </div>

                    </form>
                    </div>
            </div>
            <div className="col-md  form2">
            <div className="profile-form">
                    
                    <form className="user-form1">
                    <div className="form-group">
                        <label className="label1">Current Password</label>
                            <span>
                            
                            <input className="no-outline" type="text" />
                            </span>

                        </div>

                        <div className="form-group">
                            
                            
                            <label className="label1">New Password</label>
                            <span>
                            <input  className="no-outline" type="text" />
                            </span>
                            <p>(4-32 alphabets or numerics)</p>

                        </div>

                        <div className="form-group">
                            
                            
                            <label className="label1">Confirm Password</label>
                            <span>
                            <input  className="no-outline" type="text" />
                            </span>

                        </div>

                        <div className="form-group">
                            
                            
                            <label className="label1">Facebook Link</label>
                            <span>
                            <input  className="no-outline" type="text" />
                            </span>

                        </div>

                        <div className="form-group">
                            
                            
                            <label className="label1">Twitter Link</label>
                            <span>
                            <input className="no-outline" type="text" />
                            </span>

                        </div><br></br>
                        {/* <div className="form-group">
                            <label className="switch">Email Notification
                                <input type="checkbox" checked>
                                    <span className="slider">

                                    </span>

                                </input>
                            </label>
                        </div> */}
                            <div className="form-toggle">
                            <label className="label2">Email Notification</label><br></br><br></br>
                            <div className="toggle-switch">
                            <React.Fragment>
                             <ToggleSwitch  /><br></br>
                             
                            </React.Fragment>
                            </div>
                            </div>

                            <div className="form-toggle">
                            <label className="label3">Video autoplay</label><br></br><br></br>
                            <div className="toggle-switch">
                            
                            <React.Fragment>
                             <ToggleSwitch  /><br></br>
                             </React.Fragment>
                             
                            
                            </div>
                            </div>

                            <div className="form-toggle">
                            <label className="label4">Inform me before showing media that <br/>may be sensitive</label>
                            <div className="toggle-switch">
                            <React.Fragment>
                             
                             <ToggleSwitch  />
                            </React.Fragment>
                           
                            </div>
                            </div>
                            <button className="mybtn">Save</button>
                            

                            

                            
                        
                        
                        


                        

                        
                        

                    </form>
                    </div>
            
            </div>
        </div>
    )
    
}
export default Practice;
