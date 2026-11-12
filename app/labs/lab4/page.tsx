"use client";
import "../lab2/tailwind/utilities.css";
import BooleanStateVariables from "./BooleanStateVariables";
import ClickEvent from "./ClickEvent";
import Counter from "./Counter";
import CounterBroken from "./CounterBroken";
import PassingDataOnEvent from "./PassingDataOnEvent";
import PassingFunctions from "./PassingFunctions";
import StringStateVariables from "./StringStateVariables";

export default function Lab4() {
    const sayHello = "hello from lab 4";
  return (
    <div id="wd-lab4">
      <h2>Lab 4</h2>
      <ClickEvent />
      <PassingDataOnEvent />
      <PassingFunctions message={sayHello} theFunction={(message) => alert(message)} sayName={() => alert("Owen")} theOtherFunction={() => alert("Sample from parent")}/>
      <CounterBroken />
      <Counter />
      <BooleanStateVariables />
      <StringStateVariables />
    </div>
  );
}