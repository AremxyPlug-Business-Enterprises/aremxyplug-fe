import { motion } from "framer-motion";
import { Mail, CheckCircle, Clock } from "lucide-react";

export default function RewardDistributionMinimal() {
  const steps = [
    {
      icon: Clock,
      title: "Review Submissions",
      desc: "Our team will review all submissions and validate eligible testers.",
    },
    {
      icon: CheckCircle,
      title: "Process Rewards",
      desc: "Rewards will be processed and distributed to all eligible testers via their AremxyPlug accounts within 2 – 4 weeks after the public launch.",
    },
    {
      icon: Mail,
      title: "Notification",
      desc: "All testers will receive email notifications once rewards are distributed.",
    },
  ];

  return (
    <section className="w-full py-20 px-6 bg-white text-gray-900">
      <div className="max-w-4xl mx-auto text-center">

        {/* Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-6 text-[#356DFF]"
        >
          Reward Distribution
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-lg mb-12 text-gray-600"
        >
          Here’s how rewards will be handled after the testing period.
        </motion.p>

        {/* Steps Layout */}
        <div className="flex flex-col md:flex-row justify-between gap-8">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="flex-1 flex flex-col items-center text-center"
              >
                <div className="bg-[#E4F0FF] text-[#356DFF] rounded-full p-4 mb-4 shadow-md">
                  <Icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-[#356DFF]">{step.title}</h3>
                <p className="text-gray-600 text-base">{step.desc}</p>
              </motion.div>
            );
          })}
        </div>
        
        {/* Updated Conclusion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-16 bg-white border border-[#C7D7FF] rounded-2xl shadow-md p-8 text-center"
        >
          <p className="text-[#1A1D21] text-lg font-medium leading-relaxed">
            <span className="block mb-2 font-semibold text-lg">
              ⚠️ Reward Distribution Disclaimer 
            </span>
            <span className="block">
              All rewards are subject to verification. AremxyPlug reserves the right to review,
               validate, and disqualify any participant that does not meet 
               the stated requirements. Only eligible and verified
                activities will be rewarded. Final decisions on reward 
                distribution remain at AremxyPlug’s discretion.

            </span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}