"use client";

import { motion } from "framer-motion";
import { Loader2 } from "lucide-react"; 

const Loading = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#e0f7fa] to-[#e1bee7]">
      <motion.div
        className="flex flex-col items-center space-y-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Loader2 className="animate-spin text-[#6a1b9a]" size={48} />
        <h1 className="text-2xl font-semibold text-[#6a1b9a] animate-pulse">Loading, please wait...</h1>
      </motion.div>
    </div>
  );
};

export default Loading;
