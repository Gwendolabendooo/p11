import React, { useState } from "react";

import Branding from '../assets/branding2.png'

import Header from '../components/Header'
import List from '../components/list'
import Footer from '../components/Footer'


const About = ({ data }) => {

    return (
        <div>
            <div className="margin">
                <Header name="/About"></Header>
                <div className="rounded-3 overflow-hidden position-relative" style={{height: 200+"px", marginTop: 40+"px", marginBottom: 40+"px"}}>
                    <img src={Branding} className="w-100 h-100" alt="" style={{objectFit: "cover"}} />
                    <div className="w-100 h-100 position-absolute place-center" style={{left: 50+"%", top: 50+"%", backgroundColor: "rgb(0 0 0 / 44%)"}}>
                    </div>
                </div>
                <div className="m-5">
                    <List title="Fiabilité" data={"Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes."}></List>
                    <List title="Respect" data={"La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."}></List>
                    <List title="Service" data={"Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."}></List>
                    <List title="Sécurité" data={"La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."}></List>
                </div>
            </div>
            <Footer></Footer>
        </div>
    )
};

export default props => <About {...props} />;