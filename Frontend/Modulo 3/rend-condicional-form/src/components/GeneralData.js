import React from 'react';
class GeneralData extends React.Component {
    render() {
        return(
            <div>
                <form>
                    <h1>General Data</h1>
                    <h4>What is your name?</h4>
                    <input />
                    <h4>How old are you?</h4>
                    <input />
                    <h4>What is your e-mail?</h4>
                    <input />
                    <h4>What is your level of education?</h4>
                    <select>
                        <option value="Incomplete high school">Incomplete high school</option>
                        <option value ="Complete high school">Complete high school</option>
                        <option value ="Incomplete higher school">Incomplete higher school</option>
                        <option value ="Complete higher school">Complete higher school</option>
                    </select>
                </form>
            </div>
        )
    }
}
export default GeneralData;