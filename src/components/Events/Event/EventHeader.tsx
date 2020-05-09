import React from 'react';
import s from "./../Events.module.css"
import {NavLink} from "react-router-dom";

const EventHeader = () => {
    return <div className={s.eventHeader}>
        <NavLink exact to="/Events/Full-Marathons" activeClassName={s.active}>Full Marathons</NavLink>
        <NavLink to="/Events/Half-Marathons" activeClassName={s.active}>Half Marathons</NavLink>
        <NavLink to="/Events/10km-Marathons" activeClassName={s.active}>10km Runs</NavLink>
        <NavLink to="/Events/5km-Marathons" activeClassName={s.active}>5km Runs</NavLink>

    </div>
};


export default EventHeader;