import { Clock, ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";

const scheduleItems = [
  { time: "07:30", subject: "Matemática" },
  { time: "08:20", subject: "Português" },
  { time: "09:10", subject: "História" },
  { time: "10:30", subject: "Ciências" },
  { time: "11:10", subject: "Geografia" },
];

const DailySchedule = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
      className="mx-4 mt-4 rounded-2xl gradient-card-dark p-5 text-primary-foreground overflow-hidden relative"
    >
      <div className="flex items-center gap-2 mb-4">
        <Clock className="w-5 h-5 text-secondary" />
        <h3 className="text-lg font-bold tracking-tight">Horários do dia</h3>
      </div>
      <div className="space-y-2">
        {scheduleItems.map((item, i) => (
          <motion.div
            key={item.time}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 + i * 0.05 }}
            className="flex items-center gap-3 px-3 py-2 rounded-xl bg-primary-foreground/10 backdrop-blur-sm"
          >
            <span className="text-sm font-bold text-secondary min-w-[45px]">
              {item.time}
            </span>
            <span className="text-sm font-medium text-primary-foreground/90">
              {item.subject}
            </span>
          </motion.div>
        ))}
      </div>
      <button className="mt-4 flex items-center gap-2 text-sm font-semibold text-primary-foreground/70 hover:text-primary-foreground transition-colors">
        <ArrowLeft className="w-4 h-4" />
        Ver semana completa
      </button>
    </motion.div>
  );
};

export default DailySchedule;
