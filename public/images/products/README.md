# Product Images

Product screenshot illustrations for the HEIMDEX landing page.

## Current Images

### 1. `dashboard.png` (1.9MB)
**Content**: Main HEIMDEX dashboard showing:
- Welcome message with user name
- Video stats (Total, Ready, Processing, Pending)
- "People" section with person management
- Video grid with thumbnails and status badges
- Upload and search actions

**Used in**:
- Landing page showcase section (third showcase)
- Shows overall platform management capabilities

---

### 2. `search-view.png` (1.9MB)
**Content**: AI-powered search interface showing:
- Search bar with "Search videos..." input
- Active filters: "Person Detected" and "Results boosted"
- File filters (Demo_Video.mp4, Product_Launch.mp4)
- Search results with scene thumbnails
- Video player preview
- Scene metadata and descriptions

**Used in**:
- Landing page showcase section (first showcase)
- Demonstrates AI search and scene detection capabilities

---

### 3. `video-detail-page.png` (2.4MB)
**Content**: Detailed video analysis view showing:
- Video title and status ("Product_Launch_Video.mp4")
- Scene-by-scene breakdown with thumbnails
- Transcript segments with timestamps
- "Export to Short" functionality
- Visual and emotional analysis summaries
- Multi-scene navigation

**Used in**:
- Landing page showcase section (second showcase)
- Highlights scene segmentation and automatic summary features

---

## Usage in Code

### ProductShowcase Component

Location: `components/sections/ProductShowcase.tsx`

Example usage:
```tsx
<ProductShowcase
  title="Find every scene with just words"
  description="HEIMDEX's AI search understands your entire video library..."
  imageSrc="/images/products/search-view.png"
  imageAlt="HEIMDEX AI Search Interface"
  imagePosition="right"
  className="bg-surface-950"
/>
```

### Page Integration

Location: `app/[locale]/page.tsx` (lines 117-141)

Three showcase sections alternating left/right image positions with dark/light backgrounds.

---

## Image Specifications

**Format**: PNG
**Recommended dimensions**: 1200x800px minimum
**File size**: Keep under 3MB for optimal web performance
**Background**: Images have gradient purple/pink backgrounds (matches brand)
**Device mockups**: Images show product in realistic browser/desktop contexts

---

## Adding New Images

1. Save images to `public/images/products/`
2. Use descriptive filenames (e.g., `analytics-dashboard.png`, `export-feature.png`)
3. Optimize images before committing:
   ```bash
   # Using ImageOptim, Squoosh, or similar
   ```
4. Add image to ProductShowcase in desired page:
   ```tsx
   <ProductShowcase
     title="Your Feature Title"
     description="Description of the feature..."
     imageSrc="/images/products/your-image.png"
     imageAlt="Descriptive alt text"
     imagePosition="left" // or "right"
   />
   ```

---

## Design Guidelines

- Images should showcase real product functionality
- Use consistent UI design (dark theme, purple/violet accents)
- Include realistic data and labels (avoid lorem ipsum)
- Show product in browser or desktop mockups for context
- Maintain brand colors: cyan (#06b6d4), violet (#8b5cf6), pink (#ec4899)

---

## Performance Notes

- All images use Next.js `Image` component for automatic optimization
- Images are lazy-loaded except those above the fold
- Hover effects include smooth scale transitions and gradient glows
- Responsive: images scale appropriately on mobile devices

---

**Last updated**: 2026-01-06
