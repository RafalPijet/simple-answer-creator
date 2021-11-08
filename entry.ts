import { Entry } from './types'

export const data: Entry[] = [
    {
        step: 0,
        cases: [
            {
                caseId: '0',
                title: 'Select first answer',
                questions: [
                    { id: '0/1', choice: 'Books' },
                    { id: '0/2', choice: 'Cars' },
                    { id: '0/3', choice: 'Animals' },
                ],
            }
        ]

    },
    {
        step: 1,
        cases: [
            {
                caseId: '0/1',
                title: 'Select type of book',
                questions: [
                    { id: '1/1', choice: 'Adventure' },
                    { id: '1/2', choice: 'Science Fiction' },
                    { id: '1/3', choice: 'Horror' },
                    { id: '1/4', choice: 'Love Story' },
                ]
            },
            {
                caseId: '0/2',
                title: 'Select brand of car',
                questions: [
                    { id: '1/5', choice: 'BMW' },
                    { id: '1/6', choice: 'Mercedes' },
                    { id: '1/7', choice: 'Audi' },
                    { id: '1/8', choice: 'Toyota' },
                ]
            },
            {
                caseId: '0/3',
                title: 'Choose the type of animal',
                questions: [
                    { id: '1/9', choice: 'Bird' },
                    { id: '1/10', choice: 'Mammal' },
                    { id: '1/11', choice: 'Fish' },
                    { id: '1/12', choice: 'Reptile' },
                ]
            },
        ]
    },
    {
        step: 2,
        cases: [
            {
                caseId: '1/1',
                title: 'Select title of adventure book',
                questions: [
                    { id: '2/1', choice: 'First title adventure book' },
                    { id: '2/2', choice: 'Second title adventure book' },
                ]
            },
            {
                caseId: '1/2',
                title: 'Select title of science fiction book',
                questions: [
                    { id: '2/3', choice: 'First title science fiction book' },
                    { id: '2/4', choice: 'Second title science fiction book' },
                    { id: '2/5', choice: 'Third title science fiction book' },
                    { id: '2/6', choice: 'Fourth title science fiction book' },
                ]
            },
            {
                caseId: '1/3',
                title: 'Select title of horror book',
                questions: [
                    { id: '2/7', choice: 'First title horror book' },
                    { id: '2/8', choice: 'Second title horror book' },
                    { id: '2/9', choice: 'Third title horror book' },
                    { id: '2/10', choice: 'Fourth title horror book' },
                ]
            },
            {
                caseId: '1/4',
                title: 'Select title of love story book',
                questions: [
                    { id: '2/11', choice: 'First title love story book' },
                    { id: '2/12', choice: 'Second title love story book' },
                    { id: '2/13', choice: 'Third title love story book' },
                ]
            },
            {
                caseId: '1/5',
                title: 'Select BMW car model',
                questions: [
                    { id: '2/14', choice: '1 series' },
                    { id: '2/15', choice: '2 series' },
                    { id: '2/16', choice: '3 series' },
                    { id: '2/17', choice: '4 series' },
                    { id: '2/18', choice: '5 series' },
                ]
            },
            {
                caseId: '1/6',
                title: 'Select Mercedes car model',
                questions: [
                    { id: '2/19', choice: 'A classe' },
                    { id: '2/20', choice: 'C classe' },
                    { id: '2/21', choice: 'E classe' },
                    { id: '2/22', choice: 'S classe' },
                    { id: '2/23', choice: 'GLC classe' },
                ]
            },
            {
                caseId: '1/7',
                title: 'Select Audi car model',
                questions: [
                    { id: '2/24', choice: 'A2' },
                    { id: '2/25', choice: 'A3' },
                    { id: '2/26', choice: 'A4' },
                    { id: '2/27', choice: 'A5' },
                    { id: '2/28', choice: 'A6' },
                ]
            },
            {
                caseId: '1/8',
                title: 'Select Toyota car model',
                questions: [
                    { id: '2/29', choice: 'Yaris' },
                    { id: '2/30', choice: 'Camry' },
                ]
            },
            {
                caseId: '1/9',
                title: 'Select bird name',
                questions: [
                    { id: '2/31', choice: 'Eagle' },
                    { id: '2/32', choice: 'Nightingale' },
                    { id: '2/33', choice: 'Hawk' },
                ]
            },
            {
                caseId: '1/10',
                title: 'Select mammal name',
                questions: [
                    { id: '2/34', choice: 'Elephant' },
                    { id: '2/35', choice: 'Horse' },
                    { id: '2/36', choice: 'Cow' },
                ]
            },
            {
                caseId: '1/11',
                title: 'Select fish name',
                questions: [
                    { id: '2/37', choice: 'Tuna' },
                    { id: '2/38', choice: 'Salmon' },
                    { id: '2/39', choice: 'Cod' },
                ]
            },
            {
                caseId: '1/12',
                title: 'Select reptile name',
                questions: [
                    { id: '2/40', choice: 'Snake' },
                    { id: '2/41', choice: 'Lizard' },
                    { id: '2/42', choice: 'Viper' },
                ]
            },
        ]
    }
]