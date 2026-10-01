import { motion } from "framer-motion";

export default function StatCard({ title, value }) {
  return (
    <motion.div
      whileHover={{ scale: 1.07 }}
      className="relative p-6 rounded-2xl bg-gradient-to-br from-[#020617] to-[#0f172a] border border-white/10 shadow-2xl overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 opacity-0 hover:opacity-100"></div>

      <h3 className="text-gray-400 text-sm">{title}</h3>

      <p className="text-4xl font-bold mt-2 text-white">
        {value}
      </p>
    </motion.div>
  );
}