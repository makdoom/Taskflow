export const GRADIENTS: { [key: number]: string } = {
  1: "bg-gradient-to-r from-red-500 to-orange-500",
  2: "bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-rose-400 via-fuchsia-500 to-indigo-500",
  3: "bg-gradient-to-r from-blue-800 to-indigo-900",
  4: "bg-gradient-to-r from-indigo-500 to-blue-500",
  5: "bg-gradient-to-r from-blue-600 to-violet-600",
  6: "bg-gradient-to-r from-fuchsia-600 to-pink-600",
  7: "bg-gradient-to-r from-violet-600 to-indigo-600",
  8: "bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-teal-600 via-cyan-700 to-blue-800",
};

export const generateRandomGradient = () => Math.floor(Math.random() * 5) + 1;
