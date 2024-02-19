'use client'
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const Page = () => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [status, setStatus] = useState('none');
  const [status1, setStatus1] = useState('none');

  const router = useRouter();

  async function handleSubmit(e) {

    console.log("I am coming here...")
    e.preventDefault();

    if (pass === '' || email === '') {
      if(pass === '') {
        setStatus('block');
      }
      if(email === '') setStatus1('block');
      return;
    } 

     await fetch('http://localhost:8080/signup', {
        method : 'POST',
        headers : {
            'Content-Type' : 'application/json'
        },
        body : JSON.stringify({
            email : email,
            pass : pass
        })
     })
     .then((res) => res.json())
     .then((res) => {
      console.log("I am here...")
        console.log("This is the result : ", res);
        if(res.message === 'done') {
             router.push('/')
        }
        localStorage.setItem('token', res.token);
        localStorage.setItem('user', res.id);
        alert('Done!');
     }
     ) 
     .catch((e) => {
        console.log(e.message);
     })
  }

  function handleEmailChange(e) {
    setEmail(e.target.value);
    // Hide error message when email input is modified
    if (status1 === 'block') {
      setStatus1('none');
    }
  }

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 border" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
            Username
          </label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500" id="username" type="text" placeholder="Username" value={email} onChange={handleEmailChange} />
          <p className="text-red-500 text-xs italic" style={{ display: status1 }}>Please fill the email field</p>
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500" id="password" type="password" placeholder="******************" value={pass} onChange={(e) => setPass(e.target.value)} style={{ border: status === 'none' ? '' : '1px solid red' }} />
          <p className="text-red-500 text-xs italic" style={{ display: status }}>Please choose a password.</p>
        </div>
        <div className="flex items-center justify-between">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit" onClick={handleSubmit}>
            Sign In
          </button>
          <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
            Forgot Password?
          </a>
        </div>
      </form>
    </div>
  );
};

export default Page;
