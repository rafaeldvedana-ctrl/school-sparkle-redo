import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  ChevronLeft,
  Calendar,
  Star,
  BookOpen,
  FlaskConical,
  Atom,
  Beaker,
  Palette,
  Dumbbell,
  Languages,
  BookText,
  Feather,
  Globe,
  Landmark,
  PenLine,
  Calculator,
  TrendingUp,
  Scale,
  Lightbulb,
  GraduationCap,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

interface Assessment {
  date: string;
  title: string;
  description: string;
  points: number;
  maxPoints: number;
}

interface Subject {
  name: string;
  professor: string;
  icon: React.ReactNode;
  color: string;
  assessments: Assessment[];
}

const subjectsData: Subject[] = [
  {
    name: "Matemática",
    professor: "Prof. Rafael",
    icon: <Calculator className="w-5 h-5" />,
    color: "from-violet-500 to-indigo-600",
    assessments: [
      { date: "24/11", title: "Prova Trimestral", description: "Funções quadráticas e exponenciais", points: 5, maxPoints: 10 },
      { date: "18/11", title: "Teste sobre Pirâmides", description: "Geometria espacial: volume e área", points: 3, maxPoints: 5 },
      { date: "30/11", title: "Trabalho sobre Cilindros", description: "Cálculo de superfície e volume", points: 2, maxPoints: 5 },
    ],
  },
  {
    name: "Biologia",
    professor: "Prof. Josiane",
    icon: <FlaskConical className="w-5 h-5" />,
    color: "from-emerald-500 to-teal-600",
    assessments: [
      { date: "03/11", title: "Trabalho sobre Filos", description: "Classificação dos seres vivos", points: 2, maxPoints: 5 },
    ],
  },
  {
    name: "Física",
    professor: "Prof. Lielei",
    icon: <Atom className="w-5 h-5" />,
    color: "from-sky-500 to-blue-600",
    assessments: [
      { date: "12/11", title: "Prova de Termodinâmica", description: "Leis da termodinâmica e calorimetria", points: 4, maxPoints: 10 },
    ],
  },
  {
    name: "Química",
    professor: "Prof. Andressa",
    icon: <Beaker className="w-5 h-5" />,
    color: "from-amber-500 to-orange-600",
    assessments: [
      { date: "15/11", title: "Teste de Reações", description: "Balanceamento e estequiometria", points: 3, maxPoints: 5 },
    ],
  },
  {
    name: "Arte",
    professor: "Prof. Sonia",
    icon: <Palette className="w-5 h-5" />,
    color: "from-pink-500 to-rose-600",
    assessments: [],
  },
  {
    name: "Ed. Física",
    professor: "Prof. Luís Simão",
    icon: <Dumbbell className="w-5 h-5" />,
    color: "from-lime-500 to-green-600",
    assessments: [],
  },
  {
    name: "Inglês",
    professor: "Prof. Matheus",
    icon: <Languages className="w-5 h-5" />,
    color: "from-cyan-500 to-teal-600",
    assessments: [
      { date: "20/11", title: "Reading Comprehension", description: "Interpretação de textos acadêmicos", points: 4, maxPoints: 5 },
    ],
  },
  {
    name: "Português",
    professor: "Prof. Jucelaine",
    icon: <BookText className="w-5 h-5" />,
    color: "from-fuchsia-500 to-purple-600",
    assessments: [
      { date: "22/11", title: "Análise Literária", description: "Obras do romantismo brasileiro", points: 3, maxPoints: 5 },
    ],
  },
  {
    name: "Literatura",
    professor: "Prof. Jucelaine",
    icon: <BookOpen className="w-5 h-5" />,
    color: "from-rose-500 to-pink-600",
    assessments: [],
  },
  {
    name: "Geografia",
    professor: "Prof. Luís Girardon",
    icon: <Globe className="w-5 h-5" />,
    color: "from-teal-500 to-emerald-600",
    assessments: [
      { date: "25/11", title: "Prova de Climatologia", description: "Fenômenos climáticos e biomas", points: 6, maxPoints: 10 },
    ],
  },
  {
    name: "História",
    professor: "Prof. Estela",
    icon: <Landmark className="w-5 h-5" />,
    color: "from-yellow-500 to-amber-600",
    assessments: [],
  },
  {
    name: "Redação",
    professor: "Prof. Isis",
    icon: <PenLine className="w-5 h-5" />,
    color: "from-indigo-500 to-violet-600",
    assessments: [],
  },
  {
    name: "Res. de Prob.",
    professor: "Prof. Rafael",
    icon: <Calculator className="w-5 h-5" />,
    color: "from-orange-500 to-red-600",
    assessments: [],
  },
  {
    name: "Com. e Mark.",
    professor: "Prof. Patrick",
    icon: <TrendingUp className="w-5 h-5" />,
    color: "from-blue-500 to-indigo-600",
    assessments: [],
  },
  {
    name: "Dir. Humanos",
    professor: "Prof. Anelise",
    icon: <Scale className="w-5 h-5" />,
    color: "from-purple-500 to-fuchsia-600",
    assessments: [],
  },
  {
    name: "Emp. e Inov.",
    professor: "Prof. Andressa",
    icon: <Lightbulb className="w-5 h-5" />,
    color: "from-red-500 to-orange-600",
    assessments: [],
  },
];

