import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';



export default function Beers() {

    const [beersState, setBeersState] = useState([]);

    useEffect(() => {
        axios.get('https://ih-beers-api2.herokuapp.com/beers')
            .then(res => {setBeersState(res.data)})
            .catch(err => console.log(err));
    }, [])
    
    const beersToRender = beersState.map(beer => {
        return (
            <div key={beer._id}>
                <Link to={`/beers/${beer._id}`}>
                    <img src={beer.image_url} height="200px" alt="The beer pic"></img>
                    <h3>{beer.name}</h3>
                </Link>
                <h5>{beer.tagline}</h5>
                <h5>Created by: {beer.contributed_by}</h5>
            </div>
        )
    })

    return (
        <div>
            <Link to="/">
                <img src="../assets/header.png" width="300px" alt="header banner"/>
            </Link>
            <div>
                {beersToRender}
            </div>
        </div>
    )
}