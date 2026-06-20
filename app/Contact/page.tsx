"use client"
import { motion } from "framer-motion";
import { Field, Form, Formik } from 'formik';
import * as Yup from "yup";
import { log } from "console";
import { Send } from "lucide-react";
import emailjs from "@emailjs/browser";


/////////Yup کتابخانه اعتبارسنجی است.
// قوانین فرم را تعریف می‌کنیم

const validationSchema = Yup.object({

    name: Yup.string()
        .min(3, 'name must be at least 3 characters')
        .required('name is required'),

    email: Yup.string()
        .email('Invalid email addres')
        .required('email is required'),

    message: Yup.string()
        .min(10, "Message must be at least 10 characters")
        .required('Message  is required'),

});




export default function Contact() {
    return (
        <div className="my-20 lg:my-32 py-14 lg:py-20 bg-[#111827]">
            <motion.div
                initial={{
                    opacity: 0,
                    y: 50,
                }}
                whileInView={{
                    opacity: 1,
                    y: 0,
                }}
                viewport={{
                    once: true,
                    amount: 0.3,
                }}
                transition={{
                    duration: 0.9
                }}
            >


                <div className="text-center">
                    <h1 className="text-4xl font-bold">Contact</h1>
                    <p className="mt-4">Let's work together on your next project</p>
                </div>
            </motion.div>
            {/* Form Contact */}
            <div className="mt-24 lg:w-[60%] mx-auto">
                <Formik
                    initialValues={{
                        name: '',
                        email: '',
                        message: '',
                    }}
                    validationSchema={validationSchema}
                    onSubmit={async (values, { resetForm }) => {
                        try {
                            await emailjs.send(
                                "service_ivwn9jm",
                                "template_ijoc83h",

                                {
                                    name: values.name,
                                    email: values.email,
                                    message: values.message,
                                },
                                "tMUKh5SrJX9bRLPah"
                            );
                            alert("Message sent successfully");
                            resetForm();
                        } catch (err) {
                            console.log(err);
                            alert("Error sending message");
                        }

                        alert('Form submitted')
                        resetForm()

                    }}
                >
                    {(props) => (
                        <Form onSubmit={props.handleSubmit} className="*:mb-6">
                            {/* name */}
                            <motion.div
                                initial={{
                                    opacity: 0,
                                    y: 50,
                                }}
                                whileInView={{
                                    opacity: 1,
                                    y: 0,
                                }}
                                viewport={{
                                    once: true,
                                    amount: 0.3,
                                }}
                                transition={{
                                    duration: 0.3
                                }}
                            >
                                <label htmlFor="name" className="text-[#99A1AF]">Name</label>
                                <input
                                    type="text"
                                    placeholder="Your name"
                                    name="name"
                                    value={props.values.name}
                                    onChange={props.handleChange}
                                    onBlur={props.handleBlur}
                                    className="w-full border border-[#ff6a3d9a] p-3 rounded-lg bg-[#0b1220]"
                                />
                                {props.touched.name &&
                                    props.errors.name &&
                                    <p className="text-red-500 text-sm mt-1">{props.errors.name}</p>
                                }
                            </motion.div>
                            {/* email */}
                            <motion.div
                                initial={{
                                    opacity: 0,
                                    y: 50,
                                }}
                                whileInView={{
                                    opacity: 1,
                                    y: 0,
                                }}
                                viewport={{
                                    once: true,
                                    amount: 0.3,
                                }}
                                transition={{
                                    duration: 0.5
                                }}
                            >
                                <label htmlFor="email" className="text-[#99A1AF]">Email</label>
                                <input type="email"
                                    placeholder="Your email"
                                    name="email"
                                    value={props.values.email}
                                    onChange={props.handleChange}
                                    onBlur={props.handleBlur}
                                    className="w-full border border-[#ff6a3d9a] p-3 rounded-lg bg-[#0b1220]"
                                />
                                {props.touched.email &&
                                    props.errors.email && (
                                        <p className="text-red-500 text-sm mt-1">
                                            {props.errors.email}
                                        </p>
                                    )
                                }
                            </motion.div>
                            {/* Message */}
                            <motion.div
                                initial={{
                                    opacity: 0,
                                    y: 50,
                                }}
                                whileInView={{
                                    opacity: 1,
                                    y: 0,
                                }}
                                viewport={{
                                    once: true,
                                    amount: 0.3,
                                }}
                                transition={{
                                    duration: 0.7
                                }}
                            >
                                <label htmlFor="message" className="text-[#99A1AF]">Message</label>
                                <textarea
                                    name="message"
                                    placeholder="Tell me about your project..."
                                    rows={5}
                                    value={props.values.message}
                                    onChange={props.handleChange}
                                    onBlur={props.handleBlur}
                                    className="w-full border border-[#ff6a3d9a] p-3 rounded-lg bg-[#0b1220]"
                                />

                                {props.touched.message &&
                                    props.errors.message && (
                                        <p className="text-red-500 text-sm mt-1">
                                            {props.errors.message}
                                        </p>
                                    )}
                            </motion.div>
                            {/* submit */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 0.9 }}
                            >
                                <button
                                    type="submit"
                                    disabled={props.isSubmitting}
                                    className="bg-[#ff6a3d] flex w-full justify-center items-center p-4 rounded-lg shadow-6xl shadow-[#ff6a3d]"
                                >
                                    Send Message
                                    <Send size={20} className="ml-1" />
                                </button>
                            </motion.div>
                        </Form>
                    )}


                </Formik>
            </div>

        </div>
    )
}
