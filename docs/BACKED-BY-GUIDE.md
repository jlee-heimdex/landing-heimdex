# Backed By Section - Implementation Guide

## ✅ What Was Added

A "Backed By" section has been added to showcase your investors and partners (Antler) on both the main landing page and company page.

---

## 📍 Where to Find the Logo Configuration

### Main Landing Page

**File**: `app/[locale]/page.tsx`

**Lines 39-40 (Korean)** and **Lines 64-65 (English)**:

```typescript
backedByHeadline: '믿을 수 있는 파트너와 함께',
backedBySubhead: 'HEIMDEX는 글로벌 벤처캐피탈 Antler의 투자를 받아 성장하고 있습니다.',
```

**Line 104** - Where the component is rendered:

```typescript
<BackedBy headline={text.backedByHeadline} subhead={text.backedBySubhead} />
```

---

## 🖼️ Where to Add or Edit Logos

### Default Logo Configuration

**File**: `components/sections/BackedBy.tsx`

**Lines 18-24** - Default logos array:

```typescript
logos = [
  {
    src: '/images/logos/antler_no-bg.png',
    alt: 'Antler',
    width: 200,
    height: 60,
  },
]
```

### How to Add More Logos

**Option 1: Edit the default in BackedBy.tsx**

```typescript
logos = [
  {
    src: '/images/logos/antler_no-bg.png',
    alt: 'Antler',
    width: 200,
    height: 60,
  },
  {
    src: '/images/logos/your-new-investor.png',
    alt: 'New Investor Name',
    width: 180,
    height: 50,
  },
  // Add more logos here
]
```

**Option 2: Override in page.tsx** (recommended for different logos per page)

In `app/[locale]/page.tsx`, line 104:

```typescript
<BackedBy
  headline={text.backedByHeadline}
  subhead={text.backedBySubhead}
  logos={[
    {
      src: '/images/logos/antler_no-bg.png',
      alt: 'Antler',
      width: 200,
      height: 60,
    },
    {
      src: '/images/logos/new-partner.png',
      alt: 'New Partner',
      width: 180,
      height: 50,
    },
  ]}
/>
```

---

## 📁 Where to Store Logo Files

**Directory**: `public/images/logos/`

**Current logo**: `antler_no-bg.png`

### Adding a New Logo:

1. Save your logo image file to `public/images/logos/`
2. Use a descriptive filename (e.g., `sequoia_logo.png`, `yc_logo.png`)
3. Recommended formats: PNG (with transparent background) or WebP
4. Recommended size: Keep width under 250px for consistency

---

## 🎨 Logo Styling

The BackedBy component applies these effects to logos:

- **Full color by default** - Logos appear in their original colors
- **Dim on hover** - Logos become grayscale and semi-transparent when hovering
- **Opacity transition** - Smooth fade effect (100% → 50%)
- **Responsive spacing** - Logos adjust spacing on mobile/desktop

This creates a professional, unified look across different brand logos with an interactive hover effect.

---

## 📝 Content Files Updated

### Main Landing Page Content

**Korean**: `docs/landing-main-content.md`
- Section 7: "Backed By Section" added

**English**: `docs/landing-main-content.en.md`
- Section 7: "Backed By Section" added

### Company Page Content

**Korean**: `docs/landing-company-content.md`
- "Backed By Section" added after Hero Section

**English**: `docs/landing-company-content.en.md`
- "Backed By Section" added after Hero Section

---

## 🔧 Quick Edits

### Change Headline Text

**File**: `app/[locale]/page.tsx`

Korean (line 39):
```typescript
backedByHeadline: '믿을 수 있는 파트너와 함께',
```

English (line 64):
```typescript
backedByHeadline: 'Trusted Partners',
```

### Change Subhead Text

Korean (line 40):
```typescript
backedBySubhead: 'HEIMDEX는 글로벌 벤처캐피탈 Antler의 투자를 받아 성장하고 있습니다.',
```

English (line 65):
```typescript
backedBySubhead: 'HEIMDEX is backed by Antler, a global early-stage venture capital firm.',
```

---

## 🚀 Example: Adding Multiple Investors

Let's say you want to add Y Combinator and Sequoia Capital:

### Step 1: Add logo files
```
public/images/logos/
├── antler_no-bg.png
├── yc_logo.png          ← Add this
└── sequoia_logo.png     ← Add this
```

### Step 2: Update BackedBy component default

**File**: `components/sections/BackedBy.tsx` (lines 18-24)

```typescript
logos = [
  {
    src: '/images/logos/antler_no-bg.png',
    alt: 'Antler',
    width: 200,
    height: 60,
  },
  {
    src: '/images/logos/yc_logo.png',
    alt: 'Y Combinator',
    width: 180,
    height: 50,
  },
  {
    src: '/images/logos/sequoia_logo.png',
    alt: 'Sequoia Capital',
    width: 200,
    height: 55,
  },
]
```

### Step 3: Update subhead text (optional)

**File**: `app/[locale]/page.tsx`

Korean (line 40):
```typescript
backedBySubhead: 'HEIMDEX는 Antler, Y Combinator, Sequoia Capital의 투자를 받아 성장하고 있습니다.',
```

English (line 65):
```typescript
backedBySubhead: 'HEIMDEX is backed by leading venture capital firms including Antler, Y Combinator, and Sequoia Capital.',
```

---

## 📊 Visual Layout

The logos are displayed in a horizontal, centered row with responsive spacing:

**Desktop**: All logos in one row with 48px gaps
**Mobile**: Logos wrap to multiple rows with 32px gaps

---

## ✅ Verification

After making changes:

1. **Run build**:
   ```bash
   npm run build
   ```

2. **Start dev server**:
   ```bash
   npm run dev
   ```

3. **Check pages**:
   - Korean: http://localhost:3000/ko
   - English: http://localhost:3000/en
   - Company (Korean): http://localhost:3000/ko/company
   - Company (English): http://localhost:3000/en/company

---

## 🎯 Summary

**To edit logos**, you have **two main files**:

1. **`components/sections/BackedBy.tsx`** (lines 18-24)
   - Default logos configuration
   - Edit here to change logos globally

2. **`app/[locale]/page.tsx`** (line 104)
   - Override logos per page if needed
   - Edit headline/subhead text here (lines 39-40, 64-65)

**Logo files location**: `public/images/logos/`

---

## 📞 Support

Need help? Check:
- Main implementation: `components/sections/BackedBy.tsx`
- Landing page integration: `app/[locale]/page.tsx`
- Content files: `docs/landing-main-content.md` and `docs/landing-company-content.md`
