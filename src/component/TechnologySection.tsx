import { use, useState } from "react";
import TechnologyCard from "./TechnologyCard";
import type { TechType } from "./techType";

interface TechProps {
  technologyPromise: Promise<TechType[]>;
}

export default function TechnologySection({ technologyPromise }: TechProps) {
  const technologies = use(technologyPromise);

  const [selectedTechnologies, setSelectedTechnologies] = useState<TechType[]>(
    [],
  );

const handleAddToStack = (technology: TechType) => {
  setSelectedTechnologies((prev) => {
    if (prev.some((item) => item.id === technology.id)) {
      return prev;
    }
    return [...prev, technology];
  });
};
  const handleRemoveFromStack = (id: string) => {
    setSelectedTechnologies((prev) =>
      prev.filter((technology) => technology.id !== id),
    );
  };

  return (
    <section className="mx-auto max-w-7xl px-4 py-16">
      <div>
        <h2 className="text-4xl font-extrabold md:text-5xl">
          Explore{" "}
          <span className="bg-linear-to-r from-[#EC4899] to-[#8B5CF6] bg-clip-text text-transparent">
            The Technologies
          </span>
        </h2>

        <p className="mt-4 text-gray-500">
          Pick one technology per category to build your ideal stack.
        </p>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-[1fr_300px]">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {technologies.map((technology) => (
            <TechnologyCard
              key={technology.id}
              technology={technology}
              handleAddToStack={handleAddToStack}
              selectedTechnologies={selectedTechnologies}
            />
          ))}
        </div>

        <div>
          <div className="sticky top-24 rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-bold text-gray-800">Your Stack</h2>

            {selectedTechnologies.length === 0 ? (
              <p className="mt-2 text-sm text-gray-500">
                No Technology Selected Yet
              </p>
            ) : (
              <div className="mt-4 space-y-3">
                {selectedTechnologies.map((technology) => (
                  <div
                    key={technology.id}
                    className="flex items-center justify-between rounded-lg border border-gray-100 p-3"
                  >
                    <div className="flex items-center gap-3">
                      <img
                        src={technology.icon}
                        alt={technology.name}
                        className="h-10 w-10 object-contain"
                      />

                      <div>
                        <h3 className="font-semibold text-gray-800">
                          {technology.name}
                        </h3>

                        <p className="text-xs text-gray-500">
                          {technology.category}
                        </p>
                      </div>
                    </div>

                    <button
                      onClick={() => handleRemoveFromStack(technology.id)}
                      className="text-xs font-semibold text-red-500 hover:text-red-700"
                    >
                      Remove
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
