# My Personal UI Component Library

A modern, accessible, and type-safe UI component library built with React, TypeScript, and Tailwind CSS. Designed to provide a comprehensive set of components that are both beautiful and functional out of the box, while remaining highly customizable.

## Features

✨ **Modern Stack**
- Built with React + TypeScript
- Styled with Tailwind CSS
- Full responsive design
- Dark mode support

🎨 **Design System**
- Consistent design language
- Customizable theming
- Flexible component variants
- Icon system integration

♿️ **Accessibility**
- WAI-ARIA compliant
- Keyboard navigation
- Screen reader friendly
- Focus management

🛠 **Developer Experience**
- Type-safe components
- Comprehensive documentation
- Intuitive API design
- Consistent patterns

## Components

The library includes a growing set of components including:
- Buttons
- Inputs
- Cards
- Alerts
- Tooltips
- Toggles
- Select menus
- And more...

Each component is:
- Fully typed with TypeScript
- Customizable via props and Tailwind classes
- Accessible by default
- Responsive out of the box

## Example Usage

```tsx
import { Button, Input, Card } from '@ui/components';

function MyComponent() {
  return (
    <Card>
      <Input 
        leftIcon={<SearchIcon />} 
        placeholder="Search..." 
      />
      <Button variant="primary">
        Submit
      </Button>
    </Card>
  );
}
```

## Contributing

Contributions are welcome! Please read our contributing guidelines before submitting a pull request.
