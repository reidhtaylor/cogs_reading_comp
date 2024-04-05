// Import

const Finished = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 pt-14">
      <div className="h-32 w-32 rounded-full bg-zinc-800/30 flex items-center justify-center border border-neutral-800">
        <svg class="h-20 w-20 text-white"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
        </svg>
      </div>
      <h2 className={`text-lg font-semibold tracking-wider mt-5`}>You&apos;re done!</h2>
      <h2 className={`text-sm tracking-wider opacity-40`}>You can now exit the room :)</h2>
    </main>
  );
};

export default Finished;
