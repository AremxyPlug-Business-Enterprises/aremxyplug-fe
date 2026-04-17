import { motion } from "framer-motion";

export default function TestingHeroSection() {
  return (
    <section className="w-full z-[0px] mt-[-60px] relative overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 top-0 animate-gradient
      bg-gradient-to-r from-blue-500 via-pink-300 to-teal-400
       opacity-30 -z-10"></div>

      <div className="max-w-6xl mx-auto pt-[160px] px-6 py-32 flex flex-col 
      lg:flex-row gap-16 items-center justify-between">
        {/* Left Column: Welcome Text */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="flex-1 text-center lg:text-left"
        >
          <h1 className="text-5xl font-bold text-[#1A1D21] mb-6">
            Welcome, Early Testers 👋
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed">
            Thank you for being part of the AremxyPlug early users community.
            From 22 April to 06 May, we’re opening controlled
             access to our platform to allow waitlisted users to test, 
             explore, and help improve the product before public launch.
          </p>
        </motion.div>

        {/* Right Column: Testing Steps */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="flex-1 space-y-6 bg-white/90 backdrop-blur-md rounded-2xl p-8 shadow-lg"
        >
          <h2 className="text-2xl font-semibold text-[#356DFF]">This testing phase allows you to:</h2>
          <ul className="list-disc list-inside text-gray-800 space-y-2 text-lg">
            <li>Experience real transactions</li>
            <li>Help us identify improvements</li>
            <li>Earn rewards from our ₦200,000 prize pool + points</li>
          </ul>
        </motion.div>
      </div>

      {/* Conclusion Message */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="mt-16 text-center px-6 max-w-4xl mx-auto"
      >
        <p className="text-2xl lg:text-3xl font-semibold text-[#1A1D21] leading-relaxed">
          You are not just testing — <span className="bg-clip-text text-transparent animate-gradient-text" style={{backgroundImage: 'linear-gradient(-155deg, rgba(23, 102, 238, 0.295), #ffdbde82, #1fddff73, #ff85ae7c, rgba(107, 102, 255, 0.536), #ffb58a7f, #19dfdf86)'}}>you’re shaping the future of AremxyPlug.</span>
        </p>
      </motion.div>

      {/* Gradient Animation Styles */}
      <style jsx>{`
        @keyframes gradientAnimation {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient {
          background-size: 400% 400%;
          animation: gradientAnimation 15s ease infinite;
        }
        .animate-gradient-text {
          background-clip: text;
          -webkit-background-clip: text;
          color: transparent;
          background-size: 400% 400%;
          animation: gradientAnimation 15s ease infinite;
        }
      `}</style>
    </section>
  );
}