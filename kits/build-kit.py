"""Build public/downloads/ai-search-audit-kit.zip from kits/ai-search-audit-kit/. Run after any kit edit."""
import pathlib, zipfile
root = pathlib.Path(__file__).parent
src = root / 'ai-search-audit-kit'
out = root.parent / 'public' / 'downloads' / 'ai-search-audit-kit.zip'
with zipfile.ZipFile(out, 'w', zipfile.ZIP_DEFLATED) as z:
    for f in sorted(src.rglob('*')):
        if f.is_file():
            info = zipfile.ZipInfo('ai-search-audit-kit/' + f.relative_to(src).as_posix(), (2026, 11, 5, 0, 0, 0))
            info.compress_type = zipfile.ZIP_DEFLATED
            z.writestr(info, f.read_bytes())
print(out, out.stat().st_size)
