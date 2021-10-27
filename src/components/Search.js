import React, { useState, useEffect } from "react";
import axios from "axios";

const Search = () => {
    //sets useState
    const [term, setTerm] = useState('cats');


    useEffect(()=>{
        const search = async () => {
            await axios.get();
        };
        search();
        // (async () => {
        //     await axios.get();
        // })(); //wtf strange.
        
    }, [term]);

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

