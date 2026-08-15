# Brand faces, as TrueType

The site loads Outfit and Geist from Google Fonts at runtime. Generated
imagery cannot: `buddy generate:images` rasterises real glyphs, so it needs
the outlines as a file, and it reads TrueType (`glyf`) only — not WOFF2, and
not OpenType/CFF.

- `Outfit-Bold.ttf` — display face, from [Outfitio/Outfit-Fonts][outfit].
- `Geist-Regular.ttf` — body face, from [vercel/geist-font][geist].

Both are static instances on purpose. Google Fonts now ships these families
as variable fonts only, and a variable TTF handed to a rasteriser with no
`fvar`/`gvar` support silently renders its default master — you ask for Bold
and get Regular, with no error. The static files are the two weights the
cards actually use.

Both are SIL Open Font License 1.1; the licences sit beside them.

[outfit]: https://github.com/Outfitio/Outfit-Fonts
[geist]: https://github.com/vercel/geist-font
