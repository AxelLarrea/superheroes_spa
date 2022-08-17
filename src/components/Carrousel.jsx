import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import '../styles/styles.css';
import BtnCarrousel from './BtnCarrousel';


const Carrousel = () => {

    const param = useParams();

    const [data, setData] = useState();

    const [slideIndex, setSlideIndex] = useState(1);

    const nextSlide = () => {
        if(slideIndex !== data.length){
            setSlideIndex(slideIndex + 1);
        }
        else if(slideIndex === data.length){
            setSlideIndex(1);
        };
    };

    const prevSlide = () => {
        if(slideIndex !== 1){
            setSlideIndex(slideIndex - 1);
        }
        else if (slideIndex === 1){
            setSlideIndex(data.length);
        }
    };

    const moveDot = index => {
        setSlideIndex(index);
    };

    useEffect(() => {
        const getPersonaje = async () => {
            const response = await fetch(`http://localhost:4000/individual/${param.nombre}`);
            const data = await response.json();
            setData(data[0].urls);
        };

        getPersonaje();
    }, [param.nombre]);

    
    return (
        <div className="container-slider">
            {data && data.map((obj, index) => {
                return (
                    <div
                    key={index}
                    className={slideIndex === index + 1 ? "slide active-anim" : "slide"}
                    >
                        <img 
                        src={data[index]} alt=""
                        />
                    </div>
                )
            })}
            <BtnCarrousel moveSlide={nextSlide} direction={"next"} />
            <BtnCarrousel moveSlide={prevSlide} direction={"prev"}/>

            <div className="container-dots">
                {data && Array.from({length: data.length}).map((item, index) => (
                    <div 
                    onClick={() => moveDot(index + 1)}
                    className={slideIndex === index + 1 ? "dot active" : "dot"}
                    ></div>
                ))}
            </div>
        </div>
    )
}
 
export default Carrousel;