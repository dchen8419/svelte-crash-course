import { writable } from "svelte/store";

export const FeedbackStore = writable([
    {
        id: 1,
        rating: 10,
        text: 'Sometimes it takes a while',
    },
    {
        id: 2,
        rating: 9,
        text: 'But you got this!',
    },
    {
        id: 3,
        rating: 5,
        text: 'Don\'t Give up!',
    },
])