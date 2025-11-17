import { motion } from "framer-motion";
import { Mail, Globe } from "lucide-react";

export default function Conclusion() {
  return (
    <section className="w-full py-20 px-6 bg-gradient-to-r from-[#4A90FF] to-[#70B7FF] text-white">
      <div className="max-w-3xl mx-auto text-center space-y-8">

        {/* Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold"
        >
          Need Help?
        </motion.h2>

        {/* Support Info */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="space-y-4 text-lg"
        >
          <p>If you encounter any issue during testing, reach out:</p>
          <div className="flex justify-center items-center gap-4">
            <Mail className="w-5 h-5" />
            <a href="mailto:support@aremxyplug.com" className="underline hover:text-gray-200">
              support@aremxyplug.com
            </a>
          </div>
          <div className="flex justify-center items-center gap-4">
            <Globe className="w-5 h-5" />
            <a href="https://aremxyplug.com" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-200">
              https://aremxyplug.com
            </a>
          </div>

          <p className="mt-4">
            Thank you for helping us build this. Together, we’re shaping the next evolution of digital payments and telecom services.
          </p>
          <p className="font-semibold mt-2">— AremxyPlug Team</p>
        </motion.div>

        {/* Call to Action Button */}
        <motion.a
          href="/signUp"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="inline-block mt-8 bg-white text-[#4A90FF] font-bold px-10 py-4 rounded-full text-xl shadow-lg hover:shadow-xl hover:bg-gray-100 transition-all duration-200"
        >
          🚀 Start Testing Now
        </motion.a>
      </div>
    </section>
  );
}