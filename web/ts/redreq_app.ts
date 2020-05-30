/*! redreq_app.ts */


console.log("Hello from redreq_app.ts");

function action_fetch () {
  console.log("Hello from action_fetch()");
  document.querySelector('#output_fetch').innerHTML = 'blabla';
}

document.querySelector('#btn_fetch').addEventListener('click', action_fetch);

