#!/usr/bin/env bash
# run_backend.sh

git clone https://github.com/charlyoleg/host_registry.git backend/host_registry
cd backend/host_registry
npm i
npm run start_hrs
