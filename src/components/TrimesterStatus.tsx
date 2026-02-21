import { CheckCircle2, Clock, Lock } from "lucide-react";
import { motion } from "framer-motion";

const trimesters = [
  {
    label: "1º Trimestre",
    status: "Em andamento",
    icon: Clock,
    variant: "active" as const,
  },
  {
    label: "2º Trimestre",
    status: "Concluído",
    icon: CheckCircle2,
    variant: "done" as const,
  },
  {
    label: "3º Trimestre",
    status: "Bloqueado",
    icon: Lock,
    variant: "locked" as const,
  },
];

const variantStyles = {
  active: "glass-card border-2 border-primary/30",
  done: "glass-card border-2 border-success/30",
  locked: "glass-card border-2 border-muted-foreground/20 opacity-60",
};

const statusColors = {
  active: "text-primary",
  done: "text-success",
  locked: "text-muted-foreground",
};

const TrimesterStatus = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.7 }}
      className="mx-4 mt-6 mb-8"
    >
      <h2 className="text-xl font-extrabold text-gradient mb-4">
        Status Trimestrais
      </h2>
      <div className="grid grid-cols-2 gap-3">
        {trimesters.map((t, i) => {
          const Icon = t.icon;
          return (
            <motion.div
              key={t.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8 + i * 0.1 }}
              className={`rounded-2xl p-4 ${variantStyles[t.variant]} ${
                i === 0 ? "col-span-2" : ""
              }`}
            >
              <div className="flex items-center gap-2 mb-1">
                <Icon className={`w-4 h-4 ${statusColors[t.variant]}`} />
                <span className="text-sm font-bold text-foreground">
                  {t.label}
                </span>
              </div>
              <span
                className={`text-xs font-semibold ${statusColors[t.variant]}`}
              >
                {t.status}
              </span>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default TrimesterStatus;
