export default function Loading() {
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center">
      <div
        className="mx-auto inline-block  h-16 w-16 animate-spin rounded-full border-8 border-solid border-primary border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
        role="status"
      ></div>
      <p className="text-primary font-bold text-xl my-8">Loading...</p>
    </div>
  );
}
