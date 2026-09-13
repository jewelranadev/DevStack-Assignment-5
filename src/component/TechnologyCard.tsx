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
  const isSelected = selectedTechnologies.some(
  (item) => item.id === technology.id,
);

const disabled = isSelected;

  return (
    <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
      <div className="relative mb-4 flex h-12 items-center rounded-lg bg-gray-100 px-3">
        <img
          src={technology.icon}
          alt={technology.name}
          className="h-8 w-8 object-contain"
        />

        <span className="absolute -right-2 -top-2 rounded-full bg-pink-100 px-2 py-1 text-xs font-semibold text-pink-500">
          {technology.badge}
        </span>
      </div>

      <h2 className="mb-2 text-xl font-bold text-gray-800">
        {technology.name}
      </h2>

      <p className="mb-4 text-sm leading-6 text-gray-500">
        {technology.description}
      </p>

      <div className="mb-4 flex items-center justify-between gap-2">
        <span className="rounded-full bg-pink-100 px-3 py-1 text-xs font-semibold text-pink-500">
          {technology.category}
        </span>

        <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-[#64748B]">
          {technology.difficulty}
        </span>

        <span className="text-sm font-semibold text-yellow-500">
          ⭐ {technology.rating}
        </span>
      </div>

      <button
        onClick={() => handleAddToStack(technology)}
        disabled={disabled}
        className={`w-full rounded-lg py-2 text-sm font-semibold text-white ${
          isSelected
            ? "cursor-default bg-green-600"
            : "bg-[#0A0F1D] hover:bg-gray-800"
        }`}
      >
        {isSelected ? "Added to Stack" : "Add to Stack"}
      </button>
    </div>
  );
}
