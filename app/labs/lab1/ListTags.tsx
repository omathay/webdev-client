export default function ListTags() {
  return (
    <div id="wd-lists">
        <h4>List Tags</h4>
        <h5>Ordered List Tag</h5>
         How to make pancakes:
         <ol id="wd-pancakes">
            <li>Mix dry ingredients.</li>
            <li>Add wet ingredients.</li>
            <li>Stir to combine.</li>
            <li>Heat a skillet or griddle.</li>
            <li>Pour batter onto the skillet.</li>
            <li>Cook until bubbly on top.</li>
            <li>Flip and cook the other side.</li>
            <li>Serve and enjoy!</li>
        </ol>
        Owen&apos;s favorite recipe (Mac and Cheese):
        <ol id="wd-your-favorite-recipe">
            <li>Boil pasta for 10 minutes.</li>
            <li>Strain pasta.</li>
            <li>Melt butter and combine with milk and cheese to make sauce.</li>
            <li>Mix pasta back in.</li>
            <li>Serve and enjoy!</li>
        </ol>
        <h5>Unordered List Tag</h5>
        My favorite books (in no particular order)
        <ul id="wd-my-books">
            <li>Dune</li>
            <li>Lord of the Rings</li>
            <li>Ender&apos;s Game</li>
            <li>Red Mars</li>
            <li>The Forever War</li>
        </ul>
        Owen&apos;s favorite books:
        <ul>
            <li>Song of Achilles</li>
            <li>House of Leaves</li>
            <li>The Little Prince</li>
            <li>The Namesake</li>
        </ul>
        <h5>HTML Tags Reference</h5>
        <ul id="wd-ai-html-tags">
            <li><code>h1</code> - top-level page heading</li>
            <li><code>p</code> - a paragraph of text</li>
            <li><code>ol</code> - ordered (numbered) list</li>
            <li><code>ul</code> - unordered (bulleted) list</li>
            <li><code>li</code> - a single list item</li>
            <li><code>table</code> - rows and columns of data</li>
            <li><code>a</code> - hyperlink to another page</li>
        </ul>
    </div>
  );
}