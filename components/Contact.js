'use client'

import { useRef, useState } from 'react'
import { useRouter } from 'next/navigation'
import emailjs from "@emailjs/browser";


export default function Contact() {

  const nameRef = useRef()
  const emailRef = useRef()
  const messageRef = useRef()
  const [emailError, setEmailError] = useState(false);
  const router = useRouter()


  const sendMessage = (e) => {
    e.preventDefault()
    const email = emailRef.current.value;

    if (!validateEmail(email)) {
      setEmailError(true);
      return;
    }

    setEmailError(false);

    const templateParams = {
      from_name: nameRef.current.value,
      sender_email: email,
      message: messageRef.current.value
    };
    
    emailjs.send(
        "service_adpnnnd",
        "template_vx53dxn",
        templateParams,
        "hdJACtUqL0Wgg9RC9"
    )
    .then(
      function (response) {
        console.log("SUCCESS!", response.status, response.text);
        router.push('/email-confirm')
      },
      function (error) {
        console.log("FAILED...", error);
      }
    );
    nameRef.current.value = ""
    emailRef.current.value = ""
    messageRef.current.value = ""
  };

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleEmailChange = () => {
    const email = emailRef.current.value;
    if (!validateEmail(email)) {
      setEmailError(true);
    } else {
      setEmailError(false);
    }
  };

  return (
    <section id="contact" className="w-11/12 mx-auto my-10 p-5 lg:w-1/3">
      <h1 className="text-4xl mb-5 font-bold text-saffron">Let&apos;s Connect</h1>
      <p className="mb-5 font-light">
      If you want to know more about me or my work, or if you would just like to say hello, send me a message. I&apos;d love to hear from you.
      </p>
      <form onSubmit={sendMessage}>
        <div className="mb-4">
          <label className="block text-sm mb-1 font-medium" htmlFor="name">
            Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            ref={nameRef}
            className="w-full px-3 py-2 bg-lavender-blush border-b-2 border-black focus:outline-none"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm mb-1 font-medium" htmlFor="email">
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            ref={emailRef}
            className={`w-full px-3 py-2 bg-lavender-blush border-b-2 border-black ${
              emailError ? 'focus:border-red-500' : 'focus:border-green-500'
            } focus:outline-none`}
            onChange={handleEmailChange}
            required
          />
          {emailError && <p className="text-red-500 text-sm">Please enter a valid email address.</p>}
        </div>
        <div className="mb-4">
          <label className="block text-sm mb-1 font-medium" htmlFor="message">
            Message *
          </label>
          <textarea
            id="message"
            name="message"
            className="w-full px-3 py-2 bg-lavender-blush border-b-2 border-black focus:outline-none"
            placeholder="Hello, how are you!"
            rows="4"
            ref={messageRef}
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-saffron shadow-lg opacity-90 text-white font-bold py-2 rounded-lg lg:w-1/2 hover:bg-navy-blue focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Send Message
        </button>
      </form>
    </section>
  )
}
