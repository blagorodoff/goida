#!/usr/bin/env python3
"""Regenerate the offline component fallback inside components.js from components/*.html.
Run from the goida project root: python sync-component-fallbacks.py
The external HTML files remain the source of truth on HTTP/HTTPS hosting.
"""
from pathlib import Path
import json
import re

ROOT = Path(__file__).resolve().parent
NAMES = ("header.html", "footer.html", "site-portfolio.html")
JS_PATH = ROOT / "components.js"
JS = JS_PATH.read_text(encoding="utf-8")
COMPONENTS = {name: (ROOT / "components" / name).read_text(encoding="utf-8") for name in NAMES}
OBJECT = (
    "  // BEGIN GENERATED OFFLINE COMPONENT FALLBACKS\n"
    "  // Сгенерировано из файлов components/*.html для работы при открытии index.html через file://.\n"
    "  // На обычном HTTP/HTTPS всегда загружаются отдельные HTML-шаблоны.\n"
    "  const LOCAL_COMPONENTS = " + json.dumps(COMPONENTS, ensure_ascii=False, indent=2) + ";\n"
    "  // END GENERATED OFFLINE COMPONENT FALLBACKS"
)
PATTERN = r"  // BEGIN GENERATED OFFLINE COMPONENT FALLBACKS.*?  // END GENERATED OFFLINE COMPONENT FALLBACKS"
if not re.search(PATTERN, JS, flags=re.S):
    raise SystemExit("В components.js не найдена область офлайн-шаблонов")
JS_PATH.write_text(re.sub(PATTERN, lambda _match: OBJECT, JS, count=1, flags=re.S), encoding="utf-8")
print("Офлайн-копии компонентов обновлены.")
