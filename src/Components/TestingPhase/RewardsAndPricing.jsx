//UPDATED DESIGN
 // RewardsAndPricing.jsx (UPDATED → Reward Structure)


 // RewardStructure.jsx (Improved Hierarchy)

import { motion } from "framer-motion";
import { Gift, Video, Users } from "lucide-react";

export const RewardsAndPricing = () => {
  const tracks = [
    {
       id : 1,
      icon: Gift,
      title: "1. Testing Phase Rewards — ₦200,000",
      sections: [
        {
          type: "list",
          items: [
            "For users who complete 100% of tasks",
            "Must earn the Beta Badge",
            "Rewards are shared among all eligible testers",
          ],
        },
      ],
    },
    {
      id : 2,
      icon: Video,
      title: "2. Video Creator Contest — ₦100,000",
      sections: [
        {
          heading: "How to Join",
          type: "list",
          items: [
            "Sign up and complete KYC",
            "Complete testing tasks",
            "Create a short video (How to join OR your experience)",
            "Post on X, Instagram, Facebook, TikTok, or YouTube",
            "Follow AremxyPlug across all socials",
            "Tag AremxyPlug official accounts",
            "Use hashtags: #AremxyPlug #TestingPhase #VideoContest",
            "Submit your entry via the official form",
          ],
        },
        {
          heading: "Reward",
          type: "list",
          items: [
            "Top 10 creators",
            "₦100,000 shared equally",
          ],
        },
      ],
    },
    {
      id : 3,
      icon: Users,
      title: "3. Referral Contest — 100,000 Points",
      sections: [
        {
          heading: "How It Works",
          type: "list",
          items: [
            "Share your referral link/code",
            "Invite users to sign up and participate",
            "Only verified and active referrals will count",
          ],
        },
        {
          heading: "Reward",
          type: "list",
          items: [
            "Total: 100,000 Points",
            "Distributed among top referrers",
            "Earn 50 points per verified referral",
            "Higher veified referrals = higher reward share",
          ],
        },
        {
          heading: "Extra Reward",
          type: "list",
          items: [
            "Earn 50 points when you successfully sign up",
            "Earn 50 points when you complete your account verification (KYC)",
            "All reward points can be converted to real quick cash."

          ],
        },
        {
          type: "note",
          text: "Points earned from referrals are separate from Testing Phase rewards and can be redeemed based on future platform benefits."
        },
      ],
    },
  ];

  return (
    <section className="w-full px-6 py-20 bg-[#F4F8FF]">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl font-bold text-[#1A1D21]">
            Reward Structure
          </h2>
          <p className="text-[#4A4A4A] mt-3 text-lg">
            3 ways to earn during the testing phase.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="space-y-8">
          {tracks.map((track, idx) => {
            const Icon = track.icon;

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white border border-[#D3E0FF] rounded-2xl shadow-lg overflow-hidden"
              >
                {/* Gradient Strip */}
                <div className="h-2 w-full bg-gradient-to-r from-[#4C7BFF] to-[#86A8FF]" />

                {/* Content */}
                <div className="p-8 flex flex-col md:flex-row gap-6">

                  {/* Icon */}
                  <div className="w-14 h-14 rounded-xl bg-[#F0F6FF] flex items-center justify-center shadow-inner shrink-0">
                    <Icon className="w-7 h-7 text-[#356DFF]" />
                  </div>

                  {/* Text */}
                  <div className="flex-1 space-y-6">
                    <h3 className="text-xl font-semibold text-[#1A1D21]">
                      {track.title}
                    </h3>

                    {/* Sections */}
            
{track.sections.map((section, i) => (
  <div key={i} className="space-y-3">

    {/* Subheading (IMPROVED VISIBILITY) */}
    {section.heading && (
      <div className="flex items-center gap-3 mt-4">
        <div className="w-1.5 h-5 bg-[#356DFF] rounded-full"></div>
        <p className="text-base font-semibold text-[#1A1D21]">
          {section.heading}
        </p>
      </div>
    )}

    {/* List */}
    {section.type === "list" && (
      <ul className="space-y-2 text-[#4A4A4A] text-[15px] pl-4">
        {section.items.map((item, j) => (
          <li key={j} className="flex flex-col md:flex-row gap-2 ">
            <span className="text-[#1A1D21] mt-[2px]">• {item}  {" "} </span>
          
              {item === "Submit your entry via the official form" && (
              <a href={" https://forms.gle/AUAq9sjGvJzoSrVy5"}
                className="text-blue-400 ">
                https://forms.gle/AUAq9sjGvJzoSrVy5
             </a>
              )}
          </li>
        ))}
      </ul>
    )}

    {/* Note */}
    {section.type === "note" && (
      <div className="bg-[#F0F6FF] border border-[#D3E0FF] px-4 py-3 rounded-lg">
        <p className="text-sm text-[#1A1D21] leading-relaxed">
          {section.text}
        </p>
      </div>
    )}
  </div>
))}

                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Conclusion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-16 text-center"
        >
          <p className="text-lg text-[#1A1D21] font-medium">
            You can participate in all three tracks — the more you engage, the more you earn.
          </p>
        </motion.div>

      </div>
    </section>
  );
};
