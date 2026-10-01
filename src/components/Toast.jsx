import { motion } from "framer-motion";

export default function Toast({ message }) {
  if (!message) return null;

  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 20, opacity: 1 }}
      exit={{ opacity: 0 }}
      style={{
        position: "fixed",
        top: "20px",
        right: "20px",
        background: "#0ea5e9",
        padding: "12px 20px",
        borderRadius: "10px",
        color: "white",
        zIndex: 999
      }}
    >
      {message}
    </motion.div>
  );
}