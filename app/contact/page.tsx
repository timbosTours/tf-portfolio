'use client'

import { Roboto} from "next/font/google";
import Footer from "../components/Footer"
import NavBar from "../components/NavBar"
import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import Link from "next/link";
import { AiOutlineGithub } from 'react-icons/ai'
import { AiOutlineTwitter } from 'react-icons/ai'
import { AiFillLinkedin } from 'react-icons/ai'

const roboto = Roboto({
    weight: ['400'],
    subsets: ['latin']
})

// Type definition for the form data
type FormData = {
    access_key: string;
    subject: string;
    from_name: string;
    botcheck: boolean;
    name: string;
    email: string;
    message: string;
};

// Contact form component
export default function ContactForm() {
    // Using react-hook-form for form state management
    const {
        register, // function to register input
        handleSubmit, // function to handle form submit
        setValue, // function to manually set form value
        reset, // function to reset the form
        control,
        formState: { errors, isSubmitSuccessful, isSubmitting }, // form state
        watch // function to watch form value change
    } = useForm<FormData>({
        mode: "onTouched", // validate form on touch
    });
    const name  = watch("name"); // watching name value change
    const [isSuccess, setIsSuccess] = useState(false); // state for form submit success
    const [Message, setMessage] = useState(""); // state for response message

    // Effect hook to set the subject of the email when the name changes
    useEffect(() => {
        setValue("subject", `${name ? name : "Someone"} sent a message from Website`);
    }, [name, setValue]);

    // Handler for form submission
    const onSubmit = async (data: FormData, e?: React.BaseSyntheticEvent) => {
        console.log(data);
        // Fetching from an API
        await fetch("https://api.web3forms.com/submit", {
            method: "POST", // HTTP method
            headers: { // HTTP headers
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify(data, null, 2), // body of the request
        })
        .then(async (response) => { // handling response
            let json = await response.json(); // parsing JSON response
            if (json.success) { // handling successful response
                setIsSuccess(true);
                setMessage(json.message);
                if (e) {
                    e.target.reset();
                }
                reset();
            } else { // handling error from the API
                setIsSuccess(false);
                setMessage(json.message);
            }
        })
        .catch((error) => { // handling network or other errors
            setIsSuccess(false);
            setMessage("Client Error. Please check the console.log for more info");
            console.log(error);
        });
    };

    return (
        <div className="min-h-screen bg-zinc-800 flex flex-col dark:bg-mountbattenpink-700">
    <NavBar />
    
    {/* contact form */}
    <div role="form" aria-label="Contact form" className="min-h-screen flex items-center justify-center">
        
        {/* hide form when succesful */}
        {!isSubmitSuccessful && (
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    type="hidden"
                    value="0df2e4c3-6048-4837-8ec3-b337491844a4"
                    {...register("access_key")}
                />
                <input
                    type="hidden"
                    {...register("subject")}
                />
                <input
                    type="hidden"
                    value="Mission Control"
                    {...register("from_name")}
                />
                <input
                    type="checkbox"
                    aria-hidden="true"
                    className="hidden"
                    {...register("botcheck")}
                ></input>

                {/* Name field */}
                <div className="mb-5">
                    <label htmlFor="user_name" className="block text-amber-100 dark:text-zinc-800">Name</label>
                    <input
                        id="user_name"
                        type="text"
                        autoComplete="off"
                        className={`${roboto.className} block text-amber-100 md:w-80 py-3 bg-zinc-800 dark:bg-mountbattenpink-700 border border-b-amber-100 border-t-zinc-800 dark:border-b-zinc-800 dark:text-zinc-800 dark:border-t-mountbattenpink-700 border-x-0 placeholder:text-amber-100 outline-none`}
                        {...register("name", {
                            required: "Full name is required",
                            maxLength: 80,
                        })}
                    />
                    {errors.name && (
                        <div className="mt-1 text-red-600">
                            <small>{errors.name.message}</small>
                        </div>
                    )}
                </div>
                
                {/* Email field */}
                <div className="mb-5">
                    <label htmlFor="email_address" className="block text-amber-100 dark:text-zinc-800">
                        Email Address
                    </label>
                    <input
                        id="email_address"
                        type="email"
                        autoComplete="off"
                        className={`${roboto.className} block text-amber-100 md:w-80 py-3 bg-zinc-800 dark:bg-mountbattenpink-700 dark:text-zinc-800 border border-b-amber-100 border-t-zinc-800 dark:border-b-zinc-800 dark:border-t-mountbattenpink-700 border-x-0 placeholder:text-amber-100 outline-none`}
                        {...register("email", {
                            required: "Enter your email",
                            pattern: {
                                value: /^\S+@\S+$/i,
                                message: "Please enter a valid email",
                            },
                        })}
                    />
                    {errors.email && (
                        <div className="mt-1 text-red-600">
                            <small>{errors.email.message}</small>
                        </div>
                    )}
                </div>

                {/* Message field */}
                <div className="mb-3">
                    <label htmlFor="user_message" className="block text-amber-100 dark:text-zinc-800">Message</label>
                    <textarea
                        id="user_message"
                        className={`${roboto.className} block text-amber-100 md:w-80 py-3 bg-zinc-800 dark:bg-mountbattenpink-700 border border-b-amber-100 border-t-zinc-800 dark:border-b-zinc-800 dark:border-t-mountbattenpink-700 dark:text-zinc-800 border-x-0 placeholder:text-amber-100 outline-none`}
                        {...register("message", { required: "Enter your Message" })}
                    />
                    {errors.message && (
                        <div className="mt-1 text-red-600">
                            {" "}
                            <small>{errors.message.message}</small>
                        </div>
                    )}
                </div>

                {/* Submit button */}
                <button
                    type="submit"
                    className="px-10 py-3 mt-6 bg-zinc-800 border-2 border-amber-100 text-lg text-amber-100 rounded dark:bg-mountbattenpink-700 dark:border-zinc-800 dark:text-columbiaBlue-700"
                    aria-label="Submit the form"
                >
                    {isSubmitting ? (
                        <span aria-hidden="true">
                            <svg
                                className="w-5 h-5 mx-auto text-amber-100 dark:text-zinc-800 animate-spin"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24">
                                <circle
                                    className="opacity-25"
                                    cx="12"
                                    cy="12"
                                    r="10"
                                    stroke="currentColor"
                                    strokeWidth="4"></circle>
                                <path
                                    className="opacity-75"
                                    fill="currentColor"
                                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                        </span>
                    ) : (
                        "Send"
                    )}
                </button>
            </form>
        )}
        
        {/* Messsage to show when form is succesfully submitted */}
        {isSubmitSuccessful && isSuccess && (
            <div className="flex flex-col items-center justify-center text-center text-zin-800 rounded-md" aria-live="polite">
                <svg
                    width="100"
                    height="100"
                    className="text-amber-100 dark:text-zinc-800"
                    viewBox="0 0 100 100"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M26.6666 50L46.6666 66.6667L73.3333 33.3333M50 96.6667C43.8716 96.6667 37.8033 95.4596 32.1414 93.1144C26.4796 90.7692 21.3351 87.3317 17.0017 82.9983C12.6683 78.6649 9.23082 73.5204 6.8856 67.8586C4.54038 62.1967 3.33331 56.1283 3.33331 50C3.33331 43.8716 4.54038 37.8033 6.8856 32.1414C9.23082 26.4796 12.6683 21.3351 17.0017 17.0017C21.3351 12.6683 26.4796 9.23084 32.1414 6.88562C37.8033 4.5404 43.8716 3.33333 50 3.33333C62.3767 3.33333 74.2466 8.24998 82.9983 17.0017C91.75 25.7534 96.6666 37.6232 96.6666 50C96.6666 62.3768 91.75 74.2466 82.9983 82.9983C74.2466 91.75 62.3767 96.6667 50 96.6667Z"
                        stroke="currentColor"
                        strokeWidth="3"
                    />
                </svg>
                <h3 className="py-5 text-2xl text-zinc-800">Success</h3>
                <p className="text-amber-100 dark:text-zinc-800 md:px-3">{Message}</p>
                <button
                    className="mt-6 text-amber-100 dark:text-zinc-800 underline focus:outline-none"
                    onClick={() => reset()}
                >
                    Go back
                </button>
            </div>
        )}

        {/* message to show when submit is NOT succesful */}
        {isSubmitSuccessful && !isSuccess && (
            <div className="flex flex-col items-center justify-center text-center text-amber-100 dark:text-zinc-800 rounded-md" aria-live="polite">
                <svg
                    width="97"
                    height="97"
                    viewBox="0 0 97 97"
                    className="text-amber-100 dark:text-zinc-800"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M27.9995 69C43.6205 53.379 52.3786 44.621 67.9995 29M26.8077 29L67.9995 69M48.2189 95C42.0906 95 36.0222 93.7929 30.3604 91.4477C24.6985 89.1025 19.554 85.6651 15.2206 81.3316C10.8872 76.9982 7.44975 71.8538 5.10454 66.1919C2.75932 60.53 1.55225 54.4617 1.55225 48.3333C1.55225 42.205 2.75932 36.1366 5.10454 30.4748C7.44975 24.8129 10.8872 19.6684 15.2206 15.335C19.554 11.0016 24.6985 7.56418 30.3604 5.21896C36.0222 2.87374 42.0906 1.66667 48.2189 1.66667C60.5957 1.66667 72.4655 6.58333 81.2172 15.335C89.9689 24.0867 94.8856 35.9566 94.8856 48.3333C94.8856 60.7101 89.9689 72.58 81.2172 81.3316C72.4655 90.0833 60.5957 95 48.2189 95Z"
                        stroke="CurrentColor"
                        strokeWidth="3"
                    />
                </svg>

                <h3 className="text-2xl text-amber-100 dark:text-zinc-800 py-7">
                    Oops, Something went wrong!
                </h3>
                <p className="text-gray-300 md:px-3">{Message}</p>
                <button className="mt-5 focus:outline-none" onClick={() => reset()}>
                    Try Again
                </button>
            </div>
        )}
    </div>

    {/* social media links */}
    <div className="flex flex-row mx-auto -mt-28 mb-12">
        <p tabIndex={0} className="text-amber-100 md:text-xl md:pt-1 dark:text-zinc-800">Or connect with me on...</p>
        <div className='flex flex-row ml-4'>
            <Link aria-label="Github account" href={'https://github.com/timbosTours'} target="_blank"><AiOutlineGithub className='fill-amber-100 dark:fill-columbiaBlue-700 mx-2 h-6 w-6 md:h-10 md:w-10'/></Link>
            <Link aria-label="Linkedin account" href={'https://www.linkedin.com/in/timothyfawcett89/'} target="_blank"><AiFillLinkedin className='fill-amber-100 dark:fill-columbiaBlue-700 mx-2 h-6 w-6 md:h-10 md:w-10'/></Link>
            <Link aria-label="Twitter account" href={'https://twitter.com/timbosTours'} target="_blank"><AiOutlineTwitter className='fill-amber-100 dark:fill-columbiaBlue-700 mx-2 h-6 w-6 md:h-10 md:w-10'/></Link>
        </div>
    </div>
    
    <p className="text-center text-sm">
        <a
            href="https://web3forms.com/"
            target="_blank"
            rel="noopener"
            className="text-zinc-900 dark:text-mountbattenpink-800"
        >
            Forms by Web3Forms
        </a>
    </p>
    <Footer />
</div>

    );
}