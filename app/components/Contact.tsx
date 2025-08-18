'use client';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';

interface FormData {
  name: string;
  email: string;
  message: string;
}

export default function Contact() {
  const { register, handleSubmit, reset } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    console.log('Form submitted:', data);
    reset();
  };

  return (
    <section id="contact" className="py-16 px-4 bg-gray-100 dark:bg-gray-800">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-xl mx-auto space-y-6"
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <input {...register('name')} placeholder="Name" className="w-full p-3 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200" />
          <input {...register('email')} placeholder="Email" className="w-full p-3 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200" />
          <textarea {...register('message')} placeholder="Message" className="w-full p-3 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 h-32" />
          <motion.button type="submit" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition">
            Send Message
          </motion.button>
        </form>
      </motion.div>
    </section>
  );
}