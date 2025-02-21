# ui

UI library for applications.

## Project Structure

```plaintext
.
├── .storybook               # Storybook configuration
├── src
│   ├── components           # Reusable components
│   │   └── <component>       # Component module
│   │       ├── index.ts     # Component exports
│   │       └── <component>.tsx # Component implementation
│   ├── animations           # Reusable animations
│   ├── hooks                # Custom hooks
│   ├── styles               # Reusable styles
│   ├── lib                  # Utility functions
│   ├── icons                # Icon components
│   ├── images               # Image assets
│   └── index.ts             # Entry point of UI library
├── tailwind.config.mjs      # Tailwind CSS configuration
└── components.json          # shadcn/ui configuration
```

## Tech Stack

- [TypeScript](https://www.typescriptlang.org/)
- [Storybook](https://storybook.js.org/) - Development environment for UI components
- [React](https://reactjs.org/) - A JavaScript framework for building user interfaces
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Framer Motion](https://www.framer.com/motion/) - Production-ready animation library for React
- [Lucide Icons](https://lucide.dev/) - Simple and clean SVG icon set
- [shadcn/ui](https://ui.shadcn.com/) - Component library generator
- [LottieFiles](https://lottiefiles.com/) - Animation library

## Development

### Adding a New Component

```bash
# Add a new component
pnpx shadcn-ui@latest add <component>
```

See [shadcn/ui](https://ui.shadcn.com/docs) for more information.

### Styling

See [Tailwind CSS](https://tailwindcss.com/docs) for more information.

This project uses [clsx](https://github.com/lukeed/clsx) for conditional class names.

## Writing Tests

...TBD

### Component Test

### Snapshot Test

### Visual Test

### Accessibility Test

## Continuous Integration

...TBD
