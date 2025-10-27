# SwiftCart Design Assets

This folder contains all the design assets for the SwiftCart e-commerce application.

## Logo Files

### 1. `logo.png`
- **Usage**: Full logo with text for desktop navigation
- **Dimensions**: Variable (responsive)
- **Context**: Desktop navbar, marketing materials
- **Description**: Complete SwiftCart logo with shopping cart icon and text

### 2. `logo-icon.png`
- **Usage**: Icon-only version for mobile navigation and favicon
- **Dimensions**: 32x32px (favicon), responsive for mobile
- **Context**: Mobile navbar, browser tabs, bookmarks
- **Description**: Shopping cart icon with speed lines, no text

### 3. `logo-solid.png`
- **Usage**: Solid version for footer and dark backgrounds
- **Dimensions**: Variable (responsive)
- **Context**: Footer, dark theme areas
- **Description**: Solid white shopping cart icon on blue background

## Favicon

The favicon is automatically generated from `logo-icon.png` and placed in the root public directory as `favicon.ico`.

## Usage Guidelines

- **Mobile Navigation**: Use `logo-icon.png` for compact display
- **Desktop Navigation**: Use `logo.png` for full branding
- **Footer**: Use `logo-solid.png` for dark backgrounds
- **Favicon**: Automatically handled by the browser

## File Structure

```
public/
├── favicon.ico (generated from logo-icon.png)
└── designs/
    ├── logo.png (full logo)
    ├── logo-icon.png (icon only)
    ├── logo-solid.png (solid version)
    └── README.md (this file)
```

## Responsive Implementation

The logos are implemented with responsive sizing:
- Mobile: `h-8 w-10` (icon version)
- Small: `h-9` (full logo)
- Medium: `h-10` (full logo)
- Large: `h-12` (full logo)

All logos maintain their aspect ratio with `w-auto` class.
