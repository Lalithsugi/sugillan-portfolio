'use client';
import { motion } from 'framer-motion';

export default function Experience() {
  const experiences = [
    {
      role: 'System Engineer Trainee',
      company: 'Infosys Pvt Ltd',
      period: '2022-2023',
      descriptions: [
        'Completed training in automation testing, using tools like Selenium and SOAP UI to validate system functionalities.',
        'Worked on internal projects focused on testing procedures, data validation, and reporting test results.',
        'Developed strong skills in data handling, data accuracy validation, and quality assurance processes.',
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-8 text-center text-gray-800 dark:text-white"
        >
          Experience
        </motion.h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-lg"
            >
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">{exp.role} — {exp.company}</h3>
              <p className="text-gray-600 dark:text-gray-300">{exp.period}</p>
              <ul className="list-disc pl-5 mt-2 text-gray-600 dark:text-gray-300">
                {exp.descriptions.map((desc, i) => (
                  <li key={i}>{desc}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}