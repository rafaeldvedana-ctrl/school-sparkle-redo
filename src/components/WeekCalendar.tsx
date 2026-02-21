import { motion } from "framer-motion";

const WeekCalendar = () => {
  const today = new Date();
  const dayOfWeek = today.getDay();

  const weekDays = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];

  const getWeekDates = () => {
    const startOfWeek = new Date(today);
    startOfWeek.setDate(today.getDate() - dayOfWeek);
    return weekDays.map((day, i) => {
      const date = new Date(startOfWeek);
      date.setDate(startOfWeek.getDate() + i);
      return { day, date: date.getDate(), isToday: i === dayOfWeek };
    });
  };

  const month = today.toLocaleDateString("pt-BR", {
    month: "long",
    year: "numeric",
  });

  const week = getWeekDates();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      className="glass-card rounded-2xl p-5 mx-4 -mt-4 relative z-10"
    >
      <h3 className="text-sm font-semibold text-foreground capitalize mb-4">
        {month}
      </h3>
      <div className="flex justify-between gap-1">
        {week.map(({ day, date, isToday }) => (
          <div
            key={day}
            className={`flex flex-col items-center gap-1 px-2 py-2 rounded-xl transition-all ${
              isToday
                ? "bg-primary text-primary-foreground shadow-lg shadow-primary/30"
                : "text-muted-foreground hover:bg-muted"
            }`}
          >
            <span className="text-[10px] font-semibold uppercase">{day}</span>
            <span className={`text-sm font-bold ${isToday ? "" : "text-foreground"}`}>
              {date}
            </span>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default WeekCalendar;
