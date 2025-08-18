'use client';
import { motion } from 'framer-motion';

export default function Education() {
  const educations = [
    {
      degree: 'BE Mechanical Engineering',
      institution: 'Meenakshi Sundararajan Engineering College',
      period: '2015-2019',
      score: 'CGPA: 7.66 / 10',
    },
    {
      degree: 'HSC (12th)',
      institution: 'SDAV Higher Secondary School',
      period: '2014-2015',
      score: 'Marks: 87 / 100',
    },
    {
      degree: 'SSLC (10th)',
      institution: 'National Public School (CBSE)',
      period: '2012-2013',
      score: 'CGPA: 8.0 / 10',
    },
  ];

  return (
    <section id="education" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-8 text-center text-gray-800 dark:text-white"
        >
          Education
        </motion.h2>
        <div className="space-y-8">
          {educations.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg"
            >
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">{edu.degree}</h3>
              <p className="text-gray-600 dark:text-gray-300">{edu.institution} | {edu.period}</p>
              <p className="text-gray-600 dark:text-gray-300">{edu.score}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}