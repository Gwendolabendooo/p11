import React, { useState } from "react";

import Header from '../components/Header'
import Slider from '../components/Slider'
import Tag from '../components/Tag'
import List from '../components/list'
import Footer from '../components/Footer'

import starColored from '../assets/starColored.svg'
import star from '../assets/star.svg'

const Habitation = ({ data }) => {
    const id = new URLSearchParams(window.location.search).get('id')

    const currentData = data.find(data => {
        return data.id === id;
    })

    let note = []
    let i = 0
    while (5 > i) {
        if (i < currentData.rating) {
            note.push("starColored")
        }else{
            note.push("star")
        }
        i++
    }

    return (
        <div>
            <div className="margin">
                <Header></Header>
                <Slider data={currentData}></Slider>
                <div className="d-flex flex-wrap justify-content-between">
                    <div>
                        <h2 className="text-danger">
                            {currentData.title}
                        </h2>
                        <div className="text-danger">
                            {currentData.location}
                        </div>
                        <div className="d-flex flex-wrap">
                            {currentData.tags.map(tag => {
                                return(
                                    <Tag title={tag}></Tag>
                                )
                            })}
                        </div>
                    </div>
                    <div className="ctn-rate-picture">
                        <div className="d-flex align-items-center">
                            <div className="text-danger m-2">
                                {currentData.host.name}
                            </div>
                            <img src={currentData.host.picture} className="rounded-circle" style={{width: 70+"px"}} alt="" />
                        </div>
                        <div className="text-end">
                            {note.map(stared => {
                                if(stared === 'starColored'){
                                    return(
                                        <img src={starColored} style={{marginLeft: 5+"px"}} alt="star"></img>
                                    )
                                }
                                return(
                                    <img src={star} style={{marginLeft: 5+"px"}} alt="star"></img>
                                )
                            })}
                        </div>
                    </div>
                </div>
                <div className="d-flex flex-row justify-content-between ctn-about-people" style={{marginTop: 20+"px"}}>
                    <div className="w-50 h-100" style={{marginRight: 40+"px"}}>
                        <List title="Description" data={currentData.description}></List>
                    </div>
                    <div className="w-50 h-100" style={{marginLeft: 40+"px"}}>
                        <List title="Equipements" data={currentData.equipments}></List>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    )
};

export default props => <Habitation {...props} />;