import { motion } from "framer-motion";
import { Info } from "lucide-react";

export const EligibilityRules=()=> {
  const rules = [
    "Only users who joined the waitlist before the testing phase began are eligible.",
    "New sign-ups after April 22nd will not qualify for rewards but can explore limited features.",
    "Rewards will be shared among all eligible testers — it is not a winner-takes-all system.",
  ];

  return (
    <section className="w-full px-6 py-20 bg-[#EAF3FF]">
      <div className="max-w-4xl mx-auto">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-[#1A1D21]">
            Eligibility Rules 
          </h2>
          <p className="text-[#4A4A4A] mt-3 text-lg">
            Please read carefully to understand reward qualification.
          </p>
        </motion.div>

        {/* Card Container */}
        <div className="space-y-6">
          {rules.map((rule, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.45, delay: idx * 0.08 }}
              className="bg-white border border-[#C7D7FF] rounded-2xl shadow-lg overflow-hidden"
            >
              {/* Blue Strip */}
              <div className="bg-gradient-to-r from-[#356DFF] to-[#6A8CFF] h-2 w-full"></div>

              {/* Content */}
              <div className="p-6 flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#F0F6FF] flex items-center justify-center shadow-inner">
                  <Info className="w-6 h-6 text-[#356DFF]" />
                </div>

                <p className="text-[#1A1D21] text-lg leading-relaxed font-medium">
                  {rule}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

