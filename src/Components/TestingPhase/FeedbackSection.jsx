import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export default function FeedbackSection() {
  return (
    <section className="w-full py-20 px-6 bg-gradient-to-r from-[#4CC7C9] to-[#4A3AFF] text-white">
      <div className="max-w-2xl mx-auto text-center space-y-6">
        {/* Icon */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center"
        >
          <MessageCircle className="w-12 h-12" />
        </motion.div>

        {/* Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl font-semibold"
        >
          Feedback Submission
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-base leading-relaxed"
        >
          At the end of testing, fill the feedback form below. Your feedback directly
          influences what we improve before the public launch.
        </motion.p>

        {/* Feedback Link */}
        <motion.a
          href="https://forms.gle/GavMQJsJgCUfouUT7" 
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="inline-flex items-center gap-2 bg-white text-[#4A3AFF] px-6 py-3 rounded-xl text-lg font-medium shadow-md hover:shadow-lg transition-all duration-200 hover:bg-gray-100"
        >
          <MessageCircle className="w-5 h-5" /> 👉 Feedback Form
        </motion.a>
      </div>
    </section>
  );
}