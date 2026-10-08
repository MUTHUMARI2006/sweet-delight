import http.server
import socketserver
import threading
import urllib.request
import time
import os
import sys

if hasattr(sys.stdout, 'reconfigure'):
    sys.stdout.reconfigure(encoding='utf-8')

PORT = 8089
root_dir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

class Handler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=root_dir, **kwargs)
    def log_message(self, format, *args):
        pass # Silence server logs

server = socketserver.TCPServer(("127.0.0.1", PORT), Handler)
server_thread = threading.Thread(target=server.serve_forever, daemon=True)
server_thread.start()
time.sleep(0.5)

endpoints = [
    "/index.html",
    "/home.html",
    "/login.html",
    "/product.html?id=palkova",
    "/product.html?id=gulab-jamun",
    "/cart.html",
    "/checkout.html",
    "/data/sweets.js",
    "/styles/main.css",
    "/scripts/app.js",
    "/assets/images/logo.svg",
    "/assets/images/sweets/palkova.svg",
    "/assets/images/sweets/kaju-katli.svg",
    "/assets/images/placeholder.svg"
]

all_passed = True
for ep in endpoints:
    url = f"http://127.0.0.1:{PORT}{ep}"
    try:
        req = urllib.request.urlopen(url)
        status = req.getcode()
        size = len(req.read())
        if status == 200 and size > 0:
            print(f"✓ HTTP 200 OK: {ep} ({size} bytes)")
        else:
            print(f"✕ HTTP ERROR {status}: {ep}")
            all_passed = False
    except Exception as e:
        print(f"✕ FAILED {ep}: {e}")
        all_passed = False

server.shutdown()
server.server_close()

if all_passed:
    print("\nALL HTTP ENDPOINTS SERVED WITH 200 OK SUCCESS!")
else:
    sys.exit(1)
