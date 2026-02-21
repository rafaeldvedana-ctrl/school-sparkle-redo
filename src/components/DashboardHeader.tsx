import { Bell, BookOpen } from "lucide-react";
import { motion } from "framer-motion";

const DashboardHeader = () => {
  const now = new Date();
  const hours = now.getHours();
  const greeting =
    hours < 12 ? "Bom dia" : hours < 18 ? "Boa tarde" : "Boa noite";

  const formattedDate = now.toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "2-digit",
  });
  const formattedTime = now.toLocaleTimeString("pt-BR", {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="relative overflow-hidden rounded-b-3xl gradient-hero px-5 pt-5 pb-8"
    >
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-xl bg-card/20 backdrop-blur-sm flex items-center justify-center">
            <BookOpen className="w-5 h-5 text-primary-foreground" />
          </div>
          <span className="text-lg font-bold text-primary-foreground tracking-tight">
            ClassMind
          </span>
        </div>
        <button className="w-10 h-10 rounded-xl bg-card/20 backdrop-blur-sm flex items-center justify-center relative">
          <Bell className="w-5 h-5 text-primary-foreground" />
          <span className="absolute top-2 right-2 w-2.5 h-2.5 rounded-full bg-secondary border-2 border-primary-foreground/30" />
        </button>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <h1 className="text-2xl font-extrabold text-primary-foreground mb-1">
          {greeting}, estudante!
        </h1>
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-card/20 backdrop-blur-sm">
          <span className="text-xs font-medium text-primary-foreground/90">
            Última atualização: {formattedDate} às {formattedTime}
          </span>
        </div>
      </motion.div>
    </motion.header>
  );
};

export default DashboardHeader;
