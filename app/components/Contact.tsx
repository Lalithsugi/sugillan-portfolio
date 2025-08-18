'use client';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';

interface FormData {
  name: string;
  email: string;
  message: string;
}

export default function Contact() {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data: FormData) => {
    console.log('Form submitted:', data);
    reset();
  };

  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-8 text-center text-gray-800 dark:text-white"
        >
          Contact
        </motion.h2>
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          onSubmit={handleSubmit(onSubmit)}
          className="max-w-xl mx-auto space-y-6"
        >
          <input
            {...register('name')}
            placeholder="Name"
            className="w-full p-3 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200"
          />
          <input
            {...register('email')}
            placeholder="Email"
            className="w-full p-3 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200"
          />
          <textarea
            {...register('message')}
            placeholder="Message"
            className="w-full p-3 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 h-32"
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Submit
          </button>
        </motion.form>
      </div>
    </section>
  );
}