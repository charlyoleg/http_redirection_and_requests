#!/usr/bin/env bash
# run_backend.sh

rm -fr backend
git clone https://github.com/charlyoleg/host_registry.git backend/host_registry
cd backend/host_registry
npm i
npm run build_all
npm run serve_all_dev
