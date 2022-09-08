import React from "react";
import "./style.css";

function Child({child}) {
  return (
    <>
      <p>Child</p>
      {child}
    </>
  )
}

function Child2({children}) {
  return (
    <>
      <p>Child Nested</p>
        {children}
      </>
  )
}

function SmallChild({value, doSomething}) {
  return (
    <>
      <h2> I am child with Value {value} </h2>
      <button onClick={() => doSomething(value)} > Do Something </button>
    </>
  )
}

function NestedChildWithParam({children}) {
  const doSomething = (value) => {
    console.log('doSomething called with value ', value);
  }
  const childrenWithProps = React.Children.map(children, (child) => {
    if(React.isValidElement(child)){
      return React.cloneElement(child, {doSomething});
    }
    return child;
  })
  return (
    <>
    <p> Nested Childs with Props</p>
    {childrenWithProps}
    </>
  )
}
export default function App() {
  const spa = React.useMemo(() => (<span>Passed To Child</span>));
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <Child child={spa} /> 
      <Child2>
        <b>Nested Childs</b>
      </Child2>
      <NestedChildWithParam>
          <SmallChild value={1} />
          <SmallChild value={2} />
        </NestedChildWithParam>
    </div>
  );
}
