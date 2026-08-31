import type { Meta, StoryObj } from "@storybook/react";
import { Row } from "./Row";
import { HeaderCell } from "./HeaderCell";

const meta: Meta<typeof Row> = {
  title: "Table Grid/Row",
  component: Row,
  tags: ["autodocs"],
  argTypes: {
    state: { control: "select", options: ["default", "hover", "selected", "disabled", "error"] },
    leadingStatus: { control: "select", options: ["reconciled", "pending", "flagged", "none"] },
  },
  decorators: [
    (Story) => (
      <div style={{ width: 560, border: "1px solid var(--sys-outline-variant)", borderRadius: 4 }}>
        <div style={{ display: "grid", gridTemplateColumns: "32px 1fr 140px 140px 32px" }}>
          <div />
          <HeaderCell label="Account Name" state="sorted-ascending" />
          <HeaderCell label="Debit" align="right" />
          <HeaderCell label="Credit" align="right" />
          <div />
        </div>
        <Story />
      </div>
    ),
  ],
};
export default meta;
type Story = StoryObj<typeof Row>;

const base = { account: "Accounts Receivable", debit: "12,400.00", credit: "—" };

export const Default: Story = { args: { ...base, state: "default" } };
export const Hover: Story = { args: { ...base, state: "hover" } };
export const Selected: Story = { args: { ...base, state: "selected" } };
export const Disabled: Story = { args: { ...base, state: "disabled", leadingStatus: "pending" } };
export const ErrorState: Story = {
  name: "Error",
  args: { account: "Utilities — Overdue", debit: "—", credit: "(3,150.00)", state: "error", leadingStatus: "flagged" },
};
