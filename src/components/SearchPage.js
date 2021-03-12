import React, { useState, useEffect } from "react";
import cookie from 'react-cookies';
import { 
    Card,
    CardBody,
    InputGroupAddon,
    InputGroupText,
    FormInput,
    InputGroup,
    Button
} from "shards-react";

import NotFound from "@material-ui/icons/Error";
import SearchIcon from "@material-ui/icons/Search";
import LocationCity from "@material-ui/icons/LocationCity";
import WhatsApp from "@material-ui/icons/WhatsApp";
import Phone from "@material-ui/icons/Phone";

import { blue, red } from "@material-ui/core/colors";

const SearchPage = () => {

    return (
        <>
            <div className="d-flex mn-h-1">
                <div className="w-100 p-5">
                    <h3 className="text-bold text-center mt-4">Fixy</h3>
                    <div className="container mt-4 mb-4">
                        <InputGroup>
                            <InputGroupText>
                                <LocationCity />
                            </InputGroupText>
                            <FormInput placeholder="What do you need ?" />
                            <InputGroupAddon type="append">
                                <InputGroupText>
                                    <SearchIcon />
                                </InputGroupText>
                            </InputGroupAddon>
                        </InputGroup>
                    </div>
                    <p className="text-center">
                        <h5>"Jackobian"</h5>
                        <p>
                            `A Jackobian`
                        </p>
                    </p>
                    <div>   
                        <div className="row text-left">
                            <div className="col-12 row">
                                <div className="col-4">
                                    <div className="m-1">
                                        NONE
                                    </div>
                                    <Button theme="success" className="m-1"><WhatsApp /></Button>
                                    <Button theme="info" className="m-1"><Phone /></Button>
                                </div>
                                <div className="col-8">
                                    <p className="p-1 m-0">JeJe Empires</p>
                                    <h6 className="p-0 m-0">Malik</h6>
                                    <p className="p-0 m-0 mb-2 mt-2" style={{fontSize: 14}}>
                                        Description for Jeje Empires the best House of trendy cloths.
                                    </p>
                                    <a href="http://fashy.shop" style={{fontSize: 13, color: blue[200]}}>
                                        www.fashy.shop
                                    </a>
                                    <p style={{fontSize: 15}}>Remote:  Lagos</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SearchPage;