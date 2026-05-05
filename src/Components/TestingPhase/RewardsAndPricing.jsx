//UPDATED DESIGN
 // RewardsAndPricing.jsx (UPDATED → Reward Structure)

import { motion } from "framer-motion";
import { Gift, Video, Users } from "lucide-react";

export const RewardsAndPricing = () => {
  const items = [
    {
      icon: Gift,
      title: "1. Testing Phase Rewards — ₦200,000",
      desc: `For users who complete 100% of tasks and earn the Beta Badge.
Rewards are shared among all eligible testers.`,
      color: "from-[#4C7BFF] to-[#86A8FF]",
    },
    {
      icon: Video,
      title: "2. Video Creator Contest — ₦100,000",
      desc: `Create and share a short video about joining or your experience using AremxyPlug.
Post on social platforms, tag AremxyPlug, and use required hashtags.

Top 10 creators share ₦100,000 equally.`,
      color: "from-[#3E90FF] to-[#75BAFF]",
    },
    {
      icon: Users,
      title: "3. Referral Contest — 100,000 Points",
      desc: `Invite users using your referral link. Only verified and active referrals count.

Earn 50 points per referral + bonus points for signup and KYC.
Points convert to real cash and future platform benefits.`,
      color: "from-[#4CC7C9] to-[#7AE7E8]",
    },
  ];

  return (
    <section className="w-full px-6 py-20 bg-[#F4F8FF]">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl font-bold text-[#1A1D21]">
            Reward Structure
          </h2>
          <p className="text-[#4A4A4A] mt-3 text-lg">
            3 separate ways to earn during the testing phase.
          </p>
        </motion.div>

        {/* Cards (UNCHANGED STRUCTURE) */}
        <div className="grid md:grid-cols-3 gap-8">
          {items.map((item, idx) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.45, delay: idx * 0.08 }}
                className="bg-white rounded-2xl border border-[#D3E0FF] shadow-lg overflow-hidden flex flex-col"
              >
                {/* Gradient Strip */}
                <div className={`h-2 w-full bg-gradient-to-r ${item.color}`}></div>

                {/* Content */}
                <div className="p-6 flex flex-col gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#F0F6FF] flex items-center justify-center shadow-inner">
                    <Icon className="w-6 h-6 text-[#356DFF]" />
                  </div>

                  <h3 className="text-lg font-semibold text-[#1A1D21] leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-[#4A4A4A] text-[14px] leading-relaxed whitespace-pre-line">
                    {item.desc}
                  </p>
                </div>
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
            <span className="block mb-2">
              Participate in one — or all three tracks.
            </span>
            <span className="block">
              The more you engage, the more you earn.
            </span>
          </p>
        </motion.div>

      </div>
    </section>
  );
};
// OLD DESIGN
// import { motion } from "framer-motion";
// import { Gift, Users, Star } from "lucide-react";

// export const  RewardsAndPricing=()=> {
//   const items = [
//     {
//       icon: Gift,
//       title: "Total Reward Pool",
//       desc: "₦200,000 total cash rewards allocated for testers.",
//       color: "from-[#4C7BFF] to-[#86A8FF]",
//     },
//     {
//       icon: Users,
//       title: "Distribution",
//       desc: "Rewards are shared among all testers who complete the required steps — not winner-takes-all.",
//       color: "from-[#3E90FF] to-[#75BAFF]",
//     },
//     {
//       icon: Star,
//       title: "AremxyPlug Reward Points",
//       desc: "Earn exclusive points redeemable for future bonuses, discounts, perks, and early feature unlocks.",
//       color: "from-[#4CC7C9] to-[#7AE7E8]",
//     },
//   ];

//   return (
//     <section className="w-full px-6 py-20 bg-[#F4F8FF]">
//       <div className="max-w-5xl mx-auto">

//         {/* Section Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           className="text-center mb-14"
//         >
//           <h2 className="text-4xl font-bold text-[#1A1D21]">
//             Rewards & Prize Pool
//           </h2>
//           <p className="text-[#4A4A4A] mt-3 text-lg">
//             Here’s what you stand to gain for completing the testing program.
//           </p>
//         </motion.div>

//         {/* Cards */}
//         <div className="grid md:grid-cols-3 gap-8">
//           {items.map((item, idx) => {
//             const Icon = item.icon;

//             return (
//               <motion.div
//                 key={idx}
//                 initial={{ opacity: 0, scale: 0.96 }}
//                 whileInView={{ opacity: 1, scale: 1 }}
//                 transition={{ duration: 0.45, delay: idx * 0.08 }}
//                 className="bg-white rounded-2xl border border-[#D3E0FF] shadow-lg overflow-hidden flex flex-col"
//               >
//                 {/* Gradient Top Strip */}
//                 <div className={`h-2 w-full bg-gradient-to-r ${item.color}`}></div>

//                 {/* Content */}
//                 <div className="p-6 flex flex-col gap-4">
//                   <div className="w-12 h-12 rounded-xl bg-[#F0F6FF] flex items-center justify-center shadow-inner">
//                     <Icon className="w-6 h-6 text-[#356DFF]" />
//                   </div>

//                   <h3 className="text-xl font-semibold text-[#1A1D21] leading-tight">
//                     {item.title}
//                   </h3>

//                   <p className="text-[#4A4A4A] text-[15px] leading-relaxed">
//                     {item.desc}
//                   </p>
//                 </div>
//               </motion.div>
//             );
//           })}
//         </div>

//         {/* Conclusion Section */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="mt-16 bg-white border border-[#C7D7FF] rounded-2xl shadow-md p-8 text-center"
//         >
//           <p className="text-[#1A1D21] text-lg font-medium leading-relaxed">
//             <span className="block mb-2">No leaderboard. No competition.</span>
//             <span className="block">
//               If you complete the testing steps — <span className="font-semibold text-[#356DFF]">you earn rewards</span>.
//             </span>
//           </p>
//         </motion.div>
//       </div>
//     </section>
//   );
// }