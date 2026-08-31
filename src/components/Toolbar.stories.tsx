import type { Meta, StoryObj } from "@storybook/react";
import { Toolbar } from "./Toolbar";

const meta: Meta<typeof Toolbar> = {
  title: "Table Grid/Toolbar",
  component: Toolbar,
  tags: ["autodocs"],
  argTypes: {
    state: { control: "select", options: ["default", "search-active", "filters-applied"] },
  },
};
export default meta;
type Story = StoryObj<typeof Toolbar>;

export const Default: Story = { args: { state: "default" } };
export const SearchActive: Story = { args: { state: "search-active", searchQuery: "utilities" } };
export const FiltersApplied: Story = { args: { state: "filters-applied", filters: ["This quarter", "Has error"] } };
