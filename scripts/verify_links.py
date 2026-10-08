import os
import re
import sys

if hasattr(sys.stdout, 'reconfigure'):
    sys.stdout.reconfigure(encoding='utf-8')

root_dir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
html_files = [f for f in os.listdir(root_dir) if f.endswith('.html')]

print(f"Scanning {len(html_files)} HTML files in: {root_dir}")

errors = 0
checked_links = 0

for hf in html_files:
    path = os.path.join(root_dir, hf)
    with open(path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Strip script tags to avoid matching template literals like src="${item.image}"
    clean_html = re.sub(r'<script[\s\S]*?</script>', '', content)

    # Find src and href attributes in real HTML markup
    matches = re.findall(r'(?:src|href)=["\']([^"\'#?]+)["\']', clean_html)
    for m in matches:
        if m.startswith('http://') or m.startswith('https://') or m.startswith('mailto:') or m.startswith('tel:'):
            continue
        if m == '' or m == '#':
            continue
        
        target = os.path.normpath(os.path.join(root_dir, m))
        checked_links += 1
        if not os.path.exists(target):
            print(f"✕ Broken link in {hf}: {m} -> {target} NOT FOUND")
            errors += 1
        else:
            # print(f"✓ {hf} -> {m}")
            pass

# Check all localImage paths in data/sweets.js
sweets_js_path = os.path.join(root_dir, 'data', 'sweets.js')
with open(sweets_js_path, 'r', encoding='utf-8') as f:
    sweets_js = f.read()

local_images = re.findall(r'localImage:\s*["\']([^"\']+)["\']', sweets_js)
for img in local_images:
    target = os.path.normpath(os.path.join(root_dir, img))
    checked_links += 1
    if not os.path.exists(target):
        print(f"✕ Missing sweet image in sweets.js: {img} -> {target} NOT FOUND")
        errors += 1
    else:
        # print(f"✓ sweet image exists: {img}")
        pass

print(f"Total internal asset/links checked: {checked_links}")
if errors == 0:
    print("SUCCESS: 0 broken internal links or missing files found!")
else:
    print(f"FAILURE: {errors} broken links found!")
    exit(1)
