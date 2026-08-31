import type { Meta, StoryObj } from "@storybook/react";
import { HeaderCell } from "./HeaderCell";

const meta: Meta<typeof HeaderCell> = {
  title: "Table Grid/Header Cell",
  component: HeaderCell,
  tags: ["autodocs"],
  argTypes: {
    state: {
      control: "select",
      options: ["default", "sorted-ascending", "sorted-descending", "filter-active"],
    },
  },
};
export default meta;
type Story = StoryObj<typeof HeaderCell>;

export const Default: Story = { args: { label: "Account Name", state: "default" } };
export const SortedAscending: Story = { args: { label: "Account Name", state: "sorted-ascending", pinned: true } };
export const SortedDescending: Story = { args: { label: "Debit", state: "sorted-descending" } };
export const FilterActive: Story = { args: { label: "Status", state: "filter-active", sortable: false } };
