/*! redreq_app.ts */


console.log("Hello from redreq_app.ts");

function action_fetch () {
  console.log("Hello from action_fetch()");
  //document.querySelector('#output_fetch').innerHTML = 'blabla';
  fetch('https://ZZZ.LocalHost:8443/aa')
    .then(resp => resp.text())
    .then(resp_txt => {
        console.log('fetch data:' + resp_txt);
        document.querySelector('#output_fetch').innerHTML = resp_txt;
      });
}

document.querySelector('#btn_fetch').addEventListener('click', action_fetch);

