import "./signup.css";
const Signup = () => {
    return (
        <section className="profile"> 
        <div className="container mt-5">
            <div className="profile-content">
                 <div className="profile-pic">
                <img src="" className="rounded-circle" width="150"/>
                <div className="profile-link">
                    <a href="">Account</a>
                    <a href="">Security & Privacy</a>
                    <a href="">Mobile</a>
                    <a href="">Find Friends</a>
                    <a href="">History</a>
                </div>
                </div>
                <div className="profile-form">
                    <h2 className="profile-title">Account Setting</h2>
                    <form className="user-form">
                        <div className="form-group">
                            <label className="label">UserName</label>
                            <span>
                            <input className="no-outline" type="text" name="name" id="name"/>
                            </span>

                        </div>

                        <div className="form-group">
                            <label>Email</label>
                            <span>
                            <input  className="no-outline" type="text" name="name" id="name"/>
                            </span>

                        </div>

                        <div className="form-group">
                            <label className="label">Gender</label>
                            <span>
                            <input  className="no-outline" type="text" />
                            </span>

                        </div>

                        <div className="form-group">
                            <label className="label">Birthday</label>
                            <span>
                            <input  className="no-outline" type="text" />
                            </span>

                        </div>

                        <div className="form-group">
                            <label className="label">Job</label>
                            <span>
                            <input className="no-outline" type="text" />
                            </span>

                        </div>

                        <div className="form-group">
                            <label className="label">Language</label>
                            <span>
                            <input className="no-outline"  type="text"/>
                            </span>
                            

                        </div>

                        <div className="form-group">
                            <label>Country</label>
                            <span>
                            <input className="no-outline"  type="text" />
                            </span>

                        </div>

                        <div className="form-group">
                            <label>City</label>
                            <span>
                            <input className="no-outline" type="text" />
                            </span>

                        </div>

                    </form>
                    </div>
                    <div className="page-two">
                    <form className="user-form2">
                        <div className="form-group">
                            <label className="label">Current Password</label>
                            <span>
                            <input className="no-outline" type="text" name="name" id="name"/>
                            </span>

                        </div>

                        <div className="form-group">
                            <label>New Password</label>
                            <span>
                            <input  className="no-outline" type="text" name="name" id="name"/>
                            </span>

                        </div>

                        <div className="form-group">
                            <label className="label">Confirm Password</label>
                            <span>
                            <input  className="no-outline" type="text" />
                            </span>

                        </div>

                        <div className="form-group">
                            <label className="label">Facebook Link</label>
                            <span>
                            <input  className="no-outline" type="text" />
                            </span>

                        </div>

                        <div className="form-group">
                            <label className="label">Twitter-Link</label>
                            <span>
                            <input className="no-outline" type="text" />
                            </span>

                        </div>

                    </form>

                    </div>

               

            </div>

        </div>
        </section>
    )
    
}
export default Signup;

