import React from "react";
import Accordion from "./components/Accordion";


const items = [
    {
        title: "what is react?",
        content: "React is a front-end javascript framework"
    },
    {
        title: "Why use react?",
        content: "Well you would use react because it's faster than angular and better than vue"
    },
    {
        title: "How do you use react?",
        content: "React is based on components and stuff like that lol."
    }
]

export default () => {
    return (
        <div>
            <h1>Widgets App</h1>
            <Accordion items={items}/>
        </div>

    );
};