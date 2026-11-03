export default function YourForm() {
    return (
        <form id="wd-your-form">
            <h5>Your Text Fields</h5>
            <label htmlFor="wd-your-firstname">First Name:</label>
            <input placeholder="Jane" id="wd-your-firstname" />
            <br />
            <label htmlFor="wd-your-lastname">Last Name:</label>
            <input placeholder="Doe" id="wd-your-lastname" />
            <br />
            <label htmlFor="wd-your-username">Username:</label>
            <input placeholder="janedoe" id="wd-your-username" />
            <br />
            <label htmlFor="wd-your-password">Password:</label>
            <input
                type="password"
                placeholder="SamplePassword123"
                id="wd-your-password"
            />
            <br />
            <h5>Your Textarea</h5>
            <label htmlFor="wd-your-bio">Bio:</label>
            <br />
            <textarea
                id="wd-your-bio"
                cols={30}
                rows={10}
                defaultValue="SAMPLE: Jane Doe is a student who enjoys web development and wants to learn how web applications are built."
            />
            <br />
            <h5>Your Radio Buttons</h5>
            <label>Class standing:</label>
            <br />
            <input type="radio" name="your-radio-standing" id="wd-your-radio-freshman" />
            <label htmlFor="wd-your-radio-freshman">Freshman</label>
            <br />
            <input type="radio" name="your-radio-standing" id="wd-your-radio-sophomore" />
            <label htmlFor="wd-your-radio-sophomore">Sophomore</label>
            <br />
            <input type="radio" name="your-radio-standing" id="wd-your-radio-junior" />
            <label htmlFor="wd-your-radio-junior">Junior</label>
            <br />
            <input type="radio" name="your-radio-standing" id="wd-your-radio-senior" />
            <label htmlFor="wd-your-radio-senior">Senior</label>
            <br />
            <br />
            <label>Enrollment status:</label>
            <br />
            <input type="radio" name="your-radio-enrollment" id="wd-your-radio-fulltime" />
            <label htmlFor="wd-your-radio-fulltime">Full-time</label>
            <br />
            <input type="radio" name="your-radio-enrollment" id="wd-your-radio-parttime" />
            <label htmlFor="wd-your-radio-parttime">Part-time</label>
            <br />
            <h5>Your Checkboxes</h5>
            <input type="checkbox" name="your-check-interest" id="wd-your-check-coding" />
            <label htmlFor="wd-your-check-coding">Coding</label>
            <br />
            <input type="checkbox" name="your-check-interest" id="wd-your-check-design" />
            <label htmlFor="wd-your-check-design">Design</label>
            <br />
            <input type="checkbox" name="your-check-interest" id="wd-your-check-music" />
            <label htmlFor="wd-your-check-music">Music</label>
            <br />
            <input type="checkbox" name="your-check-interest" id="wd-your-check-travel" />
            <label htmlFor="wd-your-check-travel">Travel</label>
            <br />
            <h5>Your Select One</h5>
            <label htmlFor="wd-your-select-college">Home College: </label>
            <br />
            <select id="wd-your-select-college" defaultValue="ENGINEERING">
                <option value="ARTS">College of Arts</option>
                <option value="SCIENCE">College of Science</option>
                <option value="BUSINESS">College of Business</option>
                <option value="ENGINEERING">College of Engineering</option>
                <option value="HUMANITIES">College of Humanities</option>
            </select>
            <h5>Your Select Many</h5>
            <label htmlFor="wd-your-select-topics">Topics to deepen: </label>
            <br />
            <select
                multiple
                id="wd-your-select-topics"
                defaultValue={["CSS", "REACT"]}
            >
                <option value="CSS">CSS</option>
                <option value="REACT">React</option>
                <option value="TYPOGRAPHY">Typography</option>
                <option value="DATABASES">Databases</option>
                <option value="ACCESSIBILITY">Accessibility</option>
            </select>
            <br />
            <h5>Your Other Field Types</h5>
            <label htmlFor="wd-your-email">Email: </label>
            <input
                type="email"
                placeholder="jane@university.edu"
                id="wd-your-email"
            />
            <br />
            <label htmlFor="wd-your-grad-year">Graduation year: </label>
            <input
                type="number"
                defaultValue="2027"
                placeholder="2027"
                min={2015}
                max={2035}
                id="wd-your-grad-year"
            />
            <br />
            <label htmlFor="wd-your-dob">Date of birth: </label>
            <input
                type="date"
                defaultValue="2000-01-01"
                id="wd-your-dob"
            />
            <br />
            <label htmlFor="wd-your-rating">Course excitement (0-10): </label>
            <input
                type="range"
                defaultValue="5"
                min="0"
                max="10"
                id="wd-your-rating"
            />
            <br />
            <h5>Your Buttons</h5>
            <button id="wd-your-button-save" type="submit">
                Save
            </button>
            <button id="wd-your-button-cancel" type="button">
                Cancel
            </button>
        </form>
    );
}
