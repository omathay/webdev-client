export default function VariableTypes() {
  let numberVariable = 123;
  let floatingPointNumber = 234.345;
  let stringVariable = "Hello World!";
  let booleanVariable = true;
  let isNumber = typeof numberVariable;
  let isString = typeof stringVariable;
  let isBoolean = typeof booleanVariable;
  let myString = "I added this one myself";
  let myNumber = 1592641;
  let myStringType = typeof myString;
  let myNumberType = typeof myNumber;
  let sampleCount = 42;
  let sampleLabel = "Lab 3";
  let sampleCountType = typeof sampleCount;
  let sampleLabelType = typeof sampleLabel;
  return (
    <div id="wd-variable-types">
      <h4>Variables Types</h4>
      numberVariable = {numberVariable}           <br />
      floatingPointNumber = {floatingPointNumber} <br />
      stringVariable = {stringVariable}           <br />
      booleanVariable = {booleanVariable + ""}    <br />
      isNumber = {isNumber}                       <br />
      isString = {isString}                       <br />
      isBoolean = {isBoolean} <br />
      myString = {myString} <br />
      myNumber = {myNumber} <br />
      myStringType = {myStringType} <br />
      myNumberType = {myNumberType} <br />
      sampleCount = {sampleCount} <br />
      sampleLabel = {sampleLabel} <br />
      sampleCountType = {sampleCountType} <br />
      sampleLabelType = {sampleLabelType}
      <hr />
    </div>
  );
}