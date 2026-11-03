import "./index.css";

export default function Lab2() {
  return (
    <div id="wd-lab2">
      <h2>Lab 2 - Cascading Style Sheets</h2>
      <h3>Styling with the STYLE attribute</h3>
      <p>
        Style attribute allows configuring look and feel right on the
        element. Although it&apos;s very convenient it is considered bad
        practice and you should avoid using the style attribute
      </p>
      <p id="wd-ai-style-attr">
        The style attribute accepts inline CSS declarations, such as background
        and text color, that apply only to the element it is placed on.
      </p>
      <p>
        For as long as I can remember, I&apos;ve always wanted to be a problem solver. All
        that has changed is what kind of problem I&apos;m solving, and who I&apos;m solving
        it for.
      </p>
      <div id="wd-css-id-selectors">
        <h3>ID selectors</h3>
        <p id="wd-id-selector-1">
            Instead of changing the look and feel of all the
            elements of the same name, e.g., P, we can refer to a
            specific element by its ID
        </p>
        <p id="wd-id-selector-2">
            Here&apos;s another paragraph using a different ID and a
            different look and feel
        </p>
        <p id="wd-ai-id-selector">
            An ID selector targets exactly one element, so this paragraph can
            have its own background and text color.
        </p>
        <p id="wd-id-selector-3">
            And this is a paragraph that I, Owen, added
        </p>
      </div>
        <div id="wd-css-class-selectors">
            <h3>Class selectors</h3>
            <p className="wd-class-selector">
                Instead of using IDs to refer to elements, you can use an
                element&apos;s CLASS attribute
            </p>
            <h4 className="wd-class-selector">
                This heading has same style as paragraph above
            </h4>
            <p className="wd-ai-class-selector">
                This paragraph uses the AI sample class with its own colors
            </p>
            <h4 className="wd-ai-class-selector">
                This heading shares the AI sample class with the paragraph above
            </h4>
        </div>
        <p className="wd-your-class">
            A paragraph with my class attached to it.
        </p>
        <h4 className="wd-your-class">
            and an H4 heading with my class attached to it.
        </h4>
    </div>
  );
}