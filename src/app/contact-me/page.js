"use client"
import emailjs from 'emailjs-com';
import { useState } from "react";
const SERVICE_ID = process.env.NEXT_PUBLIC_SERVICE_ID;
const TEMPLATE_ID = process.env.NEXT_PUBLIC_TEMPLATE_ID;
const USER_ID = process.env.NEXT_PUBLIC_USER_ID;

export default function Page() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  // const [showToast, setShowToast] = useState(false);
  // const [toastMessage, setToastMessage] = useState('');
  // const [toastType, setToastType] = useState('');
  const [status, setStatus] = useState('');
  const [formData, setFormData] = useState({
      from_name: name,
      reply_to: email,
      message: message
  });

  function sendEmail(e) {
    e.preventDefault();
      emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
          .then((result) => {
              // console.log(result.text);
              setStatus('Your message has been sent successfully!');
              // setToastMessage('Message has been sent successfully!');
              // setToastType('success');
              // setShowToast(true);
              setFormData({ from_name: '', reply_to: '', message: '' });
              setTimeout(() => setStatus(false), 3000);
              // setTimeout(() => setShowToast(false), 3000);
          }, (error) => {
              console.log(error.text);
              setStatus('Failed to send email. Please try again later.');
              setTimeout(() => setStatus(false), 3000);
              // setToastMessage('Failed to send email. Please try again.');
              // setToastType('error');
              // setShowToast(true);
              // setTimeout(() => setShowToast(false), 3000);
          });
  }

  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };

  // console.log(email, name, message);

    return (
      <>
       {/* header */}
       <div className="grid grid-cols-2 text-[14px] border-b-2 border-[#1E2D3D] text-[#607B96]">
              <div className="max-sm:col-span-2 border-r-2 border-[#1E2D3D]">
                <div className="p-2 pr-5 border-r-2 border-[#1E2D3D] w-[200px] flex flex-row justify-between hover:bg-[#1E2D3D] transition-colors">
                    contact-to-me
                    <span>
                    x
                    </span>
                </div>
              </div>
            </div>
            {/* end header */}

            {/* body */}
            <div className="grid grid-cols-2 text-[14px] border-[#1E2D3D] text-[#607B96] h-full">
                <div className="flex flex-col max-sm:col-span-2 border-r-2 border-[#1E2D3D] p-3 pt-10 gap-5">

                  <form onSubmit={sendEmail} className="w-[80%] self-center">
                    <div className="mb-5">
                      <label className="block text-[#607B96] text-[14px] mb-2">_name:</label>
                      <input name="from_name" value={name} onChange={ () => {
                        setName(event.target.value);
                      } } type="text" className="w-full bg-[#1E2D3D] text-[#607B96] border-2 border-[#1E2D3D] rounded-md py-1 px-3" />
                    </div>
                    <div className="mb-5">
                      <label className="block text-[#607B96] text-[14px] mb-2">_email:</label>
                      <input name="reply_to" value={email} onChange={ () => {
                        setEmail(event.target.value);
                      } } type="email" className="w-full bg-[#1E2D3D] text-[#607B96] border-2 border-[#1E2D3D] rounded-md py-1 px-3" />
                    </div>
                    <div className="mb-5">
                      <label className="block text-[#607B96] text-[14px] mb-2">_message:</label>
                      <textarea name="message" value={message} onChange={ () => {
                        setMessage(event.target.value);
                      } } className="w-full bg-[#1E2D3D] text-[#607B96] border-2 border-[#1E2D3D] rounded-md py-1 px-3" />
                    </div>
                    <div>
                      <button className="bg-[#1C2B3A] text-white hover:bg-[#607B96] hover:text-[#1E2D3D] text-[14px] py-1 px-3 rounded-md">submit-message</button>
                    </div>
                  </form>
                  <div className="w-[80%] self-center bg-[#1E2D3D] ">
                    <p className="text-[#607B96] text-[14px] p-3">$ <span className='text-[#43D9AD]'>{status}</span></p>
                  </div>
                </div>

                <div className="flex flex-col border-r-2 border-[#1E2D3D] p-3 pt-10 gap-5 max-sm:hidden">
                  <div className="self-center">
                      <span className="text-[#C98BDF]">const</span> <span className="text-[#5565E8]">button</span> <span className="text-[#C98BDF]">=</span> <span className="text-[#5565E8]">document.querySelector</span>(<span className="text-[#FEA55F]">"#sendBtn"</span>); 
                      <br />
                      <br />
                      <span className="text-[#C98BDF]">const</span> <span className="text-[#5565E8]">message</span> <span className="text-[#C98BDF]">=</span> {"{"} <br />
                      <span className="ml-3"><span className="text-[#5565E8]">name:</span> <span className="text-[#FEA55F]">"{name}"</span>,</span> <br />
                      <span className="ml-3"><span className="text-[#5565E8]">email:</span> <span className="text-[#FEA55F]">"{email}"</span>,</span> <br />
                      <span className="ml-3"><span className="text-[#5565E8]">message:</span> <span className="text-[#FEA55F]">"{message}"</span>,</span> <br />
                      <span className="ml-3"><span className="text-[#5565E8]">date:</span> <span className="text-[#FEA55F]">"{new Date().toLocaleDateString('en-EN', options)}"</span></span> <br />
                      {"}"}
                      <br />
                      <br />
                      <span className="text-[#5565E8]">button.addEventListener</span>(<span className="text-[#FEA55F]">'click'</span>, ()<span className="text-[#C98BDF]">{"=>"}</span> {"{"} <br />
                      <span className="ml-3"><span className="text-[#5565E8]">form.send</span>(<span className="text-[#5565E8]">message</span>);</span> <br />
                      {"}"})
                  </div>
                </div>
            </div>
      </>
    )
  }