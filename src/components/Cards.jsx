import React, { useState } from 'react';
import IndividualCard from './IndividualCard';

const Cards = () => {

    const arr = ['','',''];

    return (
        <>
            <div className="main">
                <div className="cards-container">
                    {
                        arr.map(card => {
                            return <IndividualCard
                                    key={card}

                                    />
                        })
                    }
                </div>
            </div>
        </>
    );
}
 
export default Cards;