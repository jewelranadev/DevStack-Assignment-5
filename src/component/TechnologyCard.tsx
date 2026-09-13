import type { TechType } from "./techType";

interface TechnologyCardProps {
  technology: TechType;
  handleAddToStack: (technology: TechType) => void;
  selectedTechnologies: TechType[];
}

export default function TechnologyCard({
  technology,
  handleAddToStack,
  selectedTechnologies,
}: TechnologyCardProps) {
  const isAdded = selectedTechnologies.some(
    (item) => item.id === technology.id,
  );

  return (
    <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="relative mb-4 flex items-start justify-between">
        <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gray-100 p-2">
          <img
            src={technology.icon}
            alt={technology.name}
            className="h-full w-full object-contain"
          />
        </div>

        <span className="rounded-full bg-pink-100 px-3 py-1 text-xs font-semibold text-pink-600">
          {technology.badge}
        </span>
      </div>

      <h2 className="text-xl font-bold text-gray-800">{technology.name}</h2>

      <p className="mt-2 text-sm leading-6 text-gray-500">
        {technology.description}
      </p>

      <div className="mt-4 flex gap-2">
        <span className="rounded-md bg-purple-100 px-3 py-1 text-xs font-medium text-purple-600">
          {technology.category}
        </span>

        <span className="rounded-md bg-green-100 px-3 py-1 text-xs font-medium text-green-600">
          {technology.difficulty}
        </span>
        <span className="rounded-md bg-yellow-100 px-3 py-1 text-xs font-medium text-yellow-600">
          ⭐ {technology.rating}
        </span>
      </div>

      <button
  onClick={() => handleAddToStack(technology)}
  className={`mt-5 w-full rounded-lg px-4 py-3 font-semibold transition ${
    isAdded
      ? "bg-gray-200 text-gray-500"
      : "brand-gradient text-white hover:scale-[1.02]"
  }`}
>
  {isAdded ? "✓ Added to Stack" : "+ Add to Stack"}
</button>
    </div>
  );
}
