import React, {ChangeEvent, useState} from 'react';
import style from "../gallery/Style.module.css";
import {PhotoType} from "../../state/state";

type PhotoPropsType = {
    item: PhotoType | null
    closeImage: () => void
}
export const Photo = ({item, closeImage}: PhotoPropsType) => {
        const [comment, setComment] = useState<string>('')
        const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
            setComment(event.currentTarget.value)
        }
        const addComment = (newComment: string) => {
            setComment('')
        }
        return (
            <>
                <img src={item?.imageUrl}/>
                <div className={style.text}>
                    <h2 className={style.photoTitle}>{item?.title}</h2>
                    <div className={style.photoTitle}>{item?.description}</div>
                    <div className={style.commentContainer}>
                        <input value={comment} onChange={onChangeHandler}/>
                        <button onClick={() => addComment(comment)}>add comment</button>
                    </div>
                    <div>
                        {item?.comments.map((comment) => <div>{comment}</div>)}
                    </div>
                </div>
                <button className={style.button} onClick={closeImage}>X</button>
            </>
        );
    }
;

