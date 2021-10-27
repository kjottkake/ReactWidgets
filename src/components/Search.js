import React, { useState, useEffect } from "react";

const Search = () => {
    //sets useState
    const [term, setTerm] = useState('cats');

    console.log("I run with every render.");

    useEffect(()=>{
        console.log('using useEffect. I only run once.');
    }, []);

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

