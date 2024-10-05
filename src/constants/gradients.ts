export const GRADIENTS: { [key: number]: string } = {
  1: "bg-gradient-to-r from-red-500 to-orange-500",
  2: "bg-gradient-to-r from-pink-500 to-rose-500",
  3: "bg-gradient-to-r from-emerald-400 to-cyan-400",
  4: "bg-gradient-to-r from-indigo-500 to-blue-500",
  5: "bg-gradient-to-r from-blue-600 to-violet-600",
  6: "bg-gradient-to-r from-fuchsia-600 to-pink-600",
  7: "bg-gradient-to-r from-violet-600 to-indigo-600",
  8: "bg-gradient-to-r from-emerald-500 to-lime-600",
};

export const generateRandomGradient = () => Math.floor(Math.random() * 5) + 1;
