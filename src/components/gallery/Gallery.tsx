import React, {useState} from 'react';
import style from "./Style.module.css"
import {Photo} from "../photo/Photo";
import {initialComments, photos, PhotoType} from "../../state/state";


export const Gallery = () => {
        const [viewMode, setViewMode] = useState<boolean>(false)
        const [id, setId] = useState(0)
        const [title, setTitle] = useState('')
        const [description, setDescription] = useState('')
        const [imageURL, setImageURL] = useState('')
        const [comments, setComments] = useState(initialComments)
        const addComment = (newComment: string) => {
            let newComments = comments[id]
            comments[id] = [newComment, ...newComments]
            setComments({...comments})
        }
        const getItem = (id: number, imageURL: string, title: string, description: string) => {
            setId(id)
            setImageURL(imageURL)
            setTitle(title)
            setDescription(description)
            setViewMode(true)
        }
        const closeImage = () => {
            setId(0)
            setImageURL('')
            setTitle('')
            setDescription('')
            setViewMode(false)
        }
        return (
            <section className={style.gallery}>
                <h1 className={style.title}>Gallery</h1>
                <div className={style.galleryList}>
                    {photos.map((photo: PhotoType) => {
                        const getItemHandler = () => getItem(photo.id, photo.imageURL, photo.title, photo.description)
                        const commentsFiltered = comments[id]
                        return (
                            <>
                                <div key={photo.id}
                                     className={viewMode ? `${style.model} ${style.open}` : style.model}>
                                    <Photo key={photo.id}
                                           closeImage={closeImage}
                                           addComment={addComment}
                                           comments={commentsFiltered}
                                           id={id}
                                           title={title}
                                           description={description}
                                           imageURL={imageURL}
                                    />
                                </div>
                                <div
                                    className={style.galleryItem}
                                    onClick={getItemHandler}>
                                    <div className={style.galleryItemHover}>Посмотреть</div>
                                    <img src={photo.imageURL} alt={photo.title}/>
                                </div>
                            </>

                        )
                    })}
                </div>
            </section>
        );
    }
;

