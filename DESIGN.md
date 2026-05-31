# BedGo! Design System

A comprehensive design documentation for BedGo Servicios Inmobiliarios - where property generates income.

---

## Design Tokens

### Colors

#### Primary Palette
```
Color Name: Primary Purple (Bedgo "g")
Hex: #484894
RGB: (72, 72, 148)
Usage: Headings, footer, brand backgrounds, structural elements
Contrast: AA with white
```

```
Color Name: Secondary Pink (Bedgo icon)
Hex: #F46CA8
RGB: (244, 108, 168)
Usage: CTAs, interactive elements, hovers, accent highlights
Contrast: AA with white & dark backgrounds
```

```
Color Name: Accent Yellow (Bedgo bar)
Hex: #F0C800
RGB: (240, 200, 0)
Usage: Price highlights, emphasis text, logo accent
Contrast: Use on dark backgrounds
```

```
Color Name: Text Black (Bedgo "Bed")
Hex: #1C1C1C
RGB: (28, 28, 28)
Usage: Body text, headings on light backgrounds
```

```
Color Name: White
Hex: #FFFFFF
RGB: (255, 255, 255)
Usage: Backgrounds, text on dark backgrounds, cards
```

#### Secondary Palette
```
Color Name: Gray Light
Hex: #F5F5F5
RGB: (245, 245, 245)
Usage: Section backgrounds, subtle dividers, card backgrounds
Contrast: AAA with primary dark text
```

```
Color Name: Gray Muted (Tagline)
Hex: #A8A8A8
RGB: (168, 168, 168)
Usage: Logo tagline, metadata, subtle labels
Contrast: AA with white
```

```
Color Name: Gray Dark
Hex: #757575
RGB: (117, 117, 117)
Usage: Secondary text, descriptions, metadata
Contrast: AA with white
```

#### Status Colors
```
Color Name: Success
Hex: #4CAF50
RGB: (76, 175, 80)
Usage: Success messages, confirmation states, valid inputs
```

```
Color Name: Danger
Hex: #F44336
RGB: (244, 67, 54)
Usage: Error messages, warnings, required fields
```

```
Color Name: Warning
Hex: #FF9800
RGB: (255, 152, 0)
Usage: Alerts, special offers, attention-grabbing elements
```

### Typography

#### Type System
```
Font Family: Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica
Fallback Stack: Georgia, serif

Font Loading: Google Fonts - Inter (weights: 400, 500, 600, 700)
Line Height: 1.6 (body), 1.2 (headings)
```

#### Type Scale
```
Heading 1: 3.5rem | 700 weight | 1.2 line-height | #001F3F
Heading 2: 2.25rem | 700 weight | 1.2 line-height | #001F3F
Heading 3: 1.75rem | 600 weight | 1.3 line-height | #001F3F
Heading 4: 1.5rem | 700 weight | #001F3F

Subtitle/Lead: 1.25rem | 400 weight | #555555
Body Regular: 1rem | 400 weight | 1.6 line-height | #001F3F
Body Small: 0.95rem | 400 weight | #555555
Label: 0.9rem | 500 weight | #555555
Caption: 0.85rem | 400 weight | #757575
```

### Spacing

#### Spacing Scale (8px base unit)
```
xs: 0.25rem (4px)
sm: 0.5rem (8px)
md: 1rem (16px)
lg: 1.5rem (24px)
xl: 2rem (32px)
xxl: 3rem (48px)
xxxl: 4rem (64px)
huge: 5rem (80px)
```

#### Padding Scale (component-level)
```
Compact: 0.75rem
Standard: 1rem
Spacious: 1.5rem
Extra: 2rem
Section: 5rem
```

### Border & Radius

#### Border Radius
```
None: 0rem
Small: 0.3rem
Medium: 0.5rem
Large: 1rem
Full: 9999px
```

#### Border Width
```
Thin: 1px
Standard: 2px
Thick: 4px
```

#### Shadow System
```
Subtle: 0 2px 10px rgba(0, 0, 0, 0.05)
Light: 0 5px 20px rgba(0, 0, 0, 0.08)
Medium: 0 10px 30px rgba(0, 0, 0, 0.1)
Lifted: 0 20px 40px rgba(0, 188, 212, 0.15)
Heavy: 0 40px 80px rgba(0, 0, 0, 0.2)
```

### Transitions & Motion

#### Animation Durations
```
Fast: 0.3s
Standard: 0.6s
Slow: 0.8s
Extra Slow: 1s
```

