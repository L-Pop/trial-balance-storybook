import React from "react";
import { Cell } from "./Cell";
import { StatusReconciledIcon, StatusPendingIcon, StatusFlaggedIcon, MoreIcon } from "./icons";
import "./Row.css";

export type RowState = "default" | "hover" | "selected" | "disabled" | "error";
export type LeadingStatus = "reconciled" | "pending" | "flagged" | "none";

export interface RowProps {
  account: string;
  debit: string;
  credit: string;
  state?: RowState;
  /** Selected (boolean) — toggles the checkmark badge independent of the Selected variant */
  selected?: boolean;
  /** Has Error (boolean) — toggles the warning badge independent of the Error variant */
  hasError?: boolean;
  /** Leading Status (instance-swap) */
  leadingStatus?: LeadingStatus;
  /** Trailing Action (instance-swap) — defaults to the overflow "more" control */
  trailingAction?: React.ReactNode;
  onClick?: () => void;
}

const statusIcon = (status: LeadingStatus) => {
  switch (status) {
    case "reconciled":
      return <StatusReconciledIcon />;
    case "pending":
      return <StatusPendingIcon />;
    case "flagged":
      return <StatusFlaggedIcon />;
    default:
      return null;
  }
};

/**
 * Matches the "Row" component set (State=Default/Hover/Selected/Disabled/
 * Error) in the Trial Balance Figma file. Composed of real Cell instances,
 * exactly like the Figma variant components.
 */
export const Row = ({
  account,
  debit,
  credit,
  state = "default",
  selected = false,
  hasError = false,
  leadingStatus = "reconciled",
  trailingAction,
  onClick,
}: RowProps) => {
  const isSelected = state === "selected" || selected;
  const isError = state === "error" || hasError;
  const isDisabled = state === "disabled";
  const isHover = state === "hover";

  return (
    <div
      className={[
        "tb-row",
        isHover && "tb-row--hover",
        isSelected && "tb-row--selected",
        isDisabled && "tb-row--disabled",
        isError && "tb-row--error",
      ]
        .filter(Boolean)
        .join(" ")}
      onClick={isDisabled ? undefined : onClick}
      role="row"
      aria-selected={isSelected}
      aria-disabled={isDisabled}
    >
      <div className="tb-row__leading">
        {isSelected ? (
          <span className="tb-row__check" aria-label="Selected">
            ✓
          </span>
        ) : (
          statusIcon(leadingStatus)
        )}
      </div>
      <Cell value={account} />
      <Cell value={debit} align="right" state={isError ? "error" : "default"} />
      <Cell value={credit} align="right" state={isError ? "error" : "default"} />
      <div className="tb-row__trailing">
        {isError && <span className="tb-row__error-badge" title="Has error">!</span>}
        {trailingAction ?? <MoreIcon />}
      </div>
    </div>
  );
};
