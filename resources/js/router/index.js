import Home from '../views/Home'
import About from '../views/About'
import NewNotes from '../views/notes/Create'

export default {
    mode: 'history',

    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },

        {
            path: '/about',
            name: 'pages.about',
            component: About
        },

        {
            path: '/notes/create',
            name: 'notes.create',
            component: NewNotes
        },
    ]
}