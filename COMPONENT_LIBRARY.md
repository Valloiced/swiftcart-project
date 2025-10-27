# SwiftCart Component Library

This document outlines all the reusable components needed to recreate the SwiftCart design in Figma.

## 1. Buttons

### Primary Button
```
Style: Primary
Background: #2563eb (Blue-600)
Text: White
Padding: 12px 24px
Border Radius: 8px
Font: 16px, Weight 500
Hover: #1d4ed8 (Blue-700)
Disabled: #9ca3af (Gray-400)
```

### Secondary Button
```
Style: Secondary
Background: #f3f4f6 (Gray-100)
Text: #374151 (Gray-700)
Border: 1px solid #d1d5db (Gray-300)
Padding: 12px 24px
Border Radius: 8px
Font: 16px, Weight 500
Hover: #e5e7eb (Gray-200)
```

### Success Button
```
Style: Success
Background: #059669 (Green-600)
Text: White
Padding: 12px 24px
Border Radius: 8px
Font: 16px, Weight 500
Hover: #047857 (Green-700)
```

### Danger Button
```
Style: Danger
Background: #dc2626 (Red-600)
Text: White
Padding: 12px 24px
Border Radius: 8px
Font: 16px, Weight 500
Hover: #b91c1c (Red-700)
```

### Icon Button
```
Style: Icon
Background: Transparent
Icon: 24px
Padding: 8px
Border Radius: 8px
Hover: #f3f4f6 (Gray-100)
```

## 2. Form Elements

### Text Input
```
Background: White
Border: 1px solid #d1d5db (Gray-300)
Border Radius: 8px
Padding: 12px 16px
Font: 16px, Weight 400
Focus: Border #2563eb (Blue-500), Ring 2px #2563eb
Placeholder: #9ca3af (Gray-400)
```

### Select Dropdown
```
Background: White
Border: 1px solid #d1d5db (Gray-300)
Border Radius: 8px
Padding: 12px 16px
Font: 16px, Weight 400
Focus: Border #2563eb (Blue-500), Ring 2px #2563eb
Arrow: 20px, Gray-500
```

### Checkbox
```
Size: 16px x 16px
Border: 1px solid #d1d5db (Gray-300)
Border Radius: 4px
Background: White
Checked: Background #2563eb (Blue-600), Checkmark White
Focus: Ring 2px #2563eb
```

### Radio Button
```
Size: 16px x 16px
Border: 1px solid #d1d5db (Gray-300)
Border Radius: 50%
Background: White
Checked: Background #2563eb (Blue-600), Dot White
Focus: Ring 2px #2563eb
```

### Label
```
Font: 14px, Weight 500
Color: #374151 (Gray-700)
Margin Bottom: 8px
Required Asterisk: #dc2626 (Red-600)
```

## 3. Cards

### Product Card
```
Background: White
Border Radius: 8px
Shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1)
Padding: 16px
Width: 280px
Hover: Shadow 0 10px 15px -3px rgba(0, 0, 0, 0.1)
```

### Category Card
```
Background: White
Border Radius: 8px
Shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1)
Padding: 24px
Text Align: Center
Hover: Scale 1.02, Shadow increase
```

### Cart Item Card
```
Background: White
Border Radius: 8px
Shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1)
Padding: 24px
Margin Bottom: 16px
```

### Stats Card
```
Background: White
Border Radius: 8px
Shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1)
Padding: 24px
```

## 4. Navigation

### Navbar
```
Background: White
Height: 80px
Shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1)
Padding: 0 24px
```

### Nav Link
```
Font: 16px, Weight 400
Color: #374151 (Gray-700)
Padding: 8px 16px
Hover: #2563eb (Blue-600)
Active: #2563eb (Blue-600), Weight 500
```

### User Menu
```
Background: White
Border: 1px solid #e5e7eb (Gray-200)
Border Radius: 8px
Shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1)
Padding: 8px 0
Min Width: 200px
```

### Mobile Menu
```
Background: White
Border Top: 1px solid #e5e7eb (Gray-200)
Padding: 16px 24px
```

## 5. Badges & Status

### Cart Badge
```
Background: #dc2626 (Red-600)
Text: White
Font: 12px, Weight 500
Size: 20px x 20px
Border Radius: 50%
Position: Absolute, Top -4px, Right -4px
```

### Status Badge
```
Processing: Background #fef3c7 (Yellow-100), Text #92400e (Yellow-800)
Shipped: Background #dbeafe (Blue-100), Text #1e40af (Blue-800)
Delivered: Background #d1fae5 (Green-100), Text #065f46 (Green-800)
Cancelled: Background #fee2e2 (Red-100), Text #991b1b (Red-800)
Font: 12px, Weight 600
Padding: 4px 8px
Border Radius: 9999px
```

