import React, {useState} from 'react';
import style from "./Style.module.css"
import {Photo} from "../photo/Photo";
import {initialComments, photos, PhotoType} from "../../state/state";

type FilterType = 'all' | 'noDescription' | 'withDescription'
export const Gallery = () => {
        const [viewMode, setViewMode] = useState<boolean>(false)
        const [id, setId] = useState(0)
        const [title, setTitle] = useState('')
        const [description, setDescription] = useState('')
        const [imageURL, setImageURL] = useState('')
        const [comments, setComments] = useState(initialComments)
        const [filter, setFilter] = useState<FilterType>('all')
        let filteredPhotos = photos
        if (filter === 'noDescription') {
            filteredPhotos = photos.filter(photo => photo.description === '')
        }
        if (filter === 'withDescription') {
            filteredPhotos = photos.filter(photo => photo.description !== '')
        }
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
                <div className={style.filterButtons}>
                    <button className={style.filterButton} onClick={() => setFilter('all')}>All photo</button>
                    <button className={style.filterButton} onClick={() => setFilter('noDescription')}>Photo without description</button>
                    <button className={style.filterButton} onClick={() => setFilter('withDescription')}>Photo with description</button>
                </div>
                <div className={style.galleryList}>
                    {filteredPhotos.map((photo: PhotoType) => {
                        const getItemHandler = () => getItem(photo.id, photo.imageURL, photo.title, photo.description)
                        return (
                            <>
                                <div key={photo.id}
                                     className={viewMode ? `${style.model} ${style.open}` : style.model}>
                                    <Photo key={photo.id}
                                           closeImage={closeImage}
                                           addComment={addComment}
                                           comments={comments[id]}
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

