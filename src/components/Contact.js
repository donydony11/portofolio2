import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import { API } from 'aws-amplify';
import { Auth } from 'aws-amplify';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const { name, email, message } = formData;

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const user = await Auth.currentAuthenticatedUser();
      const token = user.signInUserSession.accessToken.jwtToken;

      await API.post('contactformapi', '/items', {
        headers: {
          Authorization: `Bearer ${token}`
        },
        body: formData
      });
      await API.post('contactformapi', '/send', {
        headers: {
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(formData)
      });
      alert('Message sent successfully!');
      setFormData({
        name: '',
        email: '',
        message: ''
      });
    } catch (err) {
      console.log(err);
      alert('An error occurred while sending your message.');
    }
  };

  return (
    <section className='py-16 lg:section' id='contact'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row'>
          {/* text */}
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial='hidden'
            whileInView='show'
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 flex justify-start items-center'
          >
            <div>
              <h4 className='text-x1 uppercase text-accent font-medium mb-2 tracking-wide'>Get in touch</h4>
              <h2 className='text-[45px] lg:text-[90px] leading-none mb-12'>Let's work <br /> together!</h2>
            </div>
          </motion.div>
          {/* form */}
          <motion.form
            variants={fadeIn('left', 0.3)}
            initial='hidden'
            whileInView='show'
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 border rounded-2x1 flex flex-col gap-y-6 pb-24 p-6 items-start'
            onSubmit={handleSubmit}
          >
            <input
              className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all'
              type='text'
              placeholder='Your name'
              name='name'
              value={name}
              onChange={handleInputChange}
            />
            <input
              className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all'
              type='text'
              placeholder='Your email'
              name='email'
              value={email}
              onChange={handleInputChange}
            />
            <textarea
              className='bg-transparent border-b py-12 outline-none w-full placeholder:text-white focus:border-accent transition-all resize-none mb-12'
              placeholder='Your message'
              name='message'
              value={message}
              onChange={handleInputChange}
            ></textarea>

            <button type='submit' className='btn btn-lg'>Send message</button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};



export default Contact;
