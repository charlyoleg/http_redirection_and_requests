#!/usr/bin/env python
# http_requests.py

import requests

r = requests.get('https://ZZZ.LocalHost:8443/aa', verify=False)
print(r.status_code)
print(r.text)


