import React,{useState,useEffect} from 'react';
import s from './Paginator.module.css';
const Paginator = ({currentPage,onPageChanged,pageSize,totalItemsCount,portionSize=10}) => {
    //debugger
    const pagesCount = Math.ceil(totalItemsCount / pageSize);
    const portionCount = Math.ceil(pagesCount/portionSize)
    const [portionNumber,setPortionNumber] = useState(1);
    const pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    const rightSide = portionNumber*portionSize;
    const leftSide = (portionNumber - 1)*portionSize + 1;
    return (
        <div>
            {(portionNumber>1)?<button onClick={()=>{setPortionNumber(portionNumber-1)}}>prev</button>:''}
            {
                pages
                    .filter((p)=>p<=rightSide && p>=leftSide)
                    .map(i => (<span onClick={(e) => onPageChanged(i)}
                                      className={(currentPage === i) ? s.selectedPage : ''}> {i} </span>))
            }

            {(portionNumber<portionCount)?<button onClick={()=>{setPortionNumber(portionNumber+1)}}>next</button>:''}
        </div>
    );
}

export default Paginator;