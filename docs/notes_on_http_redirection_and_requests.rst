======================================
notes on http_redirection_and_requests
======================================


Presentation
============

This is just a sand-box repository.


Results
=======

Below the results for http-get requests:

===========   ================      ================    =========================================================
context       tool                  Follow redirect     Comments
===========   ================      ================    =========================================================
python        requests              Yes
nodejs        standard https        No                  not working, also with option {followAllRedirects: true}
nodejs        follow-redirects      Yes
nodejs        request
nodejs        needle
nodejs        got
nodejs        axios
nodejs        superagent
nodejs        node-fetch
browser-js    fetch                 Yes
browser-js    axios
browser-js    superagent
shell         curl                  Yes                 with -L
shell         wget                  Yes
===========   ================      ================    =========================================================

