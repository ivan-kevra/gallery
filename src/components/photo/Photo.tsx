import React, {ChangeEvent, useState} from 'react';
import style from "../gallery/Style.module.css";
import {PhotoType} from "../../state/state";

type PhotoPropsType = {
    item: PhotoType | null
    closeImage: () => void
}
export const Photo = ({item, closeImage}: PhotoPropsType) => {

        const [comments, setComments] = useState<string[]>(['good', 'nice', 'not bad'])
        const [comment, setComment] = useState('')

        const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
            setComment(event.currentTarget.value)
        }
        const addComment = (newComment: string) => {
            setComments([newComment, ...comments])
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
                        {comments.map((comment: string) => <div>{comment}</div>)}
                    </div>
                </div>
                <button className={style.button} onClick={closeImage}>X</button>
            </>
        );
    }
;

