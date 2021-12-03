import React, { Component } from 'react'
import QuickSearches from './QuickSearches'
import Wallpaper from './Wallpaper'

export class Home extends Component {
    render() {
        return (
            <>
                <Wallpaper />
                <QuickSearches />
            </>
        )
    }
}

export default Home;
