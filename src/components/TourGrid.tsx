"use client";

import { useMemo, useState } from "react";
import { getTours } from "@/data/tours";
import TourCard from "@/components/TourCard";
import { useLocale } from "@/i18n/LocaleProvider";
import { cn } from "@/lib/utils";

type FilterId = "all" | "agadir" | "day-trip" | "taghazout" | "transfer";

export default function TourGrid() {
  const { locale, dict } = useLocale();
  const [active, setActive] = useState<FilterId>("all");
  const [query, setQuery] = useState("");

  const tours = useMemo(() => getTours(locale), [locale]);

  const filters: { id: FilterId; label: string }[] = [
    { id: "all", label: dict.tours.filters.all },
    { id: "agadir", label: dict.tours.filters.adventure },
    { id: "day-trip", label: dict.tours.filters.dayTrip },
    { id: "taghazout", label: dict.tours.filters.coastal },
    { id: "transfer", label: dict.tours.filters.transfer },
  ];

  const filtered = useMemo(() => {
    return tours.filter((tour) => {
      const matchesFilter = active === "all" || tour.category === active;
      const matchesQuery =
        query === "" ||
        tour.title.toLowerCase().includes(query.toLowerCase()) ||
        tour.description.toLowerCase().includes(query.toLowerCase());
      return matchesFilter && matchesQuery;
    });
  }, [tours, active, query]);

  return (
    <div>
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-10">
        <div className="flex flex-wrap gap-2">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActive(filter.id)}
              className={cn(
                "px-4 py-2 text-sm rounded-sm border transition-all duration-300",
                active === filter.id
                  ? "bg-gold text-ink border-gold font-semibold"
                  : "bg-transparent text-cream-muted border-border hover:border-gold/40 hover:text-cream"
              )}
            >
              {filter.label}
            </button>
          ))}
        </div>
        <div className="relative w-full lg:w-72">
          <input
            type="search"
            placeholder={dict.tours.searchPlaceholder}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-surface-elevated border border-border rounded-sm px-4 py-2.5 pl-10 text-sm text-cream placeholder:text-cream-muted/50 focus:outline-none focus:border-gold/50 transition-colors"
          />
          <svg className="absolute left-3 top-1/2 -translate-y-1/2 text-cream-muted" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.5">
            <circle cx="7" cy="7" r="5" />
            <path d="M11 11l3 3" />
          </svg>
        </div>
      </div>

      <p className="text-cream-muted text-sm mb-6">
        {dict.tours.showing} {filtered.length}{" "}
        {filtered.length === 1 ? dict.tours.experience : dict.tours.experiences}
      </p>

      {filtered.length === 0 ? (
        <div className="text-center py-20 border border-border rounded-sm bg-surface-elevated">
          <p className="text-cream-muted">{dict.tours.noResults}</p>
          <button onClick={() => { setQuery(""); setActive("all"); }} className="mt-4 text-gold text-sm font-semibold hover:underline">
            {dict.tours.clearFilters}
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filtered.map((tour) => (
            <TourCard key={tour.id} tour={tour} />
          ))}
        </div>
      )}
    </div>
  );
}
