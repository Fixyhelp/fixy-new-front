import React, { useState, useEffect } from "react";
import cookie from 'react-cookies';
import { 
    Card,
    CardBody,
    InputGroupAddon,
    InputGroupText,
    FormInput,
    InputGroup
} from "shards-react";

import NotFound from "@material-ui/icons/Error";
import SearchIcon from "@material-ui/icons/Search";
import { red } from "@material-ui/core/colors";
import GooglePlacesAutocomplete, { geocodeByAddress } from 'react-google-places-autocomplete';


const SearchNotFound = () => {

    const [loca, setLoca] = useState(null);
    const [queryDetails, queryDetailsSet] = useState(null);

    const getInfo = async () => {

        await fetch(`https://api.fixy.help/api/v1/${cookie.load('requested')}/`)
            .then(response => response.json())
            .then(data => {
                queryDetailsSet(data.payload.data);
            });
    }

    useEffect(() => {
        getInfo();
    });

    return (
        <>
            <div className="d-flex mn-h-1">
                <div className="mx-auto">
                    <h3 className="text-bold text-center mt-4" style={{fontFamily: "museomoderno"}}>Fixy</h3>
                    <div className="container mt-4 mb-5">
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
                    <div className="text-center m-5">

                        <p>
                            Your Search - <b>{queryDetails.query_string}</b> <br /> did not match any vendor.
                        </p>
                        <h4 className="mt-2 text-left">Suggestions for you</h4>
                        <ul>
                            <li>
                                Make sure that all keywords are spelled correctly.
                            </li>
                            <li>
                                Try a diffrent keyword.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SearchNotFound;