#### Easing Functions
```
Ease Out: ease-out (standard animations)
Ease In: ease-in (exit animations)
Ease In Out: ease-in-out (complex motions)
Linear: linear (rotating elements)
```

---

## Components

### Button

#### Button Primary
```
Background: #00BCD4
Color: white
Padding: 0.75rem 1.5rem
Border Radius: 0.5rem
Font Weight: 600
Font Size: 1rem
Border: none

States:
  Default: background #00BCD4
  Hover: background #00a8c7, transform translateY(-2px), shadow lifted
  Focus: outline 2px solid #00BCD4, offset 2px
  Disabled: opacity 0.6, cursor not-allowed
  Loading: ::after spinner animation
```

#### Button Secondary
```
Background: #001F3F
Color: white
Padding: 0.75rem 1.5rem
Border Radius: 0.5rem
Font Weight: 600

States:
  Default: background #001F3F
  Hover: background #001a2f
  Focus: outline 2px solid #00BCD4
```

### Form Elements

#### Text Input
```
Padding: 0.75rem
Border: 1px solid #ddd
Border Radius: 0.5rem
Font Size: 1rem
Font Family: inherit
Transition: 0.3s

States:
  Default: border #ddd
  Focus: border #00BCD4, box-shadow 0 0 0 3px rgba(0, 188, 212, 0.1)
  Focus Visible: outline 2px #00BCD4, offset 2px
  Filled: text #001F3F
  Error: border #F44336, box-shadow error
```

#### Form Label
```
Display: block
Font Weight: 600
Color: #001F3F
Font Size: 0.95rem
Margin Bottom: 0.5rem

States:
  Required: ::after red asterisk
  Error: color #F44336
```

#### Select & Textarea
```
Same as text input
Textarea min-height: 100px
Resize: vertical
```

### Cards

#### Base Card
```
Background: white
Border: 1px solid #e0e0e0
Border Radius: 1rem
Padding: 2rem
Transition: 0.3s

States:
  Default: border #e0e0e0
  Hover: border #00BCD4, box-shadow medium, transform translateY(-5px)
  Focus: outline 2px #00BCD4, offset 2px
  Selected: border #001F3F, background #00BCD4, color white
```

#### Feature Card
```
Based on base card
Icon Size: 2.5rem
Title Font: 1.25rem, 700 weight
Description: 0.95rem, #555555
Text Align: center
```

#### Profile Card
```
Based on base card
Title: 1.25rem, 700 weight
Price: 1.75rem, 700 weight, #00BCD4
Features: list, checkmarks in #00BCD4

States:
  Selected: background #00BCD4, color white, shadow lifted
  Selected .price: color white
  Selected .checkmark: color white
```

#### Room Card
```
Based on base card
Image Area: 10rem height
Image Background: gradient #00BCD4/10% → #001F3F/10%
Content Padding: 1.5rem
Title: 1.1rem, 700 weight
Price: 1.5rem, 700 weight, #00BCD4
Features: inline tags, background #F5F5F5
```

### Header

```
Background: white
Padding: 1.5rem
Box Shadow: 0 2px 10px rgba(0, 0, 0, 0.05)
Position: sticky, top 0, z-index 100

Logo:
  Font Size: 1.5rem
  Font Weight: 700
  Color: #001F3F
  Display: flex, gap 0.5rem
  Cursor: pointer

Navigation:
  Display: flex, gap 2rem
  Link Color: #001F3F
  Link Hover Color: #00BCD4
  Link Focus: outline 2px #00BCD4
```

### Hero Section

```
Background: linear-gradient(135deg, white 0%, #F5F5F5 100%)
Background Image: real estate photography (overlay applied)
Padding: 5rem 1.5rem
Text Align: center
Max Width: 70rem
Margin: 0 auto

Heading (H1):
  Font Size: 3.5rem
  Font Weight: 700
  Color: #001F3F
  Margin Bottom: 1rem

Paragraph:
  Font Size: 1.25rem
  Color: #555555
  Margin Bottom: 2rem

Highlight:
  Font Size: 2rem
  Color: #00BCD4
  Font Weight: 700
```

### Section

```
Padding: 5rem 1.5rem
Max Width: 90rem
Margin: 0 auto

Title:
  Font Size: 2.25rem
  Font Weight: 700
  Text Align: center
  Margin Bottom: 4rem
  Color: #001F3F
```

### Stats Section

