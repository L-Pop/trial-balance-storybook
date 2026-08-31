import React from "react";
import { UnfoldIcon, SortAscendingIcon, SortDescendingIcon, FilterActiveIcon } from "./icons";
import "./HeaderCell.css";

export type HeaderCellState = "default" | "sorted-ascending" | "sorted-descending" | "filter-active";

export interface HeaderCellProps {
  /** Column Label (text) — Figma Component Property */
  label: string;
  state?: HeaderCellState;
  /** Sortable (boolean) */
  sortable?: boolean;
  /** Pinned (boolean) — shown as a small pin marker, matches the Tablet frozen-column demo */
  pinned?: boolean;
  align?: "left" | "right";
  onSortClick?: () => void;
}

const iconFor = (state: HeaderCellState) => {
  switch (state) {
    case "sorted-ascending":
      return <SortAscendingIcon />;
    case "sorted-descending":
      return <SortDescendingIcon />;
    case "filter-active":
      return <FilterActiveIcon />;
    default:
      return <UnfoldIcon />;
  }
};

/**
 * Matches the "Header Cell" component set (State=Default/Sorted
 * Ascending/Sorted Descending/Filter Active) in the Trial Balance Figma file.
 */
export const HeaderCell = ({
  label,
  state = "default",
  sortable = true,
  pinned = false,
  align = "left",
  onSortClick,
}: HeaderCellProps) => {
  const sorted = state === "sorted-ascending" || state === "sorted-descending";
  return (
    <div
      className={["tb-header-cell", sorted && "tb-header-cell--sorted", state === "filter-active" && "tb-header-cell--filter-active"]
        .filter(Boolean)
        .join(" ")}
      style={{ justifyContent: align === "right" ? "flex-end" : "flex-start" }}
    >
      {pinned && <span className="tb-header-cell__pin" aria-label="Pinned column" title="Pinned" />}
      <span className="tb-header-cell__label">{label}</span>
      {sortable && (
        <button
          type="button"
          className="tb-header-cell__icon"
          onClick={onSortClick}
          aria-label={`Sort by ${label}`}
        >
          {iconFor(state)}
        </button>
      )}
    </div>
  );
};
