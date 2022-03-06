import "./contactus.css";
const ContactUs = () => {
    return(
        <div className="maindiv">
           
            <div className="contact-form">
            <h2 className="contact-title">Contact Us</h2>
                    <form className="contact-form1">
                        <div className="contact-group">
                        <label className="contactlabel">UserName</label>
                           
                            
                            <input className="contactinput" type="text" />
                           

                        </div><br></br>

                        <div className="contact-group">
                            <label className="contactlabel">PhoneNumber</label>
                            
                            <input  className="contactinput"type="text" />
                           

                        </div><br></br>

                        <div className="contact-group">
                            <label className="contactlabel">Email</label>
                            
                            <input  className="contactinput"type="text" />
                           

                        </div><br></br>

                        <div className="contact-group">
                            <label className="contactlabel">Message</label>
                            
                            <input  className="contactmessage"type="text" />
                           

                        </div><br></br><br></br>

                        <button className="bsubmit">Submit</button>

                        
                        </form>
                        </div>
                        </div>

    );
    
}
export default ContactUs;
