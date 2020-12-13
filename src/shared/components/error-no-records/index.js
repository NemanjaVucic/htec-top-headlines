const ErrorNoRecords = ({ errorMessage }) => (
  <div className="absolute  w-full h-full flex justify-center items-center">
    <h1 className="font-bold text-lg">{errorMessage}</h1>
  </div>
);

export default ErrorNoRecords;
