import {library} from '@fortawesome/fontawesome-svg-core'
import {fab} from '@fortawesome/free-brands-svg-icons'
import '@fortawesome/fontawesome-svg-core/styles.css';
import {config} from '@fortawesome/fontawesome-svg-core';
import 'tailwindcss/tailwind.css'
import '../styles/globals.css'

config.autoAddCss = false;
library.add(fab)

function MyApp({Component, pageProps}) {
    return <Component {...pageProps} />
}

export default MyApp
