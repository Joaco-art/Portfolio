import { useState } from "react";
import Socials from "./Socials";

export default function Contact() {
    const [fields, setFields] = useState({
        firstname: "",
        email: "",
        message: ""
    });
    const [touched, setTouched] = useState({
        firstname: false,
        email: false,
        message: false
    });
    const [showModal, setShowModal] = useState(false);
    const [sentData, setSentData] = useState(null);

    const handleChange = (e) => {
        setFields({ ...fields, [e.target.id]: e.target.value });
    };

    const handleBlur = (e) => {
        setTouched({ ...touched, [e.target.id]: true });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setTouched({ firstname: true, email: true, message: true });
        if (isValid.firstname && isValid.email && isValid.message) {
            console.log(fields);
            setSentData(fields);
            setShowModal(true);
            setFields({ firstname: '', email: '', message: '' });
            setTouched({ firstname: false, email: false, message: false });
        }
    };

    const isValid = {
        firstname: fields.firstname.trim().length > 0,
        email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email),
        message: fields.message.trim().length > 0
    };

    const getInputClass = (field) => {
        return isValid[field]
            ? 'border-2 border-accent'
            : touched[field]
                ? 'border-2 border-red-500'
                : 'border border-gray-700';
    };

    const errorMsg = {
        firstname: 'First name is required.',
        email: 'Please enter a valid email address.',
        message: 'Message is required.'
    };

    return (
        <section className='flex flex-col snap-start items-center justify-center h-auto w-screen gap-10 px-5 py-0'>
            <h3 className='text-4xl font-bold text-primary drop-shadow-lg'>Do you want to work with me?</h3>
            <p className='text-lg text-gray-300 max-w-2xl text-center'>Are you seeking for a developer? I'm always looking for new projects and collaborations. If you have an idea or project in mind, feel free to contact me.</p>

            <form onSubmit={handleSubmit} className='flex flex-col items-center justify-center w-full max-w-xl h-auto rounded-2xl p-10 gap-7 shadow-2xl bg-gray-950 border border-gray-800 backdrop-blur-md'>
                <h3 className="text-3xl font-bold uppercase text-primary tracking-wider mb-4">Contact</h3>

                <div className="w-full flex flex-col gap-1">
                    <input
                        type="text"
                        id="firstname"
                        placeholder='First Name'
                        className={`rounded-md text-text bg-gray-900 w-full p-4 transition-all duration-200 placeholder:text-gray-400 ${getInputClass('firstname')}`}
                        required
                        value={fields.firstname}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    {!isValid.firstname && touched.firstname && (
                        <span className="text-red-500 text-sm mt-1">{errorMsg.firstname}</span>
                    )}
                </div>

                <div className="w-full flex flex-col gap-1">
                    <input
                        type="text"
                        id="lastname"
                        placeholder='Last Name'
                        className='rounded-md text-text bg-gray-900 w-full p-4 border border-gray-700 transition-all duration-200 placeholder:text-gray-400'
                        onChange={handleChange}
                    />
                </div>

                <div className="w-full flex flex-col gap-1">
                    <input
                        type="email"
                        id="email"
                        placeholder='Email'
                        className={`rounded-md text-text bg-gray-900 w-full p-4 transition-all duration-200 placeholder:text-gray-400 ${getInputClass('email')}`}
                        required
                        value={fields.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    {!isValid.email && touched.email && (
                        <span className="text-red-500 text-sm mt-1">{errorMsg.email}</span>
                    )}
                </div>

                <div className="w-full flex flex-col gap-1">
                    <textarea
                        maxLength={200}
                        id="message"
                        placeholder='Write your message here (max 200 characters)'
                        className={`p-4 rounded-md text-text bg-gray-900 w-full min-h-[120px] transition-all duration-200 placeholder:text-gray-400 resize-none ${getInputClass('message')}`}
                        required
                        value={fields.message}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    {!isValid.message && touched.message && (
                        <span className="text-red-500 text-sm mt-1">{errorMsg.message}</span>
                    )}
                </div>

                <button type="submit" className='mt-4 px-8 py-3 bg-primary text-white font-semibold rounded-lg shadow-md hover:bg-secondary transition-all duration-200'>Send request</button>
            </form>

            <p>Anyway, If you feel more comfortable, you can contact me through my email: <a href="mailto:juan.garcia.dev@gmail.com" className="text-accent underline">juan.garcia.dev@gmail.com</a></p>
            <Socials />

            {showModal && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-50 transition-opacity duration-300">
                    <div className="bg-gray-900 rounded-xl p-8 shadow-2xl flex flex-col items-center gap-4 border-2 border-accent scale-100 opacity-100 transition-all duration-300">
                        <span className="text-2xl font-bold text-accent mb-2">The form has been sent successfully!</span>
                        {sentData && (
                            <div className="bg-gray-800 rounded-lg p-4 w-full text-left text-white text-base flex flex-col gap-2">
                                <div><span className="font-semibold">First Name:</span> {sentData.firstname}</div>
                                <div><span className="font-semibold">Email:</span> {sentData.email}</div>
                                <div><span className="font-semibold">Message:</span> {sentData.message}</div>
                            </div>
                        )}
                        <button
                            className="mt-2 px-6 py-2 bg-accent text-white rounded-lg font-semibold hover:bg-accent/80 transition-all"
                            onClick={() => setShowModal(false)}
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </section>
    )
}