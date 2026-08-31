import React from "react";
import "./Cell.css";

export type CellState = "default" | "editing" | "error";

export interface CellProps {
  /** Cell Value (text) — Figma Component Property */
  value: string;
  /** State variant: Default / Editing / Error */
  state?: CellState;
  /** Editable (boolean) — Figma Component Property */
  editable?: boolean;
  /** Has Error (boolean) — independent of the Error variant, mirrors Figma */
  hasError?: boolean;
  align?: "left" | "right";
}

/**
 * Table data cell. min/max width 72–220px and single-line truncation match
 * the "Cell" component set (State=Default/Editing/Error) in the Trial
 * Balance Figma file.
 */
export const Cell = ({ value, state = "default", editable = false, hasError = false, align = "left" }: CellProps) => {
  const isError = state === "error" || hasError;
  const isEditing = state === "editing";
  return (
    <div
      className={[
        "tb-cell",
        isError && "tb-cell--error",
        isEditing && "tb-cell--editing",
        editable && "tb-cell--editable",
      ]
        .filter(Boolean)
        .join(" ")}
      style={{ textAlign: align }}
      title={value}
    >
      <span className="tb-cell__value">{value}</span>
    </div>
  );
};
