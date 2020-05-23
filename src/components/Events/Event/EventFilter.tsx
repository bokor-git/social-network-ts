import React from 'react';
import s from "./../Events.module.css"

function EventFilter() {
    return <div className={s.eventFilter}>
        <div>Event Filter</div>
        <div>Price:</div>
        <input id="input" type="range" min="100" max="200" step="2"/>
        <div>Difficulty:</div>
        <input id="input" type="range" min="100" max="200" step="2"/>
        <div>Rating:</div>
        <input id="input" type="range" min="100" max="200" step="2"/>
        <div>
            <button>
                Find Events
            </button>
        </div>
    </div>
}


export default EventFilter;