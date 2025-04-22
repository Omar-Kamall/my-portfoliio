import { useRef } from 'react';
import { FaFacebook, FaLinkedin, FaTelegramPlane, FaWhatsapp } from 'react-icons/fa';
import { ErrorMessage, Field, Formik , Form } from 'formik';
import { RiMessage2Line } from 'react-icons/ri';
import * as Yup from "yup";
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';

const Contact = (props) => {
    const form = useRef();
    return (
        <section id='contact' className='bg-[#0A0F1F] pb-20'>
            <div className={`container mx-auto px-[5%] grid grid-cols-1 lg:grid-cols-2 ${props.className}`}>
                <div>
                    <h4 className='words text-3xl pt-25 pb-10'>DO YOU HAVE A PROJECT TO<br/>DISCUSS .?</h4>
                    <div className="flex items-center gap-3 text-white text-3xl">
                        <span>Get In Touch</span>
                        <RiMessage2Line />
                    </div>
                    <div className="flex gap-10 mt-15">
                        <div className="flex flex-col">
                            <span className='text-white text-2xl'>Contact</span>
                            <a className='text-blue-500 mt-2' href="mailto:omar.k.0000000@gmail.com">Gmail Omar</a>
                        </div>
                        <div className="flex flex-col">
                            <span className='text-white text-2xl'>Social Media</span>
                            <div className="flex gap-3 mt-2">
                                <a href="https://www.linkedin.com/in/omar-kamall"><FaLinkedin className='text-white hover:text-[#0A66C2] transition duration-300' size={20}/></a>
                                <a href="https://api.whatsapp.com/send?phone=1006677452"><FaWhatsapp className='text-white hover:text-[#25D366] transition duration-300' size={20}/></a>
                                <a href="https://www.facebook.com/share/1XGSjjVvVn/?mibextid=wwXIfr"><FaFacebook className='text-white hover:text-[#1877F2] transition duration-300' size={20} /></a>
                                <a href="https://t.me/OmarKamall"><FaTelegramPlane className='text-white hover:text-[#0088cc] transition duration-300' size={20}/></a>
                            </div>
                        </div>
                    </div>
                </div>
                <Formik
                    initialValues={{name: "" , email: "" , message: ""}}
                    validationSchema={Yup.object({
                        name: Yup.string().min(3,"Complete Your Name").required("Name Is Required"),
                        email: Yup.string().min(8,"Complete Your Email").email("Invalid Email").required("Email Is Required"),
                        message: Yup.string().min(2,"Complete Your Message").required("Message Is Required"),
                    })}
                    onSubmit={(values, { resetForm }) => {
                        emailjs
                            .sendForm('service_ky6jna9', 'template_tcu2mff', form.current, {
                            publicKey: 'FtKiaXpz_BEGEzwGp',
                        })
                        .then(() => {
                            Swal.fire({
                                title: "Message sent successfully",
                                icon: "success",
                                draggable: true
                            });
                            resetForm();
                        })
                        .catch((error) => {
                            Swal.fire({
                                title: "Message failed to send" + error.text,
                                icon: "error",
                                draggable: true
                            });
                        });
                    }}>
                    {({isSubmitting}) => (
                        <Form ref={form} className='flex flex-col justify-center'>
                            <span className='text-white text-2xl my-8'>Contact Form</span>
                            <label className='text-white ml-5' htmlFor="Name">Name</label>
                            <Field id="Name" className="py-2 px-5 my-2 rounded-3xl border-2 border-gray-600 text-[#4A90E2]" type="text" name="name" placeholder="Your Name"/>
                            <ErrorMessage className='text-[#FF6F91] px-5 text-[15px]' name='name' component="div"/>
                            <label className='text-white ml-5' htmlFor="Email">Email</label>
                            <Field id="Email" className="py-2 px-5 my-2 rounded-3xl border-2 border-gray-600 text-[#4A90E2]" type="text" name="email" placeholder="Your Email"/>
                            <ErrorMessage className='text-[#FF6F91] px-5 text-[15px]' name='email' component="div"/>
                            <label className='text-white ml-5' htmlFor="Message">Message</label>
                            <Field id="Message" className="py-2 px-5 my-2 rounded-3xl border-2 border-gray-600 text-[#4A90E2]" as="textarea" name="message" placeholder="Your Message"/>
                            <ErrorMessage className='text-[#FF6F91] px-5 text-[15px]' name='message' component="div"/>
                            <button type='submit' className="text-[#FF6F91] mt-5 w-50 border-2 shadow-2xl shadow-[#FF6F91] border-[#FF6F91] hover:text-[#4A90E2] hover:border-[#4A90E2] hover:shadow-[#4A90E2] py-2 px-7 transition duration-500 cursor-pointer rounded-3xl" disabled={isSubmitting}>{isSubmitting ? "Sending ..." : "Send"}</button>
                        </Form>
                    )}
                </Formik>
            </div>
        </section>
    )
}

export default Contact