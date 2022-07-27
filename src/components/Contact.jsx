import React from 'react';

const Contact = () => {
    return (
        <div name="contact" className='w-full h-screen bg-[#0a192f] flex justify-center items-center pt-4'>
            <form method='post' action="https://getform.io/f/8c08da29-94eb-4b97-a919-9954344a6dbc" className="flex flex-col max-w-[600px] w-full">
                <div className="pt-12">
                    <p className="text-4xl font-bold inline border-b-4 border-[#3c96bd] text-gray-300 ">Contact</p>
                    <p className="text-gray-300 py-4">// Submit the form below or send me an email - bradey795@gmail.com</p>
                </div>
                <input className="bg-gray-300 p-2" type="text" placeholder="Name" name="name"/>
                <input className="my-4 p-2 bg-gray-300" type="email" placeholder="Email" name="email"/>
                <textarea name = "message" placeholder="Message" rows={10} className="bg-gray-300 p-2">

                </textarea>
                <button className="text-white border-2 hover:bg-[#3c96bd] hover:border-[#3c96bd] px-4 py-3 my-8 mx-auto flex items-center">Let's Collaborate</button>

            </form>

        </div>
    )

}

export default Contact;