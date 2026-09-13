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

  const handleRemoveAll = () => {
    setSelectedTechnologies([]);
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

      <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-[1fr_320px]">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
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
            <div className="flex items-center justify-between gap-3">
              <div>
                <h2 className="text-xl font-bold text-gray-800">Your Stack</h2>

                <p className="mt-1 text-sm text-gray-500">
                  {selectedTechnologies.length}{" "}
                  {selectedTechnologies.length === 1
                    ? "Technology"
                    : "Technologies"}{" "}
                  Selected
                </p>
              </div>

              {selectedTechnologies.length > 0 && (
                <button
                  onClick={handleRemoveAll}
                  className="rounded-lg bg-red-50 px-3 py-2 text-xs font-semibold text-red-500 transition hover:bg-red-500 hover:text-white"
                >
                  Remove All
                </button>
              )}
            </div>

            {selectedTechnologies.length === 0 ? (
              <div className="mt-6 rounded-lg bg-gray-50 p-4 text-center">
                <p className="text-sm text-gray-500">
                  No Technology Selected Yet
                </p>

                <p className="mt-2 text-sm text-gray-400">
                  Your Stack is Empty
                </p>
              </div>
            ) : (
              <div className="mt-5 space-y-3">
                {selectedTechnologies.map((technology) => (
                  <div
                    key={technology.id}
                    className="flex items-center justify-between gap-2 rounded-lg border border-gray-100 p-3"
                  >
                    <div className="flex min-w-0 items-center gap-3">
                      <img
                        src={technology.icon}
                        alt={technology.name}
                        className="h-9 w-9 shrink-0 object-contain"
                      />

                      <div className="min-w-0">
                        <h3 className="truncate text-sm font-semibold text-gray-800">
                          {technology.name}
                        </h3>

                        <p className="text-xs text-gray-500">
                          {technology.category}
                        </p>
                      </div>
                    </div>

                    <button
                      onClick={() => handleRemoveFromStack(technology.id)}
                      className="shrink-0 text-xs font-semibold text-red-500 transition hover:text-red-700"
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
