import React from 'react'
import "./CardContainer.css"
import Card from "./Card"

function Cards_Container() {
    return (
        <div className="container">
            <div className="header">
            
            <h1>FOOD AND THEIR CALORIES</h1>
            </div>
            <div className="home">
                <Card  Name="Fried Rice" Description="90"/>
                <Card  Name="Brownie" Description="169"/>
                <Card  Name="Coke" Description="500"/>
                <Card  Name="Lassania" Description="180"/>
                <Card  Name="pizza" Description="170"/>
                <Card  Name="Noodles" Description="169"/>
                <Card  Name="Coke" Description="500"/>
                <Card  Name="Brownie" Description="180"/>
                <Card  Name="Pani Puri" Description="100"/>
            </div>

        </div>
    )
}

export default Cards_Container;
