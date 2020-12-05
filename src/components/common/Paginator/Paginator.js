import s from "../../Users/Users.module.css";
import React, {useEffect, useState} from "react";
import DialogItem from "../../Dialogs/DialogItem/DialogItem";


/*export let Paginator = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    let startOfBlock=1;
    let endOfBlock=10;
    let someBlock = pages.filter(item => item <= endOfBlock && item >= startOfBlock);
    //{startOfBlock && <span>prv</span>}

    return (
        <div>
            {startOfBlock!=1 && <span>Previous</span>}
            {someBlock.map((d) => <span onClick={() => {props.onPageChanged(d)}}> {d} </span>)}
            {endOfBlock!=pages.length && <span onClick={() => {props.onPageChanged(d)}}>Next</span>}
        </div>
    )*/
    const Paginator = (props) => {
        let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }
       // let newPages = pages.filter(item => item <= 0 && item >= pages.length)
        //alert(pages.length)
       //let startOfBlock=1;
        //let endOfBlock=10;

        let [startOfBlock, setStartOfBlock] = useState(startOfBlock=1)
        let [endOfBlock, setEndOfBlock] = useState(endOfBlock=10)
        let [someBlock,editSomeBlock]=useState(someBlock=[1,2,3,4,5,6,7,8,9,10])

        let next=()=>{
            setEndOfBlock(endOfBlock+=10);
            setStartOfBlock(startOfBlock+=10)
            let newPages=pages.filter(item => item <=endOfBlock  && item >= startOfBlock);
            editSomeBlock(newPages);
        }
        let prev=()=>{
            setEndOfBlock(endOfBlock-=10);
            setStartOfBlock(startOfBlock-=10)
            let newPages=pages.filter(item => item <=endOfBlock  && item >= startOfBlock);
            editSomeBlock(newPages);
        }

        return (
            <div>
                {startOfBlock!=1 && <span onClick={prev}>Previous</span>}
                {someBlock.map((d) => <span onClick={() => {props.onPageChanged(d)}}> {d} </span>)}
                {endOfBlock!=pages.length && <span onClick={next}>Next</span>}
            </div>
        )
    }
    export default Paginator;
/*


    let mafs = () => {
        for (let i = 1; i < pages.length; i++) {
            if (props.currentPage == 1) return <div>
            <span className={s.selectedPage} onClick={() => {
                props.onPageChanged(i);
            }}> {i} </span>
                <span className={props.currentPage + 1 === i && s.selectedPage} onClick={() => {
                    props.onPageChanged(i + 1);
                }}> {i + 1} </span>
                <span>...</span>
                <span className={pages.length === i && s.selectedPage} onClick={() => {
                    props.onPageChanged(pages.length);
                }}>{pages.length}
            </span>
            </div>
            if (props.currentPage == i) return <div><span className={props.currentPage - 1 === i && s.selectedPage}
                                                          onClick={() => {
                                                              props.onPageChanged(i - 1);
                                                          }}> {i - 1} </span>
                <span className={s.selectedPage} onClick={() => {
                    props.onPageChanged(i);
                }}> {i} </span>
                <span className={props.currentPage + 1 === i && s.selectedPage} onClick={() => {
                    props.onPageChanged(i + 1);
                }}> {i + 1} </span>
                <span>...</span>
                <span className={pages.length === i && s.selectedPage} onClick={() => {
                    props.onPageChanged(pages.length);
                }}>{pages.length}
            </span></div>

            if (props.currentPage == pages.length-1) return <div><span onClick={() => {
                props.onPageChanged(1);
            }}> {1} </span>
                <span>...</span>
                <span onClick={() => {
                    props.onPageChanged(pages.length - 3);
                }}> {pages.length - 2} </span>
                <span className={s.selectedPage} onClick={() => {
                    props.onPageChanged(pages.length - 2);
                }}> {pages.length - 1} </span>
                <span onClick={() => {
                    props.onPageChanged(pages.length);
                }}> {pages.length}
            </span></div>

            if (props.currentPage == pages.length) return <div><span onClick={() => {
                props.onPageChanged(1);
            }}> {1} </span>
                <span>...</span>
                <span onClick={() => {
                    props.onPageChanged(pages.length - 1);
                }}> {pages.length - 1} </span>
                <span className={s.selectedPage} onClick={() => {
                    props.onPageChanged(pages.length);
                }}> {pages.length}
            </span></div>
        }
    }


}*/