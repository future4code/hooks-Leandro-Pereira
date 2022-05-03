import React from 'react';

class Course extends React.Component {
    render() {
        return(
            <form>
                <h1>Course</h1>
                <h4>Why didn't you finish an undergraduate degree?</h4>
                <input />
                <h4>Did you take any additional courses?</h4>
                <select>
                    <option>Yes</option>
                    <option>Not</option>
                </select>
            </form>
        )
    }
}
export default Course;