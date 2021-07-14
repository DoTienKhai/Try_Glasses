import React, { Component } from 'react'
import './Styling.css'
import hacker from './Styling.module.css'
export default class Styling extends Component {
    render() {
        return (
            <div>
                <h1 className='txt'>Nguyễn Hồng Quân</h1>
                <h1 className={hacker.hacker}>Luvina</h1>
            </div>
        )
    }
}
