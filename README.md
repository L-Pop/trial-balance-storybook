# Trial Balance — Storybook

Code companion to the [Trial Balance Figma file](https://www.figma.com/design/YCIOOyXcatc7zjImBIegHP/Trial-Balance-Table).
Implements the four component sets from the "Table Grid Components" page —
Cell, Header Cell, Row, Toolbar — with the same variants and the same M3
design tokens (`src/tokens/tokens.css`, mirroring the file's "M3/Color" and
"M3/Spacing" variable collections).

## Why this wasn't scaffolded with `npm create storybook@latest`

This workspace's network egress policy blocks `registry.npmjs.org`
(`403 Host not in allowlist`), so the Storybook CLI itself can't reach npm
from here. Everything the CLI would have generated — `package.json`,
`.storybook/main.ts`, `.storybook/preview.ts`, component + story files — has
been hand-written instead, so the project is ready to install the moment
registry access is allowed.

To unblock: a Team/Enterprise org **Owner** adds `registry.npmjs.org` (and
ideally `unpkg.com`, used by some Storybook addons at runtime) under
**Admin settings → Capabilities → network egress**.

## Getting started (once npm access is available)

```sh
npm install
npm run storybook
```

Storybook will start at `http://localhost:6006` with four story groups
under **Table Grid**: Cell, Header Cell, Row, Toolbar, and a composite
Table story reproducing the "Desktop — 1280" full-state-matrix table from
the Figma Responsive Demo page.

```sh
npm run build-storybook   # static build to storybook-static/
```

## Structure

```
.storybook/main.ts        Storybook config (React + Vite, TypeScript)
.storybook/preview.ts     Global parameters, imports tokens.css
src/tokens/tokens.css     M3 design tokens mirrored from the Figma file
src/components/
  icons.tsx                Shared inline SVG icon set
  Cell.tsx / .css / .stories.tsx           State=Default/Editing/Error
  HeaderCell.tsx / .css / .stories.tsx     State=Default/Sorted Asc/Sorted Desc/Filter Active
  Row.tsx / .css / .stories.tsx            State=Default/Hover/Selected/Disabled/Error
  Toolbar.tsx / .css / .stories.tsx        State=Default/Search Active/Filters Applied
  Table.stories.tsx        Composite story: Toolbar + Header Cell + Row together
```

Every component prop maps directly to a Figma Component Property (documented
in each component's JSDoc), so updates made in Figma stay easy to port back
into code, and vice versa.
