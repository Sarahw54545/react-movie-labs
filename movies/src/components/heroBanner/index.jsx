import React, { useState } from "react";
import Container from '@mui/material/Container';

const heroBanner = ({ title }) => {

    return (
        <>
            <Container sx={
                {
                    backgroundColor: "red",
                    display: "flex",
                    justifyContent: "space-around",
                    marginBottom: 1.5,
                    textAlign: "center",
                }
            }>
                <h1>{title}</h1>
            </Container>
        </>
    );
};

export default heroBanner;