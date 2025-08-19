#!/bin/zsh
set -euo pipefail

echo "1) Removing all blog code & content (if present)..."
rm -rf app/blog content/blog posts blog public/blog 2>/dev/null || true
[ -f lib/mdx.ts ] && rm -f lib/mdx.ts || true

echo "2) Scrubbing Blog links from common nav/layout files (only if they exist)..."
files_to_scrub=(
  "components/site-header.tsx"
  "components/navbar.tsx"
  "components/main-nav.tsx"
  "app/layout.tsx"
  "app/(site)/layout.tsx"
  "app/components/main-nav.tsx"
  "config/site.ts"
)

for f in "${files_to_scrub[@]}"; do
  if [ -f "$f" ]; then
    echo "  -> Cleaning $f"
    # Remove object-style nav entries like: { href: "/blog", ... }
    sed -i '' -E 's/\{[[:space:]]*href:[[:space:]]*["'"'"']\/blog["'"'"'][^}]*\},?//g' "$f" || true
    # Remove <Link href="/blog">...</Link>
    sed -i '' -E 's/<Link[^>]*href=["'"'"']\/blog["'"'"'][^>]*>[^<]*<\/Link>//g' "$f" || true
    # Remove trailing comments like // blog
    sed -i '' -E 's#//[[:space:]]*blog##g' "$f" || true
  fi
done

echo "✅ Blog removed successfully."
