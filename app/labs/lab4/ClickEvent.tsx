"use client";

const hello = () => {
  alert("Hello World!");
};

const goodbye = () => {
  alert("Goodbye World!");
};

const owenHello = () => {
    alert("Hello to Owen, specifically");
}

export default function ClickEvent() {
  return (
    <div id="wd-click-event">
      <h2>Click Event</h2>
      <button
        type="button"
        onClick={hello}
        id="wd-onclick-hello"
        className="rounded bg-red-600 px-3 py-1.5 text-sm font-medium text-white"
      >
        Click Hello
      </button>
      <button
        type="button"
        onClick={goodbye}
        id="wd-onclick-goodbye"
        className="rounded bg-red-600 px-3 py-1.5 text-sm font-medium text-white"
      >
        Click Goodbye
      </button>
      <button
        type="button"
        onClick={owenHello}
        id="wd-onclick-hello-owen"
        className="rounded bg-red-600 px-3 py-1.5 text-sm font-medium text-white"
      >
        Click for special owen hello
      </button>
      <hr />
    </div>
  );
}