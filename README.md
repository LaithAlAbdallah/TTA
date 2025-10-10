# TTA - The Turnaround Artists

A modern Angular application for TTA's trading and distribution business.

## Features

- **Multi-language Support**: Full i18n implementation with English, Arabic, and Russian
- **RTL Support**: Proper right-to-left layout for Arabic language
- **Responsive Design**: Mobile-first approach with modern UI/UX
- **Performance Optimized**: Fast loading and smooth animations

## Internationalization (i18n)

This application supports three languages:
- **English (en)** - Default language
- **Arabic (ar)** - With RTL support
- **Russian (ru)**

### Language Switching

Users can switch languages using the language switcher in the header (top-right corner). The selected language is persisted in localStorage with the key `tta_lang`.

### Testing i18n Features

#### Manual Testing Checklist

1. **Language Switching**:
   - [ ] Click language buttons (EN/AR/RU) in header
   - [ ] Verify all text content changes to selected language
   - [ ] Check that language preference persists after page refresh

2. **RTL Support (Arabic)**:
   - [ ] Switch to Arabic (AR) language
   - [ ] Verify layout flips to right-to-left direction
   - [ ] Check header navigation order is reversed
   - [ ] Verify text alignment and spacing looks correct

3. **Content Translation**:
   - [ ] Navigate through all pages (Home, About, Contact)
   - [ ] Verify all visible text is translated
   - [ ] Check that brand names (TTA, Fine Hygienic Holding, etc.) remain unchanged
   - [ ] Verify images and icons are unaffected by language changes

4. **LocalStorage Persistence**:
   - [ ] Open browser DevTools → Application → Local Storage
   - [ ] Verify `tta_lang` key is set with current language value
   - [ ] Change language and verify localStorage updates
   - [ ] Refresh page and verify language persists

#### Technical Details

- **Translation Files**: Located in `src/assets/i18n/`
  - `en.json` - English translations
  - `ar.json` - Arabic translations  
  - `ru.json` - Russian translations

- **Language Service**: `src/app/services/language.service.ts`
  - Manages language state and persistence
  - Handles RTL/LTR direction switching
  - Provides observable for language changes

- **RTL CSS**: Global RTL support in `src/global_styles.css`
  - Uses `[dir="rtl"]` selector for RTL-specific styles
  - Automatically flips flex directions and text alignment

## Development

### Prerequisites

- Node.js (v20.19.0 or higher)
- npm (v6.11.0 or higher)

### Installation

```bash
npm install
```

### Development Server

```bash
npm start
```

### Build

```bash
npm run build
```

### Production Build

```bash
npm run build:prod
```

## Deployment

The application can be deployed to various platforms:

- **Netlify**: `npm run deploy:netlify`
- **Vercel**: `npm run deploy:vercel`

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
