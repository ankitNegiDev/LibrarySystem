
const books = [
    // Fiction
    {
        id: '1',
        title: 'The Great Gatsby',
        author: 'F. Scott Fitzgerald',
        description: 'A story of the Jazz Age in the United States, focusing on Jay Gatsby\'s obsession with the beautiful Daisy Buchanan.',
        rating: 4.4,
        category: 'Fiction',
    },
    {
        id: '2',
        title: '1984',
        author: 'George Orwell',
        description: 'A dystopian novel set in a totalitarian society ruled by Big Brother and the Party.',
        rating: 4.7,
        category: 'Fiction',
    },
    {
        id: '3',
        title: 'Pride and Prejudice',
        author: 'Jane Austen',
        description: 'A story of love and social standing set in the early 19th century English countryside.',
        rating: 4.8,
        category: 'Fiction',
    },
    {
        id: '4',
        title: 'The Catcher in the Rye',
        author: 'J.D. Salinger',
        description: 'A young man, Holden Caulfield, reflects on his troubled adolescence and alienation from society.',
        rating: 4.0,
        category: 'Fiction',
    },
    {
        id: '5',
        title: 'The Hobbit',
        author: 'J.R.R. Tolkien',
        description: 'Bilbo Baggins goes on an unexpected journey with dwarves to reclaim a lost kingdom.',
        rating: 4.6,
        category: 'Fiction',
    },

    // Non-Fiction
    // {
    //     id: '6',
    //     title: 'Sapiens: A Brief History of Humankind',
    //     author: 'Yuval Noah Harari',
    //     description: 'An exploration of the history of humankind, from the emergence of Homo sapiens to the present.',
    //     rating: 4.8,
    //     category: 'Non-Fiction',
    // },
    {
        id: '7',
        title: 'Educated',
        author: 'Tara Westover',
        description: 'A memoir of a woman who grows up in a strict, survivalist family and eventually escapes to find an education.',
        rating: 4.7,
        category: 'Non-Fiction',
    },
    {
        id: '8',
        title: 'Becoming',
        author: 'Michelle Obama',
        description: 'The memoir of former First Lady Michelle Obama, detailing her life story from childhood to the White House.',
        rating: 4.9,
        category: 'Non-Fiction',
    },
    {
        id: '9',
        title: 'The Immortal Life of Henrietta Lacks',
        author: 'Rebecca Skloot',
        description: 'The story of Henrietta Lacks and how her cells were used without her knowledge or consent to advance science.',
        rating: 4.6,
        category: 'Non-Fiction',
    },
    // {
    //     id: '10',
    //     title: 'Quiet: The Power of Introverts in a World That Can\'t Stop Talking',
    //     author: 'Susan Cain',
    //     description: 'An exploration of the power of introverts in a society that often values extroversion over introversion.',
    //     rating: 4.5,
    //     category: 'Non-Fiction',
    // },

    // Sci-Fi
    {
        id: '11',
        title: 'Dune',
        author: 'Frank Herbert',
        description: 'A science fiction epic set on the desert planet Arrakis, focusing on politics, religion, and ecology.',
        rating: 4.7,
        category: 'Sci-Fi',
    },
    {
        id: '12',
        title: 'Ender\'s Game',
        author: 'Orson Scott Card',
        description: 'A young boy, Ender Wiggin, is trained to lead humanity in a war against an alien species.',
        rating: 4.6,
        category: 'Sci-Fi',
    },
    {
        id: '13',
        title: 'The Left Hand of Darkness',
        author: 'Ursula K. Le Guin',
        description: 'Set on the planet Gethen, this novel explores gender and social structures through the eyes of a human envoy.',
        rating: 4.5,
        category: 'Sci-Fi',
    },
    {
        id: '14',
        title: 'Neuromancer',
        author: 'William Gibson',
        description: 'A hacker, Case, is hired for a final job in a world where cyberspace is a real, physical entity.',
        rating: 4.3,
        category: 'Sci-Fi',
    },
    {
        id: '15',
        title: 'The Three-Body Problem',
        author: 'Liu Cixin',
        description: 'A Chinese scientist makes a discovery that brings humanity into contact with an alien civilization.',
        rating: 4.4,
        category: 'Sci-Fi',
    },

    // Fantasy
    {
        id: '16',
        title: 'Harry Potter and the Sorcerer\'s Stone',
        author: 'J.K. Rowling',
        description: 'A young boy, Harry Potter, discovers he is a wizard and attends Hogwarts School of Witchcraft and Wizardry.',
        rating: 4.9,
        category: 'Fantasy',
    },
    {
        id: '17',
        title: 'The Name of the Wind',
        author: 'Patrick Rothfuss',
        description: 'The story of Kvothe, an orphan who grows up to be a legendary figure, as told in his own words.',
        rating: 4.8,
        category: 'Fantasy',
    },
    // {
    //     id: '18',
    //     title: 'Mistborn: The Final Empire',
    //     author: 'Brandon Sanderson',
    //     description: 'In a world where ash falls from the sky, a group of rebels attempts to overthrow an immortal ruler.',
    //     rating: 4.7,
    //     category: 'Fantasy',
    // },
    {
        id: '19',
        title: 'The Lies of Locke Lamora',
        author: 'Scott Lynch',
        description: 'The story of a group of thieves in the city of Camorr, led by the charismatic and clever Locke Lamora.',
        rating: 4.6,
        category: 'Fantasy',
    },
    {
        id: '20',
        title: 'The Way of Kings',
        author: 'Brandon Sanderson',
        description: 'The first book in the Stormlight Archive, exploring a world in constant conflict and the struggle for survival.',
        rating: 4.7,
        category: 'Fantasy',
    },

    // Mystery
    {
        id: '21',
        title: 'The Girl with the Dragon Tattoo',
        author: 'Stieg Larsson',
        description: 'A journalist and a hacker team up to solve a decades-old disappearance of a young woman.',
        rating: 4.6,
        category: 'Mystery',
    },
    {
        id: '22',
        title: 'Gone Girl',
        author: 'Gillian Flynn',
        description: 'A psychological thriller about a woman who goes missing and the dark secrets of her marriage.',
        rating: 4.7,
        category: 'Mystery',
    },
    {
        id: '23',
        title: 'The Silent Patient',
        author: 'Alex Michaelides',
        description: 'A woman who shoots her husband in the face, then falls silent, becomes the subject of a therapist\'s investigation.',
        rating: 4.5,
        category: 'Mystery',
    },
    {
        id: '24',
        title: 'Big Little Lies',
        author: 'Liane Moriarty',
        description: 'A mystery revolving around a murder in a tight-knit community of mothers and their families.',
        rating: 4.4,
        category: 'Mystery',
    },
    {
        id: '25',
        title: 'The Woman in the Window',
        author: 'A.J. Finn',
        description: 'A woman who believes she has witnessed a crime from her window becomes entangled in the mystery.',
        rating: 4.3,
        category: 'Mystery',
    },
    {
        id: '01',
        title: 'Pride and Prejudice',
        author: 'Jane Austen',
        description:
            'A romantic novel that charts the emotional development of the protagonist Elizabeth Bennet, who learns the error of making hasty judgments and comes to appreciate the difference between the superficial and the essential.',
        rating: 4.7,
        category: 'Fiction',
    },
    {
        id: '02',
        title: 'The Great Gatsby',
        author: 'F. Scott Fitzgerald',
        description:
            'Set in the Jazz Age on Long Island, the novel depicts narrator Nick Carraway\'s interactions with mysterious millionaire Jay Gatsby and Gatsby\'s obsession to reunite with his former love, Daisy Buchanan.',
        rating: 4.5,
        category: 'Fiction',
    },
    // Non-Fiction
    {
        id: '03',
        title: 'Sapiens: A Brief History of Humankind',
        author: 'Yuval Noah Harari',
        description:
            'An exploration of the history of humankind, from the Stone Age to the present day, focusing on key cognitive, agricultural, and scientific revolutions.',
        rating: 4.8,
        category: 'Non-Fiction',
    },
    {
        id: '04',
        title: 'The Diary of a Young Girl',
        author: 'Anne Frank',
        description:
            'The writings from the Dutch-language diary kept by Anne Frank while she was in hiding for two years with her family during the Nazi occupation of the Netherlands.',
        rating: 4.9,
        category: 'Non-Fiction',
    },
    // Sci-Fi
    {
        id: '05',
        title: 'Dune',
        author: 'Frank Herbert',
        description:
            'Set in the distant future amidst a feudal interstellar society in which various noble houses control planetary fiefs, it tells the story of young Paul Atreides, whose family accepts stewardship of the desert planet Arrakis, the only source of the valuable spice "melange".',
        rating: 4.7,
        category: 'Sci-Fi',
    },
    {
        id: '06',
        title: 'The Martian',
        author: 'Andy Weir',
        description:
            'An astronaut, Mark Watney, is presumed dead and left behind on Mars. He must rely on his ingenuity to find a way to signal to Earth that he is alive and survive until a potential rescue.',
        rating: 4.6,
        category: 'Sci-Fi',
    },
    // Fantasy
    {
        id: '07',
        title: 'A Game of Thrones',
        author: 'George R.R. Martin',
        description:
            'The first novel in A Song of Ice and Fire, a series of fantasy novels. It chronicles the violent dynastic struggles among the realm\'s noble families for control of the Iron Throne.',
        rating: 4.8,
        category: 'Fantasy',
    },
    {
        id: '08',
        title: 'The Name of the Wind',
        author: 'Patrick Rothfuss',
        description:
            'The first-person story of Kvothe, a magically gifted young man who grows to be a notorious figure. It follows his early life in a troupe of traveling players, his years as an orphan in a crime-ridden city, and his daring entrance to a legendary school of magic.',
        rating: 4.9,
        category: 'Fantasy',
    },
    // Mystery
    {
        id: '09',
        title: 'The Girl with the Dragon Tattoo',
        author: 'Stieg Larsson',
        description:
            'Journalist Mikael Blomkvist is aided in his search for a woman who has been missing for forty years by Lisbeth Salander, a young computer hacker with a photographic memory.',
        rating: 4.5,
        category: 'Mystery',
    },
    {
        id: '10', // Re-using ID from your original example for this one, as it fits mystery well.
        // Or, if you used that '10' for Narnia, make this '11' or another unique ID.
        title: 'And Then There Were None',
        author: 'Agatha Christie',
        description:
            'Ten strangers are lured to an isolated island mansion off the Devon coast by a mysterious "U.N. Owen." One by one, they are accused of murder and then killed in a manner paralleling a sinister nursery rhyme.',
        rating: 4.7,
        category: 'Mystery',
    }

]
export default books;
