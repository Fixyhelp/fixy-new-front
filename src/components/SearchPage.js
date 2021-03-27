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

import { blue, red, green } from "@material-ui/core/colors";
import GooglePlacesAutocomplete, { geocodeByAddress } from 'react-google-places-autocomplete';

const SearchPage = () => {

    const [queryDetails, queryDetailsSet] = useState(null);
    const [loca, setLoca] = useState(null);
    const [queryResult, queryResultSet] = useState(null);

    const getInfo = async () => {

        await fetch(`https://api.fixy.help/api/v1/${cookie.load('requested')}/`)
            .then(response => response.json())
            .then(data => {
                queryDetailsSet(data.payload.data);
            });
    }

    const getResult = async () => {

        await fetch(``)
            .then(res=> res.json())
            .then(data => {

            });
    }

    useEffect(() => {
        getInfo();
    });
    
    if(queryDetails == null){
        return "loading"
    }

    return (
        <>
            <div className="d-flex mn-h-1">
                <div className="w-100 p-5">
                    <h3 className="text-bold text-center mt-4" style={{fontFamily: "museomoderno"}}>Fixy</h3>
                    <div className="container mt-4 mb-4">
                        <InputGroup>
                            <InputGroupText>
                                <GooglePlacesAutocomplete
                                    apiKey="AIzaSyALbxSOuepEufVuCuZs9KksXWocvsCiIJA"
                                    selectProps={{
                                        loca,
                                        onChange: setLoca,
                                        styles: {
                                          input: (provided) => ({
                                            ...provided,
                                            color: 'blue',
                                            width: 100,
                                          }),
                                          option: (provided) => ({
                                            ...provided,
                                            color: 'grey',
                                          }),
                                          singleValue: (provided) => ({
                                            ...provided,
                                            color: 'blue',
                                          }),
                                        },
                                    }}
                                    
                                />
                            </InputGroupText>
                            <FormInput placeholder={queryDetails.query_string} />
                            <InputGroupAddon type="append">
                                <InputGroupText>
                                    <SearchIcon />
                                </InputGroupText>
                            </InputGroupAddon>
                        </InputGroup>
                    </div>
                    <p className="text-center">
                        <h5>Unique ID: "<p style={{color: green[500], display: "inline"}}>{queryDetails.unique_id}</p>"</h5>
                        <p>
                            {/* `A {queryDetails.unique_id_definition}` */}
                        </p>
                    </p>
                    <div>   
                        <div className="row text-left">
                            <div className="col-12 row">
                                <div className="col-2">
                                    <div className="m-1">
                                        <img height={60} width={60} className="border-0 rounded-circle" />
                                    </div>
                                </div>
                                <div className="col-8 text-left">
                                    <div className="ml-3">
                                        <p className="p-1 m-0">JeJe Empires</p>
                                        <h6 className="p-0 m-0">Malik</h6>
                                        <p className="p-0 m-0 mb-2 mt-2" style={{fontSize: 14}}>
                                            Description for Jeje Empires the best House of trendy cloths.
                                        </p>
                                        <a href="http://fashy.shop" style={{fontSize: 13, color: blue[200]}}>
                                            www.fashy.shop
                                        </a>
                                        <p>
                                            Remote
                                        </p>
                                    </div>
                                </div>
                                <div className="col-2">
                                    <Button theme="success" size="sm" className="m-1"><WhatsApp /></Button>
                                    <Button theme="info" size="sm" className="m-1"><Phone /></Button>
                                    <a style={{fontSize: 13}}>Ikorodu,Lagos</a>
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