# SwiftCart Figma Design Specification

## Overview
This document provides a comprehensive design specification for recreating the SwiftCart e-commerce application in Figma. The design follows a modern, clean aesthetic with a blue and purple color scheme, responsive layout, and user-friendly interface.

## Design System

### Color Palette
```
Primary Colors:
- Primary Blue: #2563eb (Blue-600)
- Primary Blue Hover: #1d4ed8 (Blue-700)
- Primary Blue Light: #dbeafe (Blue-100)

Secondary Colors:
- Secondary Purple: #7c3aed (Purple-600)
- Secondary Purple Hover: #6d28d9 (Purple-700)

Status Colors:
- Success Green: #059669 (Green-600)
- Success Green Light: #d1fae5 (Green-100)
- Warning Yellow: #d97706 (Yellow-600)
- Error Red: #dc2626 (Red-600)
- Error Red Light: #fee2e2 (Red-100)

Neutral Colors:
- White: #ffffff
- Gray-50: #f9fafb
- Gray-100: #f3f4f6
- Gray-200: #e5e7eb
- Gray-300: #d1d5db
- Gray-400: #9ca3af
- Gray-500: #6b7280
- Gray-600: #4b5563
- Gray-700: #374151
- Gray-800: #1f2937
- Gray-900: #111827
```

### Typography
```
Font Family: Inter (Primary), -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto' (Fallbacks)

Headings:
- H1: 48px, Font Weight 700, Line Height 1.2
- H2: 36px, Font Weight 700, Line Height 1.3
- H3: 24px, Font Weight 600, Line Height 1.4
- H4: 20px, Font Weight 600, Line Height 1.4

Body Text:
- Large: 18px, Font Weight 400, Line Height 1.6
- Regular: 16px, Font Weight 400, Line Height 1.5
- Small: 14px, Font Weight 400, Line Height 1.4
- Extra Small: 12px, Font Weight 400, Line Height 1.3

Labels:
- Form Labels: 14px, Font Weight 500, Line Height 1.4
- Button Text: 16px, Font Weight 500, Line Height 1.4
```

### Spacing System
```
Base Unit: 4px
- xs: 4px
- sm: 8px
- md: 16px
- lg: 24px
- xl: 32px
- 2xl: 48px
- 3xl: 64px
- 4xl: 96px
```

### Border Radius
```
- Small: 4px
- Medium: 8px
- Large: 12px
- Extra Large: 16px
- Full: 50% (for circular elements)
```

### Shadows
```
- Small: 0 1px 2px 0 rgba(0, 0, 0, 0.05)
- Medium: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)
- Large: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)
- Extra Large: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)
```

## Component Specifications

