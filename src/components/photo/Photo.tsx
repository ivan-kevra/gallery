import React, {ChangeEvent, useState} from 'react';
import style from "../gallery/Style.module.css";
import {initialCommentsType, PhotoType} from "../gallery/Gallery";

type PhotoPropsType = {
    photoId: number
    item: PhotoType | null
    closeImage: () => void
    addComment: (photoId: number, newComment: string) => void
    comments: initialCommentsType

}
export const Photo = (props: PhotoPropsType) => {
        const [comment, setComment] = useState('')
        const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
            setComment(event.currentTarget.value)
        }
        const addCommentHandler = () => {
            props.addComment(props.photoId, comment)
            setComment('')
        }
        return (
            <>
                <img src={props.item?.imageUrl}/>
                <div className={style.text}>
                    <h2 className={style.photoTitle}>{props.item?.title}</h2>
                    <div className={style.photoTitle}>{props.item?.description}</div>
                    <div className={style.commentContainer}>
                        <input value={comment} onChange={onChangeHandler}/>
                        <button onClick={addCommentHandler}>add comment</button>
                    </div>
                    <div>
                        {props.comments[props.photoId].map((com) => <div>{com}</div>)}
                    </div>
                </div>
                <button className={style.button} onClick={props.closeImage}>X</button>
            </>
        );
    }
;

