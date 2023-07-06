import React, {ChangeEvent, useState} from 'react';
import style from "../gallery/Style.module.css";

type PhotoPropsType = {
    closeImage: () => void
    addComment: (newComment: string) => void
    comments: string[]
    id: number
    title: string
    description: string
    imageURL: string


}
export const Photo = (props: PhotoPropsType) => {


        const [comment, setComment] = useState('')
        const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
            setComment(event.currentTarget.value)
        }
        const addCommentHandler = () => {
            props.addComment(comment)
            setComment('')
        }
        console.log(typeof props.comments)
        return (
            <>
                <img src={props.imageURL}/>
                <div className={style.text}>
                    <h2 className={style.photoTitle}>{props.title}</h2>
                    <div className={style.photoTitle}>{props.description}</div>
                    <div className={style.commentContainer}>
                        <input value={comment} onChange={onChangeHandler}/>
                        <button onClick={addCommentHandler}>add comment</button>
                    </div>
                    <div>
                        {props.comments && props.comments.map((comment) => <div>{comment}</div>)}
                    </div>
                </div>
                <button className={style.button} onClick={props.closeImage}>X</button>
            </>
        );
    }
;

