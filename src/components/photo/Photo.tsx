import React, {ChangeEvent, useState} from 'react';
import style from "./Style.module.css";

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



        return (
            <>
                <button className={style.button} onClick={props.closeImage}>X</button>
                <div className={style.container}>
                    <div className={style.photo}>
                        <img className={style.photoImage} src={props.imageURL} alt="Фото 1"/>
                        <div className={style.photoDetails}>
                            <h2 className={style.photoTitle}>{props.title}</h2>
                            <p className={style.photoDescription}>{props.description}</p>
                            <ul className={style.photoComments}>
                                {props.comments && props.comments.map(((comment) =>
                                    <li className={style.photoComment}>{comment}</li>))}
                            </ul>
                            <div>
                                <label htmlFor="comment-text">Add comment:</label>
                                <input type="text" value={comment} onChange={onChangeHandler}/>
                                <button type="submit" onClick={addCommentHandler}>ADD</button>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
;