### Stock Badge
```
In Stock: Background #d1fae5 (Green-100), Text #065f46 (Green-800)
Out of Stock: Background #fee2e2 (Red-100), Text #991b1b (Red-800)
Font: 12px, Weight 500
Padding: 2px 8px
Border Radius: 4px
```

## 6. Icons

### Cart Icon
```
Size: 24px x 24px
Color: #374151 (Gray-700)
Hover: #2563eb (Blue-600)
```

### User Avatar
```
Size: 32px x 32px
Background: #2563eb (Blue-600)
Text: White, 14px, Weight 500
Border Radius: 50%
```

### Rating Stars
```
Size: 16px x 16px
Color: #fbbf24 (Yellow-400)
Empty: #d1d5db (Gray-300)
```

### Social Icons
```
Size: 20px x 20px
Color: #9ca3af (Gray-400)
Hover: White
```

## 7. Layout Components

### Container
```
Max Width: 1280px
Margin: 0 auto
Padding: 0 24px
```

### Grid
```
Desktop: 4 columns, 24px gap
Tablet: 2 columns, 16px gap
Mobile: 1 column, 16px gap
```

### Section
```
Padding: 48px 0
Background: #f9fafb (Gray-50)
```

### Hero Section
```
Height: 500px
Background: Linear gradient Blue-600 to Purple-600
Text: White, Centered
Padding: 80px 24px
```

## 8. Loading States

### Skeleton Card
```
Background: #f3f4f6 (Gray-100)
Border Radius: 8px
Height: 200px
Animation: Pulse
```

### Spinner
```
Size: 32px x 32px
Border: 2px solid #e5e7eb (Gray-200)
Border Top: 2px solid #2563eb (Blue-600)
Border Radius: 50%
Animation: Spin
```

### Shimmer Effect
```
Background: Linear gradient 90deg, #f3f4f6 25%, #e5e7eb 50%, #f3f4f6 75%
Animation: Shimmer 1.5s infinite
```

## 9. Modals & Overlays

### Modal Backdrop
```
Background: rgba(0, 0, 0, 0.5)
Position: Fixed, Full screen
Z-index: 50
```

### Modal Content
```
Background: White
Border Radius: 8px
Shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1)
Max Width: 500px
Padding: 24px
```

### Toast Notification
```
Background: White
Border: 1px solid #e5e7eb (Gray-200)
Border Radius: 8px
Shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1)
Padding: 16px
Min Width: 300px
```

## 10. Data Display

### Table Header
```
Background: #f9fafb (Gray-50)
Font: 12px, Weight 500, Uppercase
Color: #6b7280 (Gray-500)
Padding: 12px 24px
Border Bottom: 1px solid #e5e7eb (Gray-200)
```

### Table Row
```
Padding: 16px 24px
Border Bottom: 1px solid #e5e7eb (Gray-200)
Hover: #f9fafb (Gray-50)
```

### Progress Bar
```
Background: #e5e7eb (Gray-200)
Height: 8px
Border Radius: 4px
Progress: #2563eb (Blue-600)
```

### Pagination
```
Button: 32px x 32px
Background: White
Border: 1px solid #d1d5db (Gray-300)
Border Radius: 4px
Active: Background #2563eb (Blue-600), Text White
Hover: Background #f3f4f6 (Gray-100)
```

## 11. Interactive Elements

### Quantity Controls
```
Button: 32px x 32px
Background: White
Border: 1px solid #d1d5db (Gray-300)
Border Radius: 50%
Icon: 16px x 16px
Hover: Background #f3f4f6 (Gray-100)
```

### Tabs
```
Active: Border Bottom 2px #2563eb (Blue-500), Color #2563eb (Blue-600)
Inactive: Color #6b7280 (Gray-500)
Padding: 8px 16px
Font: 14px, Weight 500
```

### Dropdown Menu
```
Background: White
Border: 1px solid #e5e7eb (Gray-200)
Border Radius: 8px
Shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1)
Padding: 8px 0
Min Width: 200px
```

## 12. Responsive Breakpoints

### Mobile (320px - 639px)
- Single column layouts
- Stacked navigation
- Full-width cards
- Touch-friendly buttons (44px minimum)
- Reduced padding and margins

### Tablet (640px - 1023px)
- Two-column grids where appropriate
- Collapsible navigation
- Medium padding and margins

### Desktop (1024px+)
- Multi-column layouts
- Full navigation visible
- Hover states and animations
- Maximum content width: 1280px

## Usage Guidelines

1. **Consistency**: Always use the same component variants across the application
2. **Accessibility**: Ensure proper contrast ratios and keyboard navigation
3. **Responsiveness**: Test components at all breakpoints
4. **States**: Include hover, active, disabled, and loading states
5. **Variants**: Create variants for different sizes and contexts
6. **Documentation**: Document component usage and customization options

This component library provides all the building blocks needed to recreate the SwiftCart design system in Figma with pixel-perfect accuracy.
