'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4 text-center"
      >
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gray-800 dark:text-white">
          Hi, I&apos;m <span className="text-blue-600 dark:text-blue-400">D Lalithraj</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8">
          Aspiring Data Analyst and System Engineer
        </p>
        <Link
          href="/resume.pdf"
          className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition"
        >
          View Resume
        </Link>
      </motion.div>
    </section>
  );
}