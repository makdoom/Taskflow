export const ActionResponse = (
  success: number,
  message: string,
  data: unknown,
  type: string
) => {
  return { success, message, data, type };
};
