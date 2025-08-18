'use client';
import { motion } from 'framer-motion';

export default function About() {
  const skills = {
    'Data Analysis & Visualization Tools': ['MS Excel (Advanced functions, Pivot Tables, Charts)', 'Power BI (Dashboard creation, data modelling, and visualization)'],
    'Database Management': ['MySQL'],
    'Programming Languages': ['Python (Basics)'],
    'Automation Testing Tools': ['Selenium', 'SOAP UI (for data validation exposure)'],
    'Other Skills': ['Strong analytical and problem-solving skills', 'Excellent communication and interpersonal skills', 'Fast learner, motivated, and dedicated team player'],
  };

  const languages = ['English', 'Tamil', 'Hindi (basic)'];

  const interests = ['Data Analysis', 'Business Intelligence', 'Data Visualization', 'Database Management'];

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-8 text-center text-gray-800 dark:text-white"
        >
          About Me
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
              Detail-oriented and analytical aspiring Data Analyst with foundational skills in Python, MySQL, MS Excel, and Power BI. Certified in database management and data handling tools, with a keen interest in extracting insights from data to support business decision-making. Able to create interactive dashboards and visual reports using Power BI. Eager to contribute to a dynamic organization as a fresher and build a career in data analysis.
            </p>
            <div className="mb-4">
              <h4 className="text-xl font-medium text-gray-700 dark:text-gray-200">Languages</h4>
              <div className="flex flex-wrap gap-2 mt-2">
                {languages.map((lang) => (
                  <span
                    key={lang}
                    className="bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 px-3 py-1 rounded-full text-sm"
                  >
                    {lang}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-xl font-medium text-gray-700 dark:text-gray-200">Field of Interest</h4>
              <div className="flex flex-wrap gap-2 mt-2">
                {interests.map((interest) => (
                  <span
                    key={interest}
                    className="bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 px-3 py-1 rounded-full text-sm"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">Skills</h3>
            {Object.entries(skills).map(([category, items]) => (
              <div key={category} className="mb-4">
                <h4 className="text-xl font-medium text-gray-700 dark:text-gray-200">{category}</h4>
                <div className="flex flex-wrap gap-2 mt-2">
                  {items.map((skill) => (
                    <span
                      key={skill}
                      className="bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 px-3 py-1 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}