=======================================
README of http_redirection_and_requests
=======================================


Presentation
============

This repository aims at experimenting the behavior of different http-requests when encountering a http-redirection.

The following http request methods are tested:

  - python

    - requests

  - nodejs

    - standard-module https
    - follow-redirects
    - request
    - needle
    - got
    - axios
    - superagent
    - node-fetch

  - browser-javascript

    - fetch
    - axios
    - superagent

  - cli

    - curl
    - wget


Getting Started
===============

In a first bash-terminal::

  git clone https://github.com/charlyoleg/http_redirection_and_requests
  cd http_redirection_and_requests
  npm install
  npm run install_py


In a second bast-terminal::

  npm run run_backend


Back to the first bash-terminal::

  npm run py_requests


