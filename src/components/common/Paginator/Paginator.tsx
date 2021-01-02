import s from "../Paginator/Paginator.module.css";
import React, {useEffect, useState} from "react";
import DialogItem from "../../Dialogs/DialogItem/DialogItem";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../FormControls/FormControls";
import {maxLengthCreator, requiredField} from "../../../utils/validators/validators";

type PropsType = {
    currentPage: number;
    onPageChanged: (arg0: number)=>void;
    totalUsersCount: number;
    pageSize: number;
}
const Paginator: React.FC<PropsType> = (props) => {
    let pagesCount: number = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages: Array<number> = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    let thispage = 1;
    let StepsInTheBlock=10;
    let [startOfBlock, setStartOfBlock] = useState<number>( 0)
    let [endOfBlock, setEndOfBlock] = useState( 10)
    let [someBlock, editSomeBlock] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
    if (startOfBlock==0) setStartOfBlock(1)
    let next = () => {
        setEndOfBlock(endOfBlock += StepsInTheBlock);
        setStartOfBlock(startOfBlock += StepsInTheBlock)
        let newPages = pages.filter(item => item <= endOfBlock && item >= startOfBlock);
        editSomeBlock(newPages);
    }
    let prev = () => {
        setEndOfBlock(endOfBlock -= StepsInTheBlock);
        setStartOfBlock(startOfBlock -= StepsInTheBlock)
        let newPages = pages.filter(item => item <= endOfBlock && item >= startOfBlock);
        editSomeBlock(newPages);
    }
    const onSubmit = (formData: any) => {
        props.onPageChanged(formData.searchPage)
    }
    const maxLength4 = maxLengthCreator(4)
    const searchPage = (props:any) => {
        return (
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field component={Textarea} name={'searchPage'} validate={[requiredField, maxLength4]}
                           placeholder={'Введите страницу'}/>
                </div>
                <div>
                    <button>Поиск страницы</button>
                </div>
            </form>
        )
    }
    const SearchPageForm = reduxForm({
        form: "searchPage"
    })(searchPage);

    return (
        <div>
            <div>
                {startOfBlock != 1 && <span onClick={prev} className={s.notActive}>Previous</span>}
                {someBlock.map((d:number) => <span onClick={() => {
                    props.onPageChanged(d)
                }} className={props.currentPage == d ? s.current : s.notActive}> {d} </span>)}
                {endOfBlock != pages.length && <span onClick={next} className={s.notActive}>Next</span>}
            </div>
            <div>
                Введите номер страницы
                <SearchPageForm initialValues={{value: props.currentPage}} onSubmit={onSubmit}/>
            </div>
        </div>
    )
}
export default Paginator;
