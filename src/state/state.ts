export type PhotoType = {
    id: number
    title: string
    description: string
    imageURL: string,
}
export type initialCommentsType = {
    [key: number]: string[]
}

const photoId1 = 1
const photoId2 = 2
const photoId3 = 3
const photoId4 = 4
const photoId5 = 5
const photoId6 = 6
const photoId7 = 7
const photoId8 = 8

export const photos: PhotoType[] = [
    {
        id: photoId1,
        title: 'Croatia river',
        description: 'Croatia is home to several beautiful rivers that flow through its diverse landscapes, including the Dobra, Drava, Kupa, Mrežnica, and Neretva rivers. The rivers of Croatia are a major natural resource for the country, providing recreational opportunities, supporting diverse ecosystems, and serving as important transportation and trade routes.',
        imageURL: 'https://i.pinimg.com/564x/c4/34/2f/c4342f0af7296c822069cf0487de23a2.jpg',
    },
    {
        id: photoId2,
        title: '10 of The Best Waterfalls in The World',
        description: 'There’s nothing quite as mesmerising as standing in complete awe in front of one of Mother Nature’s most astonishing waterfalls.',
        imageURL: 'https://i.pinimg.com/564x/a4/46/4e/a4464e2e6c69a6bb7fe7fdd942788908.jpg',
    },
    {
        id: photoId3,
        title: 'Sunset',
        description: '',
        imageURL: 'https://i.pinimg.com/564x/09/47/db/0947db859f8bbec51f4f85d030c59b03.jpg',
    },
    {
        id: photoId4,
        title: 'White River on Mount Rainier',
        description: 'The White River is a river that flows through the eastern side of Mount Rainier National Park in the state of Washington, United States. The river originates from the Emmons Glacier on the eastern slope of Mount Rainier, which is the largest glacier in the contiguous United States.',
        imageURL: 'https://i.pinimg.com/564x/ce/63/89/ce638990f9771cb735de8654c4f51ad9.jpg',
    },
    {
        id: photoId5,
        title: 'Garden in Italy ',
        description: 'Italy is home to many beautiful and historic gardens, each with their own unique features and characteristics. Here are a few examples:\n' +
            '\n' +
            'Villa d\'Este Gardens, Tivoli - Located just outside Rome, the Villa d\'Este Gardens are known for their beautiful fountains, water features, and terraced gardens. The gardens were created in the 16th century and feature a mix of Renaissance and Baroque design elements.',
        imageURL: 'https://i.pinimg.com/564x/ce/63/89/ce638990f9771cb735de8654c4f51ad9.jpg',
    },
    {
        id: photoId6,
        title: 'River in Italy',
        description: '',
        imageURL: 'https://i.pinimg.com/564x/a3/bd/99/a3bd99ff636a9cd1c51b07c65f1aae60.jpg',
    },
    {
        id: photoId7,
        title: 'Stunning sunset photography',
        description: 'tunning sunset photography captures the beauty and majesty of the natural world at the end of the day, as the sun sinks below the horizon and the sky is painted with a range of colors. A great sunset photo can evoke a sense of peace, tranquility, and wonder, and can transport the viewer to a different time and place.',
        imageURL: 'https://i.pinimg.com/564x/86/65/68/866568383b5911ba53265a980c43e271.jpg',
    },
    {
        id: photoId8,
        title: 'Air castle',
        description: 'An air castle is a fanciful term used to describe an unrealistic or impractical idea, plan, or vision. It is often used to suggest that someone is indulging in daydreaming or wishful thinking, rather than engaging with reality.',
        imageURL: 'https://i.pinimg.com/564x/07/7f/aa/077faa00278e86e9a5f59461888d715e.jpg',
    },


]
export const initialComments: initialCommentsType = {
    [photoId1]: ['1 comment', '4 comment', '4 comment'],
    [photoId2]: ['2 comment', '4 comment'],
    [photoId3]: ['3 comment'],
    [photoId4]: ['4 comment', '4 comment', '4 comment', '4 comment'],
    [photoId5]: ['5 comment', '4 comment'],
    [photoId6]: ['6 comment', '4 comment', '4 comment', '4 comment', '4 comment'],
    [photoId7]: ['7 comment', '4 comment'],
    [photoId8]: ['8 comment', '4 comment', '4 comment', '4 comment', '4 comment', '4 comment', '4 comment'],
}