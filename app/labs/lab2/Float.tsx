const STARSHIP =
  "https://i.pinimg.com/736x/1c/7f/66/1c7f6655ec520743569fcdc02471a117.jpg";
const LOREM =
  "The missile knows where it is at all times. It knows this because it knows where it isn't, by subtracting where it is, from where it isn't.";

export default function Float() {
  return (
    <div id="wd-float-divs">
      <h2>Float</h2>
      <div>
        <img className="wd-float-right" src={STARSHIP} alt="Dog that knows" />
        {LOREM} {LOREM}
        <img className="wd-float-left" src={STARSHIP} alt="Dog that knows" />
        {LOREM} {LOREM}
        <img className="wd-float-right" src={STARSHIP} alt="Dog that knows" />
        {LOREM} {LOREM}
        <img className="wd-float-left" src={STARSHIP} alt="Dog that knows" />
        {LOREM} {LOREM}
        <div className="wd-float-done" />
      </div>
      <div>
        <div
          id="wd-ai-float"
          className="wd-float-right wd-dimension-portrait wd-bg-color-green wd-fg-color-white"
        >
          Green
        </div>
        <p>{LOREM}</p>
        <div className="wd-float-done" />
      </div>
      <div>
        <div className="wd-float-left wd-dimension-portrait wd-bg-color-yellow">
          Yellow
        </div>
        <div className="wd-float-left wd-dimension-portrait wd-bg-color-blue wd-fg-color-white">
          Blue
        </div>
        <div className="wd-float-left wd-dimension-portrait wd-bg-color-red">
          Red
        </div>
        <img className="wd-float-right" src={STARSHIP} alt="Dog that knows" />
        <div className="wd-float-done" />
      </div>
      <div>
        {LOREM}
        <img className="wd-float-left" src={STARSHIP} alt="Dog that knows" />
        {LOREM} {LOREM}
        <div className="wd-float-done" />
      </div>
    </div>
  );
}