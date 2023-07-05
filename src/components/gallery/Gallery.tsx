import React, {useState} from 'react';
import {photos, PhotoType} from "../../state/state";
import style from './style.module.css'

export const Gallery = () => {

    const [viewMode, setViewMode] = useState<boolean>(false)
    const [image, setImage] = useState<string>('')


    const getImage = (imageUrl: string) => {
        setImage(imageUrl)
        setViewMode(true)
    }

    return (
        <>
            <div className={viewMode ? `${style.model} ${style.open}` : style.model}>
                <img src={image}/>
            </div>
            <section className={style.gallery}>
                <h1 className={style.title}>Gallery</h1>
                <div className={style.galleryList}>
                    {photos.map((photo: PhotoType, index) => {
                        return (
                            <div
                                className={style.galleryItem}
                                key={index}
                                onClick={() => getImage(photo.imageUrl)}>
                                <div className={style.galleryItemHover}>Посмотреть</div>
                                <img src={photo.imageUrl} alt={photo.title}/>
                            </div>
                        )
                    })}
                </div>
            </section>
        </>

    );
};

