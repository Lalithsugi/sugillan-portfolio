'use client';
import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section id="contact" className="py-16 px-4 bg-gray-100 dark:bg-gray-800">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-xl mx-auto space-y-6"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-8 text-center">
          Contact Me
        </h2>
        {/* Static Contact Details */}
        <div className="mt-6 text-center text-gray-600 dark:text-gray-400">
          <p className="mb-2">📞 +91 8925402857</p>
          <p className="mb-2">📧 <a href="mailto:lalithrajnps@gmail.com" className="underline">lalithrajnps@gmail.com</a></p>
          <p>📍 Velachery, Chennai, India</p>
        </div>
      </motion.div>
    </section>
  );
}