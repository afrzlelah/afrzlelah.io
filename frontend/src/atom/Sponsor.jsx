const Sponsor = () => {
  return (
    <section className="bg-stone-00 py-8">
      <div className="max-w-6xl mx-auto px-6 overflow-hidden">
        <h5 className="text-lg font-semibold mb-4">Disponsori oleh :</h5>
        <div className="flex gap-6 w-[200%] animate-ticker">
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-28 h-28 bg-white rounded-lg shadow-md flex flex-col items-center justify-center"
            >
              <div className="w-10 h-10 bg-brand/20 rounded-full flex items-center justify-center text-brand">
                {i + 1}
              </div>
              <span className="text-xs text-gray-600 mt-2">
                Sponsor {i + 1}
              </span>
            </div>
          ))}
          {/* duplicate set for seamless loop */}
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={`dup-${i}`}
              className="flex-shrink-0 w-28 h-28 bg-white rounded-lg shadow-md flex flex-col items-center justify-center"
            >
              <div className="w-10 h-10 bg-brand/20 rounded-full flex items-center justify-center text-brand">
                {i + 1}
              </div>
              <span className="text-xs text-gray-600 mt-2">
                Sponsor {i + 1}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sponsor;
