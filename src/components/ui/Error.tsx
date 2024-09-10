interface IError {
  errorText: string;
  tryAgainFn: () => void;
}

export default function Error({ errorText, tryAgainFn }: IError) {
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center">
      <p className="text-primary font-bold text-xl my-8">{errorText}</p>
      <button
        onClick={tryAgainFn}
        className="bg-columnLightBg text-secondary py-2 px-4 rounded-md font-bold hover:opacity-70"
      >
        Try again
      </button>
    </div>
  );
}
