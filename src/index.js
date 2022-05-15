import "./styles.css";
import { Test } from "./examples/example1/example1";
import { PromiseTest } from "./examples/promise/promiseTest";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;

Test(9);
PromiseTest();
