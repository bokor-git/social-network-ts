import React, {useState} from 'react';
import s from "./Users.module.css";

type PropsType = {
    totalUsersCount: number
    pageSize: number
    onPageChanged: (p: number) => void
    currentPage: number
    portionSize: number
}

function UserPagesCount(props: PropsType) {
    let {totalUsersCount, pageSize, onPageChanged, currentPage, portionSize} = props;

    let pageCount = Math.ceil(totalUsersCount / pageSize)
    let pages = [];
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i)
    }
    let portionCount = Math.ceil(pageCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize
    return <div className={s.border}>
        {portionNumber > 1 &&
        <button onClick={() => {
            setPortionNumber(portionNumber - 1)
        }}>prev</button>}
        {pages.filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
            .map(p => {
                return <span className={currentPage === p ? s.selected : s.pageNumber} key={p} onClick={(e) => {
                    onPageChanged(p)
                }}>{p}</span>
            })}
        {portionCount > portionNumber &&
        <button onClick={() => {
            setPortionNumber(portionNumber + 1)
        }}>next</button>}
    </div>
}

export default UserPagesCount;