import React, { useState } from "react";

const Message = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [subject, setSubject] = useState("");

  const PostData = ()=>{
    fetch("/send",{
        method:"post",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
            name,
            email,
            subject,
            message
        })
    }).then(res=>res.json())
    .then(data=>{
        alert(data.message)
        setMessage('')
        setName('')
        setSubject('')
        setEmail('')
    }).catch(err=>{
        console.log(err)
    })
}

  return (
    <div className="contact container">
      <div className="featured-title stagger1">
        <p>Send a DM for Collaboration</p>
      </div>
      <form className="stagger1" onSubmit={() => PostData()}>
        <label className="subtitle" for="fname">
          Your Name
        </label>
        <input
          type="text"
          id="fname"
          name="firstname"
          placeholder="Your name.."
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label className="subtitle" for="lname">
          Your Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Your email.."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label className="subtitle" for="lname">
          Subject
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          placeholder="Your subject.."
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        />

        <labe className="subtitle" for="message">
          Your Message
        </labe>
        <textarea
          id="message"
          name="message"
          placeholder="Write something.."
          style={{ height: "200px" }}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>

        <input type="submit" />
      </form>
    </div>
  );
};

export default Message;
