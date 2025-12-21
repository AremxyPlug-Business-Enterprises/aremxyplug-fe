import { motion } from "framer-motion";
import {  Crown } from "lucide-react";
import {Link} from "react-router-dom"

export const StepsToEarnRewards=()=>  {
  const steps = [
    {
      step: 1,
      title: "Sign Up",
      desc: `Create an account at`,
    },
    {
      step: 2,
      title: "Complete KYC Verification",
      desc: "Verify your identity to unlock all app features.",
    },
    {
      step: 3,
      title: "Generate a Virtual Account",
      desc: "Activate your AremxyPlug virtual bank account.",
    },
    {
      step: 4,
      title: "Fund Your Wallet (Minimum ₦100)",
      desc: "Deposit at least ₦100 to get started.",
    },
    {
      step: 5,
      title: "Complete ₦1,000+ Total Transactions",
      desc: "Accumulate at least ₦1,000 in airtime, data, bills, or transfers.",
    },
    {
      step: 6,
      title: "Complete at least One Point Redeem Transaction.",
      desc:  "Redeem minimum of 10 points in a single transaction. Max is 100 points."
     ,
    },
    {
      step: 7,
      title: "Submit the Feedback Form",
      desc: "Share your testing experience (required).",
    },
  ];

  return (
    <section className="w-full px-6 py-20 bg-gradient-to-b from-white to-[#F5FAFF]">
      <div className="max-w-4xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl font-bold text-[#1A1D21]">
            How to Participate & Earn Rewards
          </h2>
          <p className="text-[#4A4A4A] mt-3 text-lg">
            Complete all steps to qualify for points, cash rewards, and bonuses.
          </p>
        </motion.div>

        {/* Steps Timeline */}
        <div className="relative">
          {/* Line */}
          <div className="absolute left-8 top-0 w-1 h-full bg-[#E4E9F2] rounded-full"></div>

          <div className="space-y-10">
            {steps.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.45, delay: index * 0.05 }}
                className="relative flex items-start gap-6"
              >
                {/* Step Number Bubble */}
                <div className="flex items-center justify-center w-14 h-14 rounded-full bg-white border border-[#D7E1F1] shadow-sm text-xl font-semibold text-[#4A3AFF] z-10">
                  {item.step}
                </div>

                {/* Text */}
                <div>
                  <h3 className="text-xl font-semibold text-[#1A1D21]">
                    {item.title}
                  </h3>
                  <p className="text-[#4A4A4A] mt-1 text-[15px] leading-relaxed">
                    {item.desc} {" "}
                    {index === 0 && (
                      <Link to ="/signUp" className = "text-blue-500">
                        Sign Up
                      </Link>
                    )}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Footer Notice */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="mt-14 bg-[#F0F6FF] border border-[#DAE4FF] rounded-2xl p-6 flex items-start gap-4 shadow-sm"
        >
          <Crown className="w-8 h-8 text-[#4A3AFF]" />
          <p className="text-[#1A1D21] text-lg leading-relaxed font-medium">
            Only testers who complete <span className="font-bold">all steps</span> will be
            eligible to earn rewards, points, and bonuses.
          </p>
        </motion.div>
      </div>
    </section>
  );
}