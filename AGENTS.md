<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Application rules
- Keep the FiberForm homepage as a single editorial page with same-page section navigation; product-category links open the existing FiberForm catalog to preserve real inventory.
- Store original website media as asset pointers and use their URLs in the UI, so product images remain authentic and managed.
- Define the industrial visual system in global CSS and use Button variants for controls; this keeps the selected visual direction consistent.
- Use Bebas Neue for Latin display text and a Cyrillic-capable condensed fallback for Ukrainian headings, because Bebas Neue does not cover Ukrainian.
- Render shared page chrome and a session-only language context around the root Outlet, so all content pages keep consistent navigation and language without duplicating headers.
- Give About, Products & services and Contact their own content routes; keep homepage anchors and link to full pages from its content and shared footer, so the editorial homepage and deeper pages both remain accessible.
- Present existing product categories on the local products page and send inventory browsing to the original catalog, so no stock, prices or specifications are invented.
