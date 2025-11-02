const Cards = () => {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.from({ length: 3 }).map((_, i) => (
          <article
            key={i}
            className="bg-white/5 rounded-xl overflow-hidden hover:scale-105 hover:-translate-y-3 duration-150"
          >
            <img
              src="/public/pbak.jpg"
              alt="artikel"
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h3 className="font-semibold">Coming Soon</h3>
              <p className="mt-2 text-sm text-slate-300">
                consectetur adipisicing elit. corporis fugiat dolores nam, vel
                iure quia, officiis quae maiores dignissimos dolore eos
              </p>
            </div>
          </article>
        ))}
      </div>
    </>
  );
};

export default Cards;
