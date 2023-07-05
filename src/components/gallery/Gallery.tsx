import React from 'react';
import {photos, PhotoType} from "../../state/state";
import style from './style.module.css'

export const Gallery = () => {
    return (
        <section className={style.gallery}>
            <h1 className={style.title}>Gallery</h1>
            <div className={style.galleryList}>
                {photos.map((photo: PhotoType) => {
                    return (
                        <a href={photo.imageUrl} className={style.galleryItem}>
                            <div className={style.galleryItemHover}>Посмотреть</div>
                            <img src={photo.imageUrl} alt={photo.title}/>
                        </a>
                    )
                })}
            </div>
        </section>
    );
};

