export default function Loading() {
  return (
    <div className="h-screen w-full flex items-center justify-center absolute top-0 left-0 z-[99999] bg-white">
      <span className="loader">Loading...</span>
    </div>
  );
}