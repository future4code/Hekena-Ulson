import React from 'react';
import styled from 'styled-components';

export const Tracks = (props) => {
    return (
        <div> 
            <div>
                <p>{props.trackName} - </p>
                <p>{props.artist}</p>
                <button onClick={() => props.deleteTracks(props.trackId)}>X</button>
            </div>
            <audio controls="controls"> 
                <source src={props.url} type="audio/ogg" />
            </audio>
        </div>
)};
