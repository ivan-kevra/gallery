import React, {useState} from 'react';
import style from "./Style.module.css"
import {Photo} from "../photo/Photo";

export type PhotoType = {
    id: number
    title: string
    description: string
    imageURL: string,
}
export type initialCommentsType = {
    [key: number]: string[]
}

const tlId1 = 1
const tlId2 = 2
const tlId3 = 3
const tlId4 = 4
const tlId5 = 5
const tlId6 = 6
const tlId7 = 7
const tlId8 = 8

export const photos: PhotoType[] = [
    {
        id: tlId1,
        title: 'Croatia river',
        description: 'Plitvice Lakes National Park in Croatia. Plitvice Lakes National Park is a must add to your Croatia itinerary.',
        imageURL: 'https://i.pinimg.com/236x/d2/ab/ba/d2abbacebd30efb029a506054887ab14.jpg',
        // comments: initialComments[tlId1]
    },
    {
        id: tlId2,
        title: '10 of The Best Waterfalls in The World',
        description: 'There’s nothing quite as mesmerising as standing in complete awe in front of one of Mother Nature’s most astonishing waterfalls.',
        imageURL: 'https://i.pinimg.com/564x/a4/46/4e/a4464e2e6c69a6bb7fe7fdd942788908.jpg',
        // comments: initialComments[tlId2]
    },
    {
        id: tlId3,
        title: 'Sunset',
        description: '"Every sunset is an opportunity to reset."– Richie Norton',
        imageURL: 'https://i.pinimg.com/564x/09/47/db/0947db859f8bbec51f4f85d030c59b03.jpg',
        // comments: initialComments[tlId3]
    },
    {
        id: tlId4,
        title: 'White River on Mount Rainier',
        description: 'The internet\'s largest community of landscape photographers and Earth lovers. [This subreddit is now private. Click here to find out why we have...',
        imageURL: 'https://i.pinimg.com/564x/ce/63/89/ce638990f9771cb735de8654c4f51ad9.jpg',
        // comments: initialComments[tlId4]
    },
// {
//     id: tlId5,
//     title: 'Garden in Italy ',
//     description: 'With a brief to create a garden in the Italian countryside in tune with its surroundings, the designer Stuart Barfoot combined subtle landscaping with romantic plantings in a wildlife-rich scheme that captivates the senses.',
//     imageURL: 'https://i.pinimg.com/564x/ce/63/89/ce638990f9771cb735de8654c4f51ad9.jpg',
//     comments: []
// },
// {
//     id: tlId6,
//     title: 'River in Italy ',
//     description: '16 of the Best Places to Visit in Italy.',
//     imageURL: 'https://i.pinimg.com/564x/a3/bd/99/a3bd99ff636a9cd1c51b07c65f1aae60.jpg',
//     comments: []
// },
// {
//     id: tlId7,
//     title: 'Stunning sunset photography',
//     description: 'Nature landscape road photography',
//     imageURL: 'https://i.pinimg.com/564x/86/65/68/866568383b5911ba53265a980c43e271.jpg',
//     comments: []
// },
// {
//     id: tlId8,
//     title: 'Air castle',
//     description: 'Air castle',
//     imageURL: 'https://i.pinimg.com/564x/07/7f/aa/077faa00278e86e9a5f59461888d715e.jpg',
//     comments: []
// },
]
export const initialComments: initialCommentsType = {
    [tlId1]: ['1', '123123123'],
    [tlId2]: ['2', '123123123'],
    [tlId3]: ['3', '123123123'],
    [tlId4]: ['4', '123123123'],
    // [tlId5]: ['5', '123123123'],
    // [tlId6]: ['6', '123123123'],
    // [tlId7]: ['7', '123123123'],
    // [tlId8]: ['8', '123123123'],
}

export const Gallery = () => {

        const [viewMode, setViewMode] = useState<boolean>(false)
        const [id, setId] = useState(0)
        const [title, setTitle] = useState('')
        const [description, setDecription] = useState('')
        const [imageURL, setImageURL] = useState('')
        const [comments, setComments] = useState(initialComments)
        console.log(comments)
        const addComment = (photoId: number, newComment: string) => {
            let newComments = comments[photoId]
            comments[photoId] = [newComment, ...newComments]
            setComments({...comments})
        }
        const getItem = (id: number, imageURL: string, title: string, description: string) => {
            setId(id)
            setImageURL(imageURL)
            setTitle(title)
            setDecription(description)
            setViewMode(true)

        }
        const closeImage = () => {
            setId(0)
            setImageURL('')
            setTitle('')
            setDecription('')
            setViewMode(false)
        }

        return (
            <section className={style.gallery}>
                <h1 className={style.title}>Gallery</h1>
                <div className={style.galleryList}>
                    {photos.map((photo: PhotoType) => {
                        const getItemHandler = () => getItem(photo.id, photo.imageURL, photo.title, photo.description)
                        const commentsFiltered = comments[photo.id]
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

