#!/bin/bash
set -e

echo "🔧 Cleaning up blog..."

# --- remove any blog content folders (ignore if they don't exist)
rm -rf app/blog content/blog posts public/blog

# --- files we'll scrub if present
FILES="
app/page.tsx
app/layout.tsx
components/header.tsx
components/footer.tsx
components/site-header.tsx
components/navbar.tsx
components/main-nav.tsx
app/components/main-nav.tsx
config/site.ts
"

# --- delete lines that reference /blog or the Blog nav item (macOS-compatible sed)
for f in $FILES; do
  if [ -f "$f" ]; then
    # remove any line that mentions /blog
    sed -i '' '/\/blog/d' "$f"
    # remove any nav item with name: "Blog"
    sed -i '' '/name:[[:space:]]*["'\''"]Blog["'\''"]/d' "$f"
  fi
done

# --- verify build
pnpm install
pnpm build

echo "✅ Blog removed and build finished."
