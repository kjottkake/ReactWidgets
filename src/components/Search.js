import React, { useState } from "react";

const Search = () => {
    //sets useState
    const [term, setTerm] = useState('cats');



    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Enter Search Term</label>
                    <input 
                    value={term}
                    onChange={e => setTerm(e.target.value)}
                    className="input"
                    />
                </div>
            </div>
        </div>
    );
};


export default Search;

