import React from "react";
import { SearchIcon, FilterIcon } from "./icons";
import "./Toolbar.css";

export type ToolbarState = "default" | "search-active" | "filters-applied";

export interface ToolbarProps {
  state?: ToolbarState;
  /** Search Query (text) — Figma Component Property */
  searchQuery?: string;
  /** Filters Applied (boolean) — controls the removable filter-chip row */
  filtersApplied?: boolean;
  filters?: string[];
  onSearchChange?: (value: string) => void;
  onRemoveFilter?: (filter: string) => void;
}

/**
 * Matches the "Toolbar" component set (State=Default/Search Active/Filters
 * Applied) in the Trial Balance Figma file.
 */
export const Toolbar = ({
  state = "default",
  searchQuery = "",
  filtersApplied = false,
  filters = ["This quarter", "Has error"],
  onSearchChange,
  onRemoveFilter,
}: ToolbarProps) => {
  const searchActive = state === "search-active";
  const showFilters = state === "filters-applied" || filtersApplied;

  return (
    <div className="tb-toolbar">
      <div className={["tb-toolbar__search", searchActive && "tb-toolbar__search--active"].filter(Boolean).join(" ")}>
        <SearchIcon />
        <input
          className="tb-toolbar__input"
          placeholder="Search accounts…"
          value={searchQuery}
          onChange={(e) => onSearchChange?.(e.target.value)}
        />
      </div>
      <button type="button" className={["tb-toolbar__filter-btn", showFilters && "tb-toolbar__filter-btn--active"].filter(Boolean).join(" ")}>
        <FilterIcon color={showFilters ? "var(--sys-primary)" : undefined} />
        Filter
      </button>
      {showFilters && (
        <div className="tb-toolbar__chips">
          {filters.map((f) => (
            <span className="tb-toolbar__chip" key={f}>
              {f}
              <button type="button" aria-label={`Remove ${f}`} onClick={() => onRemoveFilter?.(f)}>
                ×
              </button>
            </span>
          ))}
        </div>
      )}
    </div>
  );
};
