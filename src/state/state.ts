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
        description: 'Croatia is home to several beautiful rivers that flow through its diverse landscapes, including the Dobra, Drava, Kupa, Mrežnica, and Neretva rivers. The rivers of Croatia are a major natural resource for the country, providing recreational opportunities, supporting diverse ecosystems, and serving as important transportation and trade routes.',
        imageURL: 'https://i.pinimg.com/564x/c4/34/2f/c4342f0af7296c822069cf0487de23a2.jpg',
    },
    {
        id: tlId2,
        title: '10 of The Best Waterfalls in The World',
        description: 'There’s nothing quite as mesmerising as standing in complete awe in front of one of Mother Nature’s most astonishing waterfalls.',
        imageURL: 'https://i.pinimg.com/564x/a4/46/4e/a4464e2e6c69a6bb7fe7fdd942788908.jpg',
    },
    {
        id: tlId3,
        title: 'Sunset',
        description: 'Sunset is the daily event when the sun descends below the horizon in the west, giving way to the darkness of night. During a sunset, the sky is often painted with a range of beautiful colors, including oranges, pinks, purples, and reds.',
        imageURL: 'https://i.pinimg.com/564x/09/47/db/0947db859f8bbec51f4f85d030c59b03.jpg',
    },
    {
        id: tlId4,
        title: 'White River on Mount Rainier',
        description: 'The White River is a river that flows through the eastern side of Mount Rainier National Park in the state of Washington, United States. The river originates from the Emmons Glacier on the eastern slope of Mount Rainier, which is the largest glacier in the contiguous United States.',
        imageURL: 'https://i.pinimg.com/564x/ce/63/89/ce638990f9771cb735de8654c4f51ad9.jpg',
    },
    {
        id: tlId5,
        title: 'Garden in Italy ',
        description: 'Italy is home to many beautiful and historic gardens, each with their own unique features and characteristics. Here are a few examples:\n' +
            '\n' +
            'Villa d\'Este Gardens, Tivoli - Located just outside Rome, the Villa d\'Este Gardens are known for their beautiful fountains, water features, and terraced gardens. The gardens were created in the 16th century and feature a mix of Renaissance and Baroque design elements.',
        imageURL: 'https://i.pinimg.com/564x/ce/63/89/ce638990f9771cb735de8654c4f51ad9.jpg',
    },
    {
        id: tlId6,
        title: 'River in Italy',
        description: 'Italy is home to several beautiful and historic rivers that flow through its diverse landscapes, including the Po, Tiber, Arno, Adige, and Brenta rivers. Here are brief descriptions of some of the most notable:\n' +
            '\n' +
            'Po River - The Po is the longest river in Italy, stretching over 400 miles from the Cottian Alps to the Adriatic Sea. The Po River plays an important role in the country\'s economy, providing irrigation for agriculture, as well as transportation and hydroelectric power.\n' +
            '\n' +
            'Tiber River - The Tiber is the second-longest river in Italy and flows through the heart of Rome. The river is famous for its historic bridges, including the Ponte Vecchio and Ponte Sant\'Angelo, and its role in the city\'s history and culture.',
        imageURL: 'https://i.pinimg.com/564x/a3/bd/99/a3bd99ff636a9cd1c51b07c65f1aae60.jpg',
    },
    {
        id: tlId7,
        title: 'Stunning sunset photography',
        description: 'tunning sunset photography captures the beauty and majesty of the natural world at the end of the day, as the sun sinks below the horizon and the sky is painted with a range of colors. A great sunset photo can evoke a sense of peace, tranquility, and wonder, and can transport the viewer to a different time and place.',
        imageURL: 'https://i.pinimg.com/564x/86/65/68/866568383b5911ba53265a980c43e271.jpg',
    },
    {
        id: tlId8,
        title: 'Air castle',
        description: 'An air castle is a fanciful term used to describe an unrealistic or impractical idea, plan, or vision. It is often used to suggest that someone is indulging in daydreaming or wishful thinking, rather than engaging with reality.',
        imageURL: 'https://i.pinimg.com/564x/07/7f/aa/077faa00278e86e9a5f59461888d715e.jpg',
    },
]
export const initialComments: initialCommentsType = {
    [tlId1]: ['1 comment', '4 comment', '4 comment'],
    [tlId2]: ['2 comment', '4 comment'],
    [tlId3]: ['3 comment'],
    [tlId4]: ['4 comment', '4 comment', '4 comment', '4 comment'],
    [tlId5]: ['5 comment', '4 comment'],
    [tlId6]: ['6 comment', '4 comment', '4 comment', '4 comment', '4 comment'],
    [tlId7]: ['7 comment', '4 comment'],
    [tlId8]: ['8 comment', '4 comment', '4 comment', '4 comment', '4 comment', '4 comment', '4 comment'],
}