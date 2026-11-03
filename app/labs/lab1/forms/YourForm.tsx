export default function YourForm() {
    return (
        <form id="wd-your-form">
            <h5>Owen Text Fields</h5>
            <label htmlFor="wd-your-firstname">First Name:</label>
            <input placeholder="owen" id="wd-your-firstname" />
            <br />
            <label htmlFor="wd-your-lastname">Last Name:</label>
            <input placeholder="mathay" id="wd-your-lastname" />
            <br />
            <label htmlFor="wd-your-studentid">Student ID:</label>
            <input placeholder="001592641" id="wd-your-studentid" />
            <br />
            <h5>Owen Textareas</h5> 
            <label>Owen Why:</label>
            <br />
            <textarea
                id="wd-textarea"
                cols={30}
                rows={10}
                defaultValue="I wanted to take this class to apply my existing web development knowledge from CS4530 and my design and film knowledge to learn how web experiences are made from websites."
            />
            <br />
            <h5>Owen Radio Buttons</h5>
            <label>Class standing:</label>
            <br />
            <input type="radio" name="radio-standing" id="wd-radio-freshman" />
            <label htmlFor="id-radio-freshman">Freshman</label>
            <br />
            <input type="radio" name="radio-standing" id="wd-radio-sophomore" />
            <label htmlFor="id-radio-sophomore">Sophomore</label>
            <br />
            <input type="radio" name="radio-standing" id="wd-radio-junior" />
            <label htmlFor="id-radio-junior">Junior</label>
            <br />
            <input type="radio" name="radio-standing" id="wd-radio-senior" />
            <label htmlFor="id-radio-senior">Senior</label>
            <br />
            <input type="radio" name="radio-standing" id="wd-radio-graduate" />
            <label htmlFor="id-radio-graduate">Graduate</label>
            <br />
            <br />
            <label>Campus Residency:</label>
            <br />
            <input type="radio" name="radio-residency" id="wd-radio-oncampus" />
            <label htmlFor="wd-radio-oncampus">On-campus</label>
            <br />
            <input type="radio" name="radio-residency" id="wd-radio-commuter" />
            <label htmlFor="wd-radio-commuter">Commuter</label>
            <br />
            <h5>Owen Independent Interests</h5>
            <input type="checkbox" name="check-interest" id="wd-check-film"/>
            <label htmlFor="wd-check-film">Filmmaking</label>
            <br />
            <input type="checkbox" name="check-interest" id="wd-check-theatre"/>
            <label htmlFor="wd-check-theatre">Theatre Performance</label>
            <br />
            <input type="checkbox" name="check-interest" id="wd-check-worldtravel"/>
            <label htmlFor="wd-check-worldtravel">Travel the world before finding a job</label>
            <br />
            <h5>Select One:</h5>
            <label htmlFor="wd-select-your-college">Owen Home College: </label>
            <br />
            <select id="wd-select-your-college" defaultValue="CAMD">
                <option value="CAMD">College of Arts, Media, and Design</option>
                <option value="KHOURY">Khoury College</option>
                <option value="BOUVE">Bouve College of Health Sciences</option>
                <option value="COE">College of Engineering</option>
                <option value="CSSH">College of Social Sciences and Humanities</option>
            </select>
            <h5>Select many:</h5>
            <label htmlFor="wd-select-your-topics">Topics to deepen: </label>
            <br />
            <select 
                multiple 
                id="wd-select-your-topics"
                defaultValue={["CSS"]}
            >
                <option value="CSS">CSS design</option>
                <option value="TYPO">Typography</option>
                <option value="graphic">Graphic design</option>
            </select>
            <br />
            <h5>Owen Types Fields</h5>
            <label htmlFor="wd-your-text-email">Email: </label>
            <input
                type="email"
                placeholder="mathay.o@northeastern.edu"
                id="wd-your-text-email"
            />
            <br />
            <label htmlFor="wd-your-text-grad-year">Graduation year: </label>
            <input
                type="number"
                defaultValue="2026"
                placeholder="2026"
                min={2015}
                max={2030}
                id="wd-your-text-grad-year"
            />
            <br />
            <label htmlFor="wd-your-text-fields-dob">Date of birth: </label>
            <input
                type="date"
                defaultValue="2002-09-08"
                min="2000-01-01"
                max="2026-12-31"
                id="wd-your-text-fields-dob"
            />
            <br />
            <label htmlFor="wd-your-text-fields-rating">Course Excitement Rating: </label>
            <input
                type="range"
                defaultValue="6"
                min="1"
                max="10"
                id="wd-your-text-fields-rating"
            />
            <br />
            <h5>Owen Button</h5>
            <button id="wd-html-button-save" type="submit">
                Save
            </button>
            <button id="wd-html-button-cancel" type="button">
                Cancel
            </button>
        </form>
    );
}