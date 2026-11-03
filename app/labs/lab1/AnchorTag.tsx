export default function AnchorTag() {
  return (
    <>
      <h4>Anchor tag</h4>
      Please{" "}
      <a href="https://www.lipsum.com" id="wd-lipsum">
        click here
      </a>{" "}
      to get dummy text
      <br />
      <a href="https://github.com/jannunzi" id="wd-github">
        GitHub
      </a>
      <br />
      <h5>Owen&apos;s Anchors</h5>
      Click{" "}
      <a href="https://www.youtube.com/@byowenmichael" id="wd-your-link">
        here
      </a>{" "}
      to see my film portfolio so far
      <br />
      <a href="https://github.com/omathay" target="_blank" rel="noreferrer" id="wd-your-github">
        Owen&apos;s github profile
      </a>
      <br />
      <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table" id="wd-ai-link">
        MDN: table element
      </a>
    </>
  );
}