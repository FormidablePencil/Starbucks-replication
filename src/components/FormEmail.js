import React from 'react';

const FormEmail = () => {
  return (
    <div className="bg-starbucks-gray">

      <div className="border-b border-gray-500 h-16"></div>


      <div className="container mx-auto text-xs pl-2 py-6">
        <div className="flex flex-row-reverse">

        
        <div className="flex flex-col md:w-3/4">

        <span className=" mr-2">Join our email list</span>
        <div className="flex flex-wrap">
        <span className="">
          <label className="hidden" htmlFor="email">email</label>
          <input className=" rounded pr-12 mr-3" type="text" placeholder="Email address" id="email"/>
          
          <label className="hidden" htmlFor="zipCode">zipCode</label>
          <input className="mb-2 rounded w-16" type="text" placeholder="Zip code" id="zipCode"/>
        </span>
          <button className="mb-2 bg-gray-800 uppercase px-10 rounded text-gray-300 font-starbucksLatoBold text-xs md:ml-3">get started</button>
        </div>
        <span>


          By clicking "GET STARTED" I agree to receive news, promotions, information, and offers from Starbucks. See our <strong className="underline"> Privacy Statement</strong> and <strong className="underline">Customer Service.</strong>
        </span>
        </div>
      </div>
    </div>
    </div>
  );
};

export default FormEmail;