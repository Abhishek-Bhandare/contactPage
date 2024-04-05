import React from "react";
import styles from "./ContactForm.module.css";
import Button from "../Button/Button";
import { MdMessage } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import contact from "../../images/contact.svg";
import { useState } from "react";

const ContactForm = () => {

  const [name, setName] = useState("Abhishek")
  const [email, setEmail] = useState("abhi@gmail.com")
  const [text, setText] = useState("Hii Welcome!")

  const onSubmitHandler = (e) =>{
    e.preventDefault();

    setName(e.target[0].value);
    setEmail(e.target[1].value);
    setText(e.target[2].value);
  } 


  return (
    <section className={styles.container}>
      <div className={styles.contact_form}>
        <div className={styles.top_btn}>
          <Button
            text="VIA SUPPORT CHAT"
            icon={<MdMessage fontSize="20px" />}
          />
          <Button text="VIA CALL" icon={<FaPhoneAlt fontSize="20px" />} />
        </div>
        <Button
          isSecondary={true}
          text="VIA EMAIL FORM"
          icon={<HiMail fontSize="20px" />}
        />

        <form onSubmit={onSubmitHandler}>
          <div className={styles.form_control}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="email">E-mail</label>
            <input type="email" name="email" />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="text">Text</label>
            <textarea name="text" rows="7" />
          </div>

          <div style={{ display: "flex", justifyContent: "end" }}>
            <Button text="Submit" />
          </div>

          <div>{name + " "+ email +" "+ text}</div>
        </form>
      </div>

      <div className={styles.contact_image}>
        <img src={contact} alt="Contact Image" />
      </div>
    </section>
  );
};

export default ContactForm;
