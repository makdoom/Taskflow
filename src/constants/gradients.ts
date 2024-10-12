export const GRADIENTS: { [key: number]: string } = {
  1: "bg-gradient-to-r from-red-500 to-orange-500",
  2: "bg-gradient-to-r from-fuchsia-600 to-pink-600",
  3: "bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-slate-900 via-purple-900 to-slate-900",
  4: "bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-lime-400 via-green-600 to-teal-700",
  5: "bg-gradient-to-tr from-blue-700 via-violet-800 to-fuchsia-900",
  6: "bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-700 via-blue-800 to-gray-900",
  7: "bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] from-amber-500 via-yellow-600 to-orange-700",
  8: "bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-teal-600 via-cyan-700 to-blue-800",
};

export const generateRandomGradient = () => Math.floor(Math.random() * 7) + 1;
