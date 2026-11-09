export default function VariablesAndConstants() {
  var functionScoped = 2;
  let blockScoped = 5;
  const constant1 = functionScoped - blockScoped;
  let myAddition1 = "Owen";
  const myGreeting = "Hello, " + myAddition1 +"!";
  const sampleSum = functionScoped + blockScoped;
  return (
    <div id="wd-variables-and-constants">
      <h4>Variables and Constants</h4>
      functionScoped = {functionScoped} <br />
      blockScoped = {blockScoped}       <br />
      constant1 = {constant1} <br />
      myAddition1 = {myAddition1} <br />
      myGreeting = {myGreeting} <br />
      sampleSum = {sampleSum}
      <hr />
    </div>
  );
}