### 1. Navigation Bar
**Desktop Version:**
- Height: 80px
- Background: White (#ffffff)
- Shadow: Medium shadow
- Container: Max-width 1280px, centered
- Logo: Left side, height 48px
- Navigation Links: Center, 16px font, Gray-700, hover Blue-600
- User Menu: Right side with avatar and dropdown
- Cart Icon: Right side with red badge for item count

**Mobile Version:**
- Hamburger menu button
- Collapsible navigation menu
- Logo: Smaller version (32px height)

### 2. Hero Section
**Layout:**
- Full-width gradient background: Blue-600 to Purple-600
- Height: 500px
- Content: Centered, max-width 1024px
- Text: White, centered

**Animated Elements:**
- Swift Trail Effects: Multiple horizontal lines with glow effects
- Animation: Moving from left to right and right to left
- Opacity: 0.5-0.8
- Colors: White with various opacities

**Content:**
- Main Heading: "Welcome to SwiftCart" (48px, bold, italic for "SwiftCart")
- Subheading: 20px, margin-bottom 32px
- CTA Button: White background, Blue-600 text, 16px padding

### 3. Category Grid
**Layout:**
- Grid: 3 columns on desktop, 2 on tablet, 1 on mobile
- Gap: 24px
- Card: White background, medium shadow, 8px border radius

**Category Card:**
- Padding: 24px
- Icon: 80px (5xl emoji size)
- Title: 18px, font-weight 600
- Hover: Scale icon 110%, change title color to Blue-600

### 4. Product Card
**Dimensions:**
- Width: 280px (desktop), 100% (mobile)
- Height: Auto
- Border radius: 8px
- Shadow: Medium

**Image:**
- Aspect ratio: 1:1 (square)
- Height: 192px
- Object fit: Cover
- Border radius: 8px (top only)

**Content:**
- Padding: 16px
- Title: 18px, font-weight 600, 2-line clamp
- Rating: 5 stars, 16px size, Yellow-400
- Description: 14px, Gray-600, 2-line clamp
- Price: 24px, font-weight 700, Blue-600
- Stock indicator: 12px, Gray-500, Gray-100 background

**Buttons:**
- Add to Cart: Green-600 background, White text, 16px padding
- View Details: Blue-600 background, White text, 16px padding
- Disabled state: Gray-300 background, Gray-500 text

### 5. Shopping Cart
**Layout:**
- Two-column layout (2/3 cart items, 1/3 summary)
- Max-width: 1200px

**Cart Item:**
- White background, medium shadow
- Padding: 24px
- Image: 80x80px, rounded
- Quantity controls: Circular buttons, 32px diameter
- Remove button: Red-600 text, 14px

**Order Summary:**
- Sticky positioning
- White background, medium shadow
- Padding: 24px
- Border radius: 8px

### 6. Checkout Process
**Progress Steps:**
- Horizontal layout with connecting lines
- Step indicator: 40px circle
- Active: Blue-600 background, White text
- Completed: Blue-600 background, White checkmark
- Inactive: Gray-300 background, Gray-500 text

**Form Fields:**
- Label: 14px, font-weight 500, Gray-700
- Input: 16px, padding 12px, border Gray-300, focus Blue-500
- Required asterisk: Red-600

**Payment Methods:**
- Radio buttons with labels
- Card form: Grid layout for expiry/CVV
- COD notice: Yellow-50 background, Yellow-800 text

### 7. Admin Dashboard
**Layout:**
- Full-width container
- Tab navigation: Border-bottom style
- Active tab: Blue-500 border, Blue-600 text

**Stats Cards:**
- Grid: 4 columns on desktop
- White background, medium shadow
- Icon: 24px, colored background circle
- Value: 24px, font-weight 600
- Label: 14px, Gray-600

**Data Tables:**
- White background, medium shadow
- Header: Gray-50 background, 12px uppercase labels
- Rows: Alternating Gray-50/White backgrounds
- Status badges: Rounded pills with colored backgrounds

### 8. Footer
**Layout:**
- Dark background: Gray-900
- Text: White and Gray-400
- Grid: 4 columns on desktop, 2 on tablet, 1 on mobile
- Padding: 48px

**Sections:**
- Company Info: Logo, description, social icons
- Quick Links: Navigation links
- Customer Service: Support links
- Contact Info: Address, phone, email, hours

## Responsive Breakpoints

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

## Animation Specifications

### Swift Trail Animation
- Duration: 4 seconds
- Timing: Linear, infinite
- Direction: Left to right and right to left
- Opacity: 0 → 1 → 1 → 0
- Transform: translateX(-100vw) → translateX(100vw)
- Glow effect: Box-shadow with white color

### Hover Effects
- Buttons: Scale 1.05, shadow increase
- Cards: Shadow increase, scale 1.02
- Links: Color change to Blue-600
- Icons: Scale 1.1

### Loading States
- Skeleton screens: Gray-300 background, shimmer effect
- Spinner: Blue-600, 32px diameter, 2px border
- Pulse animation: Opacity 0.5 → 1 → 0.5

## Accessibility Guidelines

### Color Contrast
- Text on white: Minimum 4.5:1 ratio
- Interactive elements: Minimum 3:1 ratio
- Focus states: 2px Blue-500 outline

### Interactive Elements
- Minimum touch target: 44px
- Focus indicators: Visible on keyboard navigation
- Screen reader labels: Proper ARIA attributes

### Typography
- Minimum font size: 14px
- Line height: Minimum 1.4
- Font weight: Minimum 400 for body text

## Implementation Notes

### Figma Setup
1. Create a new Figma file named "SwiftCart Design System"
2. Set up color styles with the specified hex values
3. Create text styles for all typography variants
4. Set up component library with reusable elements
5. Create responsive frames for mobile, tablet, and desktop

### Component Organization
- Group components by page/section
- Use consistent naming conventions
- Create variants for different states (hover, active, disabled)
- Include both light and dark mode considerations

### Asset Requirements
- Logo files in multiple sizes (16px, 32px, 48px, 64px)
- Product placeholder images (280x280px)
- Category icons (80x80px)
- Social media icons (24x24px)
- Payment method icons (32x32px)

This specification provides everything needed to recreate the SwiftCart design in Figma with pixel-perfect accuracy and proper responsive behavior.
