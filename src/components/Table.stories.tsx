import type { Meta, StoryObj } from "@storybook/react";
import { Toolbar } from "./Toolbar";
import { HeaderCell } from "./HeaderCell";
import { Row } from "./Row";

/**
 * A composite story assembling Toolbar + Header Cell + Row exactly like the
 * "Desktop — 1280" frame on the Responsive Demo page in the Figma file:
 * one table showing every row state at once.
 */
const Table = () => (
  <div style={{ maxWidth: 900 }}>
    <Toolbar state="default" />
    <div style={{ marginTop: 16, border: "1px solid var(--sys-outline-variant)", borderRadius: 4, overflow: "hidden" }}>
      <div style={{ display: "grid", gridTemplateColumns: "32px 1fr 140px 140px 32px" }}>
        <div style={{ background: "var(--sys-surface-container-low)" }} />
        <HeaderCell label="Account Name" state="sorted-ascending" pinned />
        <HeaderCell label="Debit" align="right" />
        <HeaderCell label="Credit" align="right" />
        <div style={{ background: "var(--sys-surface-container-low)" }} />
      </div>
      <Row account="Accounts Receivable" debit="12,400.00" credit="—" state="default" leadingStatus="reconciled" />
      <Row account="Accounts Payable" debit="—" credit="8,200.00" state="hover" leadingStatus="reconciled" />
      <Row account="Office Supplies" debit="540.00" credit="—" state="selected" leadingStatus="reconciled" />
      <Row account="Prepaid Insurance" debit="1,200.00" credit="—" state="disabled" leadingStatus="pending" />
      <Row account="Utilities — Overdue" debit="—" credit="(3,150.00)" state="error" leadingStatus="flagged" />
      <Row account="Cash" debit="24,000.00" credit="—" state="default" leadingStatus="reconciled" />
    </div>
  </div>
);

const meta: Meta<typeof Table> = {
  title: "Table Grid/Table (composite)",
  component: Table,
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof Table>;

export const FullStateMatrix: Story = {};
