import { motion } from "framer-motion";
import {
  ShieldCheck,
  Banknote,
  Wallet,
  Smartphone,
  ArrowLeftRight,
  Users,
  ListOrdered,
  BarChart3,
  Gift,
} from "lucide-react";

export const TestingFeature=()=> {
  const features = [
    {
      icon: <ShieldCheck className="w-6 h-6 text-blue-600" />,
      title: "KYC Verification",
      description: "Upload your ID and complete identity verification smoothly.",
    },
    {
      icon: <Banknote className="w-6 h-6 text-blue-600" />,
      title: "Virtual Account Generation",
      description: "Generate a fully functional virtual bank account.",
    },
    {
      icon: <Wallet className="w-6 h-6 text-blue-600" />,
      title: "Wallet Funding",
      description: "Deposit funds through your virtual account.",
    },
    {
      icon: <Smartphone className="w-6 h-6 text-blue-600" />,
      title: "Airtime / Data / Bills",
      description: "Purchase airtime, data, or successfully pay bills.",
    },
    {
      icon: <ArrowLeftRight className="w-6 h-6 text-blue-600" />,
      title: "Internal Wallet Transfer",
      description: "Send funds instantly to another AremxyPlug user.",
    },
    {
      icon: <Users className="w-6 h-6 text-blue-600" />,
      title: "Referral System",
      description: "Share your link/code and track referred users.",
    },
    {
      icon: <ListOrdered className="w-6 h-6 text-blue-600" />,
      title: "Transaction History",
      description: "View completed transactions and details.",
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-blue-600" />,
      title: "Wallet & Sales Summary",
      description: "Monitor wallet analytics and sales insights.",
    },
    {
      icon: <Gift className="w-6 h-6 text-blue-600" />,
      title: "Points Redemption",
      description: "Earn points and redeem them for rewards.",
    },
  ];

  return (
    <section className="w-full px-6 py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-6xl mx-auto">
        
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-900">
            What You’ll Be Testing
          </h2>
          <p className="text-gray-600 mt-2 text-lg">
            Explore the key features available during the early access testing.
          </p>
        </motion.div>

        {/* Table Container */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="overflow-hidden rounded-2xl shadow-lg bg-white border border-gray-100"
        >
          <table className="w-full">
            <thead className="bg-[#0A2540] text-white">
              <tr>
                <th className="py-4 px-6 text-left text-lg font-semibold">
                  Feature
                </th>
                <th className="py-4 px-6 text-left text-lg font-semibold">
                  What to Test
                </th>
              </tr>
            </thead>

            <tbody>
              {features.map((item, index) => (
                <motion.tr
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className={`border-t border-gray-100 hover:bg-yellow-50 transition-all duration-300 ${
                    index % 2 === 0 ? "bg-blue-50/40" : "bg-white"
                  }`}
                >
                  {/* Feature Cell */}
                  <td className="py-5 px-6 flex items-center gap-3 text-gray-800">
                    {item.icon}
                    <span className="font-medium">{item.title}</span>
                  </td>

                  {/* Description Cell */}
                  <td className="py-5 px-6 text-gray-700 leading-relaxed">
                    {item.description}
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </div>
    </section>
  );
}