```
Background: linear-gradient(135deg, #001F3F 0%, #0a1a35 100%)
Color: white
Padding: 4rem 1.5rem

Grid:
  Columns: repeat(auto-fit, minmax(200px, 1fr))
  Gap: 2rem

Stat Box:
  Background: rgba(255, 255, 255, 0.1)
  Backdrop Filter: blur(10px)
  Padding: 2rem
  Border Radius: 1rem
  Border: 1px solid rgba(255, 255, 255, 0.2)
  Text Align: center

Number:
  Font Size: 2.5rem
  Font Weight: 700
  Margin Bottom: 0.5rem

Label:
  Color: rgba(255, 255, 255, 0.8)
  Font Size: 0.95rem
```

### Footer

```
Background: #001F3F
Color: white
Padding: 3rem 1.5rem
Text Align: center

Text:
  Margin Bottom: 1rem
  Color: rgba(255, 255, 255, 0.8)

Contact:
  Display: flex
  Gap: 2rem
  Justify Content: center
  Margin Top: 1.5rem
  Flex Wrap: wrap

Contact Link:
  Color: #00BCD4
  Font Weight: 500
  Text Decoration: none
```

---

## Patterns

### Role Selector Grid
```
Grid Layout: grid-template-columns: 1fr 1fr
Gap: 2rem
Margin: 3rem 0

Uses: Role cards with icons, titles, CTAs
Mobile: switches to single column
```

### Benefit Cards Grid
```
Grid Layout: repeat(auto-fit, minmax(300px, 1fr))
Gap: 2rem
Margin Top: 2rem

Number Badge:
  Width: 3rem
  Height: 3rem
  Background: #00BCD4
  Color: white
  Border Radius: 0.5rem
  Display: flex-center
  Font Size: 1.5rem, 700 weight
```

### Feature Grid
```
Grid Layout: repeat(auto-fit, minmax(280px, 1fr))
Gap: 2rem

Uses: Feature items, profile cards, room cards
Responsive: Single column below 768px
```

### Pricing Box
```
Background: white
Border: 2px solid #00BCD4
Border Radius: 1rem
Padding: 2rem
Max Width: 50rem
Margin: 0 auto

Row:
  Display: flex space-between
  Padding: 1rem 0
  Border Bottom: 1px solid #e0e0e0

Highlight:
  Background: rgba(0, 188, 212, 0.1)
  Border Left: 4px solid #00BCD4
  Padding: 1.5rem
  Border Radius: 0.5rem
```

### Form Container
```
Background: white
Padding: 3rem
Border Radius: 1rem
Box Shadow: medium
Max Width: 60rem
Margin: 0 auto

Fieldset:
  Border: 1px solid #e0e0e0
  Border Radius: 0.5rem
  Padding: 1.5rem
  Margin Bottom: 1.5rem

Legend:
  Font Weight: 600
  Color: #001F3F
  Font Size: 0.95rem
  Padding: 0 0.5rem
```

---

## Responsive Breakpoints

```
Mobile Small: max-width 480px
  Hero H1: 1.75rem
  Buttons: full-width, centered
  Forms: single column

Mobile: max-width 768px
  Hero H1: 2.25rem
  Section Title: 1.75rem
  Buttons: flex-direction column
  Forms: single column (form-row)
  Role Selector: single column
  Nav: hidden
  Header Padding: 1rem

Desktop: 768px+
  Full grid layouts
  Multi-column forms
  Navigation visible
  Optimized spacing
```

---

## Animations

### Fade In
```
@keyframes fadeIn {
  from: opacity 0, transform translateY(20px)
  to: opacity 1, transform translateY(0)
}
Duration: 0.8s
Easing: ease-out
```

### Slide In Left
```
@keyframes slideInLeft {
  from: opacity 0, transform translateX(-50px)
  to: opacity 1, transform translateX(0)
}
Duration: 0.8s
Easing: ease-out
```

### Slide In Right
```
@keyframes slideInRight {
  from: opacity 0, transform translateX(50px)
  to: opacity 1, transform translateX(0)
}
Duration: 0.8s
Easing: ease-out
```

### Scale In
```
@keyframes scaleIn {
  from: opacity 0, transform scale(0.95)
  to: opacity 1, transform scale(1)
}
Duration: 0.6s
Easing: ease-out
```

### Pulse
```
@keyframes pulse {
  0%, 100%: opacity 1
  50%: opacity 0.5
}
Duration: 2s
Easing: ease-in-out
Iteration: infinite
```

---

## Accessibility

