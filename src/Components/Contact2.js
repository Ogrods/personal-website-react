import React, { Component } from 'react';
import emailjs from "emailjs-com";

export default function Contact2() {

   function sendEmail(e) {
      e.preventDefault();
  
      emailjs.sendForm('service_2mscrzb', 'template_e5fitbp', e.target, 'user_xQ5xnIdUSTvusjiwooT12')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()
        alert('Your message was sent!')
    }


    return (
      <section id="contact">

         <div className="row section-head">

            <div className="two columns header-col">

               <h1><span>Get In Touch.</span></h1>

            </div>

            <div className="ten columns">

                  <p className="lead">Questions? Comments? Concerns? Drop me a line!</p>

            </div>

         </div>

         <div className="row">
            <div className="eight columns">

               <form onSubmit={sendEmail}>
					<fieldset>

                  <div>
						   <label htmlFor="contactName">Name <span className="required">*</span></label>
						   <input type="text" defaultValue="" size="35" id="contactName" name="contactName" required/>
                  </div>

                  <div>
						   <label htmlFor="contactEmail">Email <span className="required">*</span></label>
						   <input type="email" defaultValue="" size="35" id="contactEmail" name="contactEmail" required/>
                  </div>

                  <div>
						   <label htmlFor="contactSubject">Subject</label>
						   <input type="text" defaultValue="" size="35" id="contactSubject" name="contactSubject" />
                  </div>

                  <div>
                     <label htmlFor="contactMessage">Message <span className="required">*</span></label>
                     <textarea cols="50" rows="10" id="contactMessage" name="contactMessage" required></textarea>
                  </div>

                  <div>
                     <button className="submit" type="submit" value="Submit">Submit</button>
                     <span id="image-loader">
                        <img alt="" src="images/loader.gif" />
                     </span>
                  </div>
					</fieldset>
				   </form>

           <div id="message-warning"> Error boy</div>
				   <div id="message-success">
                  <i className="fa fa-check"></i>Your message was sent, thank you!<br />
				   </div>
           </div>

           <aside className="four columns footer-widgets">
               <div className="widget widget_contact">

					   <h4>Contact Details</h4>
					   <p className="address">
						   Dan Ogrodnik<br />
						    Los Angeles, CA<br /> 
                     <span>dan.ogrodnik@gmail.com</span>
					   </p>
				   </div>

               {/* <div className="widget widget_tweets">
                  <h4 className="widget-title">Latest Tweets</h4>
                  <ul id="twitter">
                     <li>
                        <span>
                        This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet.
                        Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum<br />
                        <a href="#">http://t.co/CGIrdxIlI3</a>
                        </span>
                        <b><a href="#">2 Days Ago</a></b>
                     </li>
                     <li>
                        <span>
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
                        eaque ipsa quae ab illo inventore veritatis et quasi <br />
                        <a href="#">http://t.co/CGIrdxIlI3</a>
                        </span>
                        <b><a href="#">3 Days Ago</a></b>
                     </li>
                  </ul>
		         </div> */}
            </aside>

      </div>
   </section>
    );
}


