import React, { useState } from "react";
import Up from "../assets/arrow-up.svg"

const Slider = ({ data }) => {

    const [images, setImages] = useState(data.pictures);

    const [selectedImage, setSelectedImage] = useState({
        image: data.pictures[0],
        index: 0
    });

    const NextPicture = () => {
        if (selectedImage.index !== images.length - 1) {
            setSelectedImage({
                image: images[selectedImage.index + 1],
                index: selectedImage.index + 1
            })
        } else {
            setSelectedImage({
                image: images[0],
                index: 0
            })
        }
    } 

    const PreviousPicture = () => {
        if (selectedImage.index !== 0) {
            setSelectedImage({
                image: images[selectedImage.index - 1],
                index: selectedImage.index - 1
            })
        } else {
            setSelectedImage({
                image: images[images.length - 1],
                index: images.length - 1
            })
        }
    } 

    return (
        <div className="rounded bg-info position-relative overflow-hidden rounded-3" style={{height: 500+"px", marginTop: 30+"px", marginBottom: 30+"px"}}>
            <div className="h-100 w-100 position-relative">
                <img src={selectedImage.image} className="h-100 w-100" alt="slider" style={{objectFit: "cover"}} />
            </div>
            <img src={Up} alt="arrow-up" className="cursor-pointer place-center position-absolute" style={{transform: "rotate(-90deg)", left: 10+"px", width: 100+"px", top: 50+"%"}} onClick={PreviousPicture}/>
            <img src={Up} alt="arrow-up" className="cursor-pointer place-center position-absolute" style={{transform: "rotate(90deg)", right: 10+"px", width: 100+"px", top: 50+"%"}} onClick={NextPicture}/>
            <span className="place-center position-absolute text-white" style={{left: 50+"%", top: 90+"%", fontWeight: 600}}>
                {selectedImage.index + 1 + '/' + images.length}
            </span>
        </div>
    )
};

export default props => <Slider {...props} />;