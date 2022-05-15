import "./styles.css";
import { Test } from "./examples/example1/example1";
import { PromiseTest } from "./examples/promise/promiseTest";

document.getElementById("app").innerHTML = `
<h1>Js examples</h1>
<div></div>
`;

Test(9);
PromiseTest();
