import React, {useState} from 'react';
import style from "./Style.module.css"
import {Photo} from "../photo/Photo";

export type PhotoType = {
    id: number
    title: string
    description: string
    imageUrl: string,
    comments: string[]
}
export type initialCommentsType = {
    [key: number]: string[]
}
export const photos: PhotoType[] = [
    {
        id: 1,
        title: 'Croatia river',
        description: 'Plitvice Lakes National Park in Croatia. Plitvice Lakes National Park is a must add to your Croatia itinerary.',
        imageUrl: 'https://i.pinimg.com/236x/d2/ab/ba/d2abbacebd30efb029a506054887ab14.jpg',
        comments: ['1', '123123123']
    },
    {
        id: 2,
        title: '10 of The Best Waterfalls in The World',
        description: 'There’s nothing quite as mesmerising as standing in complete awe in front of one of Mother Nature’s most astonishing waterfalls.',
        imageUrl: 'https://i.pinimg.com/564x/a4/46/4e/a4464e2e6c69a6bb7fe7fdd942788908.jpg',
        comments: ['2', '123123123']
    },
    {
        id: 3,
        title: 'Sunset',
        description: '"Every sunset is an opportunity to reset."– Richie Norton',
        imageUrl: 'https://i.pinimg.com/564x/09/47/db/0947db859f8bbec51f4f85d030c59b03.jpg',
        comments: ['3', '123123123']
    },
    {
        id: 4,
        title: 'White River on Mount Rainier',
        description: 'The internet\'s largest community of landscape photographers and Earth lovers. [This subreddit is now private. Click here to find out why we have...',
        imageUrl: 'https://i.pinimg.com/564x/ce/63/89/ce638990f9771cb735de8654c4f51ad9.jpg',
        comments: []
    },
    {
        id: 5,
        title: 'Garden in Italy ',
        description: 'With a brief to create a garden in the Italian countryside in tune with its surroundings, the designer Stuart Barfoot combined subtle landscaping with romantic plantings in a wildlife-rich scheme that captivates the senses.',
        imageUrl: 'https://i.pinimg.com/564x/ce/63/89/ce638990f9771cb735de8654c4f51ad9.jpg',
        comments: []
    },
    {
        id: 6,
        title: 'River in Italy ',
        description: '16 of the Best Places to Visit in Italy.',
        imageUrl: 'https://i.pinimg.com/564x/a3/bd/99/a3bd99ff636a9cd1c51b07c65f1aae60.jpg',
        comments: []
    },
    {
        id: 7,
        title: 'Stunning sunset photography',
        description: 'Nature landscape road photography',
        imageUrl: 'https://i.pinimg.com/564x/86/65/68/866568383b5911ba53265a980c43e271.jpg',
        comments: []
    },
    {
        id: 8,
        title: 'Air castle',
        description: 'Air castle',
        imageUrl: 'https://i.pinimg.com/564x/07/7f/aa/077faa00278e86e9a5f59461888d715e.jpg',
        comments: []
    },
]
export const initialComments: initialCommentsType = {
    1: ['1', '123123123'],
    2: ['2', '123123123'],
    3: ['3', '123123123'],
    4: ['4', '123123123'],
    5: ['5', '123123123'],
    6: ['6', '123123123'],
    7: ['7', '123123123'],
    8: ['8', '123123123'],
}
export const Gallery = () => {

        const [viewMode, setViewMode] = useState<boolean>(false)
        const [item, setItem] = useState<PhotoType | null>(null)
        const [comments, setComments] = useState(initialComments)

        const addComment = (photoId: number, newComment: string) => {
            let newComments = comments[photoId]
            comments[photoId] = [newComment, ...newComments]
            setComments({...comments})
        }
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
                                    <Photo item={item}
                                           closeImage={closeImage}
                                           addComment={addComment}
                                           photoId={photo.id}
                                           comments={comments}
                                    />
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

