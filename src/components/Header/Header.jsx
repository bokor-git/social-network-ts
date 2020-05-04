import React from 'react';
import s from "./Header.module.css"
import {NavLink} from "react-router-dom";

const HeaderMenu = ()=> {
    return(
        <div className={s.search}>
            <div className={s.menu}><NavLink to="/Events" activeClassName={s.active}>Events </NavLink>
                <NavLink to="/Users" activeClassName={s.active}>People</NavLink>
                <NavLink to="/News" activeClassName={s.active}>News</NavLink>
                <NavLink to="/Search" activeClassName={s.active}>Search</NavLink>
                <NavLink to="/Store" activeClassName={s.active}>Store</NavLink>
            </div>
        </div>)
}





const Header = ({isAuth, login, singOutThunk})=> {
    return(
        <div className={s.header}>
            <div className={s.headerText}>iRunner</div>
            <HeaderMenu/>
            {isAuth? <div className={s.login}><div> <div></div>{login}</div> <button onClick={()=>{singOutThunk()}}>logout</button></div>:
                <NavLink to={"/login"}>
            <div className={s.login}>Login</div>
        </NavLink>}
        </div>

    )
}

export default Header;