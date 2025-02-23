import React, { useEffect, useState } from 'react'
import "./Contact.css"
import contact from "../images/contact.png"
import emailjs from "@emailjs/browser";
import { toast } from 'react-toastify';

const Contact = () => {
  useEffect(() => {
    document.title = "Contact - Rakesh's Portfolio";
  }, []);
  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    phone: "",
    message: "",
    to_name: "Rakesh"
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_ozztjfm",
        "template_1ksg3jo",
        formData,
        "T-pR4bZDMaIAlkN6f" // 
      )
      .then(
        (response) => {
          setFormData({
            from_name: "",
            from_email: "",
            phone: "",
            message: "",
            to_name: "Rakesh"
          })
          toast.success("Message sent successfully!", {
            position: "top-center"
          });
        },
        (error) => {
          toast.error("Failed to send message.", {
            position: "top-center"
          });
        }
      );
  };
  return (
    <div className='Contact'>
      <p className='contact-top'> <i class='bx bx-headphone'></i> Get In <span style={{ color: "yellow" }}>Touch</span></p>
      <div className="main">
        <div className="left">
          <img src={contact} alt="" />
        </div>
        <div className="right">
          <form action="" onSubmit={handleSubmit}>
            <input onChange={handleChange} type="text" placeholder='Name' name='from_name' required value={formData.from_name} />
            <input onChange={handleChange} type="email" placeholder='Email' name='from_email' required value={formData.from_email} />
            <input onChange={handleChange} type="text" placeholder='Phone' name='phone' required value={formData.phone} />
            <textarea onChange={handleChange} name="message" id="" placeholder='Message' required value={formData.message}></textarea>
            <div className="btn">
              <button className='shadow__btn'>Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact