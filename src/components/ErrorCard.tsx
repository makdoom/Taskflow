const ErrorCard = ({ message }: { message: string }) => {
  return (
    <div className="bg-red-100 text-red-800 p-2 rounded-md px-3 mb-2">
      <p className="text-sm">{message}</p>
    </div>
  );
};
export default ErrorCard;
