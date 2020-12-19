import React from 'react';
import styled from 'styled-components';
import {PlaylistCardStyled, ButtonTypeOne, ButtonTypeTwo, ButtonsDiv} from "./styles"

const PlaylistCard = (props) => {
    return (
        <PlaylistCardStyled>
            <h4>{props.name}</h4>
            <ButtonsDiv>
                <ButtonTypeTwo onClick ={() => props.changePage("specifics", props.id)}> Abrir Playlist</ButtonTypeTwo>
                <ButtonTypeTwo onClick = {() => props.deletePlaylists(props.id)}>Deletar Playlist</ButtonTypeTwo>
            </ButtonsDiv>
        </PlaylistCardStyled>
    )
}

export default PlaylistCard;