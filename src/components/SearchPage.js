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
    const [loca, setLoca] = useState([]);
    const [queryResult, queryResultSet] = useState(null);

    const getResult = async () => {

        // console.log(queryDetails.prefered_location, queryDetails.tags);

        await fetch(`https://api.fixy.help/api/v1/query?location=abeokuta,ogun state.&tags=${queryDetails.tags}/`)
            .then(res=> res.json())
            .then(data => {
                console.log(data);
                setLoca(data.payload.data)
            });
    }

    const getInfo = async () => {

        await fetch(`https://api.fixy.help/api/v1/${cookie.load('requested')}/`)
            .then(response => response.json())
            .then(data => {
                queryDetailsSet(data.payload.data);
                // console.log(queryDetails.tags);
                getResult();
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
            <div className="">
                <div className="w-100 p-1">
                    <h3 className="text-bold text-center mt-4" style={{fontFamily: "museomoderno"}}>Fixy</h3>
                    <p className="text-center">
                        <h5>Search ID: "<p style={{color: green[500], display: "inline", marginTop: 2}}>{queryDetails.unique_id}</p>"</h5>
                        <p>
                            {/* `A {queryDetails.unique_id_definition}` */}
                        </p>
                    </p>
                    <div>
                        {
                            loca.map((value, index) => {
                                return (
                                    <div className="row text-left">
                                    <div className="col-12 row m-0 p-0">
                                        <div className="col-2">
                                            <div className="m-1">
                                                <img height={60} width={60} className="border-0 rounded-circle" />
                                            </div>
                                        </div>
                                        <div className="col-6 text-left">
                                            <div className="ml-3">
                                                <p className="p-1 m-0">{value.business_name}</p>
                                                <h6 className="p-0 m-0">{value.business_address}</h6>
                                                <p className="p-0 m-0 mb-2 mt-2" style={{fontSize: 14}}>
                                                    {value.business_description}
                                                </p>
                                                <a href={value.websites} style={{fontSize: 13, color: blue[200]}}>
                                                    {value.websites}
                                                </a>
                                                <p>
                                                    {value.business_address}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="col-2">
                                            <Button theme="success" size="sm" className="m-1"><WhatsApp /></Button>
                                            <Button theme="info" size="sm" className="m-1"><Phone /></Button>
                                            <a style={{fontSize: 13}}>{value.location}</a>
                                        </div>
                                    </div>
                                </div>
                                )
                            })
                        }
                    </div>
                    </div>
            </div>
        </>
    )
}

export default SearchPage;