import Carousel from"react-elastic-carousel"
import React, { Component } from 'react'
import '../ComponentCss/Carousel_Main.css'

const breakPoints=[
    {widh : 1, itemsToShow:1},
    {widh : 550, itemsToShow:2},
    {widh : 768, itemsToShow:3},
    {widh : 1200, itemsToShow:4}
]

class carousel_main extends Component{
    render()
    {
        return(
            <div className='Carousel'>
                <Carousel>
                <img className='Carousel_img' src='../data/image/lab1.png'></img>
                <img src='../data/image/lab1.png'></img>
                <img src='../data/image/lab1.png'></img>
                <img src='../data/image/lab1.png'></img>
                <img src='../data/image/lab1.png'></img>
                <img src='../data/image/lab1.png'></img>
                <img src='../data/image/lab1.png'></img>
                <img src='../data/image/lab1.png'></img>
                </Carousel>

                <hr width='1350px' ></hr>
            </div>
        )
    }
}

export default carousel_main;