### Color Contrast
- All text meets WCAG AA standards minimum
- Primary dark on white: 10.5:1 contrast ratio
- Secondary on white: 5.3:1 contrast ratio
- Secondary on dark: 7.2:1 contrast ratio

### Keyboard Navigation
- All interactive elements have visible focus states
- Focus outline: 2px solid #00BCD4 with 2px offset
- Tab order follows visual flow
- Links have adequate padding (min 0.75rem)

### Focus Visible
```
:focus-visible {
  outline: 2px solid #00BCD4
  outline-offset: 2px
  border-radius: 0.3rem
}
```

### Semantic HTML
- Proper heading hierarchy (h1 → h2 → h3)
- Form labels properly associated
- Fieldsets for grouped inputs
- Buttons for actions, links for navigation
- Alt text for images (decorative="true" for icons)

### Touch Targets
- Minimum 44x44px for touch interaction
- Buttons have 0.75rem padding minimum
- Links have adequate spacing
- Form inputs: 0.75rem padding minimum

---

## Layout Specifications

### Page Maximum Width
```
Content: 90rem (1440px)
Narrow Content: 70rem (1120px)
Wide: full viewport width

Margins: 0 auto
Padding: 1.5rem sides (mobile), varies on desktop
```

### Vertical Spacing (between sections)
```
Hero to Section: 5rem padding per section
Section to Section: 5rem padding per section
Card to Card: 2rem gap
```

### Grid Specifications

#### Two Column
```
Grid: 1fr 1fr
Gap: 2rem
Responsive: 1fr below 768px
```

#### Three Column
```
Grid: repeat(auto-fit, minmax(280px, 1fr))
Gap: 2rem
Responsive: automatic based on minmax
```

#### Four Column
```
Grid: repeat(auto-fit, minmax(200px, 1fr))
Gap: 2rem
Responsive: adjusts to 1-4 columns
```

---

## Color Usage Guidelines

### Background Colors
- White for primary content areas
- #F5F5F5 for secondary sections
- #001F3F for footer/stats sections
- Gradients for depth (135deg recommended)

### Text Colors
- #001F3F for headings and primary text
- #555555 for secondary/body text
- #757575 for captions/metadata
- White for text on dark backgrounds

### Interactive States
- #00BCD4 for hover states
- #F44336 for error states
- #4CAF50 for success states
- #FF9800 for warnings

---

## Branding Alignment

### Voice & Tone
- Direct and clear language
- Numbers and concrete benefits
- Professional but approachable
- Action-oriented messaging

### Key Messages
1. €1.200/mes garantizado
2. Reforma gratis de €4.000
3. Pago adelantado + cero esfuerzo
4. Contrato legal, empresa responsable

### Logo Usage
- Minimum size: 80px width
- Space around: 20px minimum
- Proportions: 1:1 maintained
- Can be used on white or dark backgrounds
- Not to be distorted or modified

---

## Form Specifications

### Form States
```
Default: border #ddd, no shadow
Focus: border #00BCD4, shadow rgba(0, 188, 212, 0.1)
Filled: text #001F3F
Error: border #F44336, shadow error
Valid: checkmark indicator
Loading: disabled state with opacity 0.6
```

### Required Fields
- Indicated with red asterisk (*)
- Label: font-weight 600
- Error messages appear above/below field

### Success/Error Messages
```
Success Message:
  Background: rgba(76, 175, 80, 0.1)
  Color: #2e7d32
  Border: 1px solid rgba(76, 175, 80, 0.3)
  Padding: 1rem
  Border Radius: 0.5rem

Error Message:
  Background: rgba(244, 67, 54, 0.1)
  Color: #c62828
  Border: 1px solid rgba(244, 67, 54, 0.3)
  Padding: 1rem
  Border Radius: 0.5rem
```

---

## File Structure & Implementation

### CSS Architecture
```
1. Reset & Base Styles
2. CSS Variables (Design Tokens)
3. Animation Keyframes
4. Component Styles (organized by section)
5. Responsive Media Queries
6. Utility Classes
```

### JavaScript Enhancements
- Form submission handling
- Section navigation
- Smooth scrolling
- Message displays
- Button state management

### Performance Considerations
- Font loading via Google Fonts
- Minimal animations (smooth 0.3-0.8s)
- Hardware acceleration via transform
- Backdrop filters for modern browsers

---

## Version History

| Version | Date | Changes |
|---------|------|---------|
| 1.0 | May 25, 2026 | Initial design system documentation |

---

**Last Updated:** May 25, 2026  
**Maintained by:** BedGo Design Team  
**Status:** Active & In Use