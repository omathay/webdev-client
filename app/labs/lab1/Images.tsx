export default function Images() {
  return (
    <div id="wd-images">
      <h4>Image tag</h4>
      Loading an image from the internet:
      <br />
      <img
        id="wd-starship"
        width="400px"
        alt="Starship"
        src="https://www.staradvertiser.com/wp-content/uploads/2021/08/web1_Starship-gap2.jpg"
      />
      <br />
      Loading a local image:
      <br />
      <img
        id="wd-teslabot"
        src="/images/teslabot.jpg"
        height="200px"
        alt="Tesla Bot (Optimus) humanoid robot"
      />
      <br />
      Another image from the internet:
      <br />
      <img
        id="wd-ai-image"
        width="200px"
        alt="Earth from Apollo 17"
        src="https://upload.wikimedia.org/wikipedia/commons/9/97/The_Earth_seen_from_Apollo_17.jpg"
      />
      <br />
      Dog that knows:
      <br />
      <img
        id="wd-your-image"
        src="/images/whatyouare.jpg"
        height="400px"
        alt="Dachshunds, my favorite dog breed"
      />
    </div>
  );
}