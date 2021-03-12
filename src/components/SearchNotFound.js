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

const SearchNotFound = () => {

    return (
        <>
            <div className="d-flex mn-h-1">
                <div className="mx-auto">
                    <h3 className="text-bold text-center mt-4">Fixy</h3>
                    <div className="container mt-4 mb-5">
                        <InputGroup>
                            <FormInput placeholder="Search Not Found. What do you need ?" />
                            <InputGroupAddon type="append">
                                <InputGroupText>
                                    <SearchIcon />
                                </InputGroupText>
                            </InputGroupAddon>
                        </InputGroup>
                    </div>
                    <p>
                        Your Search - <b>QWeretrtete</b> - did not match any vendor.
                    </p>
                    <h4 className="mt-5 text-center">Suggestions for you</h4>
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
        </>
    )
}

export default SearchNotFound;