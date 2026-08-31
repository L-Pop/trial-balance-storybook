import type { Meta, StoryObj } from "@storybook/react";
import { Cell } from "./Cell";

const meta: Meta<typeof Cell> = {
  title: "Table Grid/Cell",
  component: Cell,
  tags: ["autodocs"],
  argTypes: {
    state: { control: "select", options: ["default", "editing", "error"] },
    align: { control: "radio", options: ["left", "right"] },
  },
};
export default meta;
type Story = StoryObj<typeof Cell>;

export const Default: Story = { args: { value: "Accounts Receivable", state: "default" } };
export const Editing: Story = { args: { value: "Accounts Receivable", state: "editing", editable: true } };
export const Error: Story = { args: { value: "(3,150.00)", state: "error", align: "right" } };
export const Truncated: Story = {
  args: { value: "Utilities — Overdue Balance Carried From Previous Quarter", state: "default" },
};
