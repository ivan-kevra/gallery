import React, {useState} from 'react';
import {photos, PhotoType} from "../../state/state";
import style from "./Style.module.css"


export const Gallery = () => {

        const [viewMode, setViewMode] = useState<boolean>(false)
        const [item, setItem] = useState<PhotoType | null>(null)
        const getItem = (item: PhotoType) => {
            setItem(item)
            setViewMode(true)
        }

        const closeImage = () => {
            setItem(null)
            setViewMode(false)
        }

        return (
            <section className={style.gallery}>
                <h1 className={style.title}>Gallery</h1>
                <div className={style.galleryList}>
                    {photos.map((photo: PhotoType, index) => {
                        const getItemHandler = () => getItem(photo)
                        return (
                            <>
                                <div className={viewMode ? `${style.model} ${style.open}` : style.model}>
                                    <img src={item?.imageUrl}/>
                                    <div className={style.text}>
                                        <h2 className={style.photoTitle}>{item?.title}</h2>
                                        <div className={style.photoTitle}>{item?.description}</div>
                                        <div className={style.commentContainer}>
                                            <input/>
                                            <button>add comment</button>

                                        </div>
                                    </div>

                                    <button className={style.button} onClick={closeImage}>X</button>
                                </div>
                                <div
                                    className={style.galleryItem}
                                    key={index}
                                    onClick={getItemHandler}>
                                    <div className={style.galleryItemHover}>Посмотреть</div>
                                    <img src={photo.imageUrl} alt={photo.title}/>
                                </div>
                            </>

                        )
                    })}
                </div>
            </section>

        );
    }
;

