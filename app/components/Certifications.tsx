'use client';
import { motion } from 'framer-motion';

export default function Certifications() {
  const certifications = [
    {
      name: 'MS Excel',
      issuer: 'Coursera',
    },
    {
      name: 'MySQL for Data Management',
      issuer: 'Great Learning',
    },
  ];

  return (
    <section id="certifications" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-8 text-center text-gray-800 dark:text-white"
        >
          Certifications
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-lg"
            >
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">{cert.name}</h3>
              <p className="text-gray-600 dark:text-gray-300 mt-2">{cert.issuer}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}