const Assessments = () => {
  const navigate = useNavigate();
  const [expandedSubject, setExpandedSubject] = useState<string | null>("Matemática");

  const totalPending = subjectsData.reduce((acc, s) => acc + s.assessments.length, 0);

  return (
    <div className="min-h-screen bg-background max-w-md mx-auto pb-8">
      {/* Header */}
      <div className="gradient-hero p-6 pb-8 rounded-b-3xl relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative z-10">
          <div className="flex items-center justify-between mb-6">
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => navigate("/")}
              className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center text-white"
            >
              <ChevronLeft className="w-5 h-5" />
            </motion.button>
            <h1 className="text-lg font-bold text-white">Avaliações</h1>
            <div className="w-10" />
          </div>
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
              <GraduationCap className="w-7 h-7 text-white" />
            </div>
            <div>
              <p className="text-3xl font-extrabold text-white">{totalPending}</p>
              <p className="text-sm font-semibold text-white/80 uppercase tracking-wider">
                Avaliações Pendentes
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Subject List */}
      <div className="px-4 mt-6 space-y-3">
        <h2 className="text-xl font-extrabold text-gradient mb-2">Matérias</h2>

        {subjectsData.map((subject) => {
          const isExpanded = expandedSubject === subject.name;
          const assessmentCount = subject.assessments.length;

          return (
            <motion.div
              key={subject.name}
              layout
              className="rounded-2xl overflow-hidden glass-card"
            >
              {/* Subject Header */}
              <motion.button
                layout="position"
                onClick={() => setExpandedSubject(isExpanded ? null : subject.name)}
                className="w-full flex items-center gap-3 p-4 text-left"
              >
                <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${subject.color} flex items-center justify-center text-white shrink-0 shadow-lg`}>
                  {subject.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-bold text-foreground text-sm uppercase tracking-wide truncate">
                    {subject.name}
                  </p>
                  <p className="text-xs text-muted-foreground">{subject.professor}</p>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  {assessmentCount > 0 && (
                    <span className="text-xs font-bold bg-primary/10 text-primary px-2.5 py-1 rounded-full">
                      {assessmentCount}
                    </span>
                  )}
                  <motion.div
                    animate={{ rotate: isExpanded ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDown className="w-4 h-4 text-muted-foreground" />
                  </motion.div>
                </div>
              </motion.button>

              {/* Assessments */}
              <AnimatePresence initial={false}>
                {isExpanded && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-4 pb-4 space-y-2.5">
                      {assessmentCount === 0 ? (
                        <div className="text-center py-6 text-muted-foreground text-sm">
                          <p className="font-medium">Nenhuma avaliação pendente</p>
                          <p className="text-xs mt-1">Tudo em dia! 🎉</p>
                        </div>
                      ) : (
                        subject.assessments.map((assessment, idx) => (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.05 }}
                            className="rounded-xl gradient-card-dark p-4 text-primary-foreground"
                          >
                            <div className="flex items-start justify-between mb-2">
                              <div className="flex-1 min-w-0">
                                <p className="font-bold text-sm">{assessment.title}</p>
                                <p className="text-xs text-primary-foreground/60 mt-0.5 line-clamp-2">
                                  {assessment.description}
                                </p>
                              </div>
                              <div className="flex items-center gap-1 shrink-0 ml-3 bg-white/10 rounded-lg px-2.5 py-1.5">
                                <Star className="w-3.5 h-3.5 text-secondary" />
                                <span className="text-sm font-extrabold">{assessment.points}</span>
                                <span className="text-xs text-primary-foreground/50">/{assessment.maxPoints}</span>
                              </div>
                            </div>
                            <div className="flex items-center gap-1.5 mt-3">
                              <Calendar className="w-3.5 h-3.5 text-primary-foreground/50" />
                              <span className="text-xs text-primary-foreground/60 font-medium">{assessment.date}</span>
                            </div>
                          </motion.div>
                        ))
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>

      <footer className="text-center py-6 text-xs font-medium text-muted-foreground">
        © 2025 – Todos os direitos reservados
      </footer>
    </div>
  );
};

export default Assessments;
