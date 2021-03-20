import React, { useState, useEffect } from "react";
import cookie from 'react-cookies';
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
import { 
    InputGroup,
    InputGroupText,
    InputGroupAddon,
    FormInput,
    Button,
    Modal,
    ModalHeader,
    ModalFooter,
    ModalBody,
    FormCheckbox
} from "shards-react";

import SettingsIcon from "@material-ui/icons/Settings";
import SearchIcon from "@material-ui/icons/Search";
import CloseIcon from "@material-ui/icons/Close";
import { blue, grey } from "@material-ui/core/colors";

const HomeScreen = () => {

    const darkMode = 'isDarkMode';
    const [modals, modalSet] = useState({open: false});
    const [locModals, locModalSet] = useState({open: false});
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [queryStr, setQueryStr] = useState("");
    const [loca, setLoca] = useState(null);

    const toggle = () => {
        modalSet({
          open: !modals.open
        });
    }

    const toggleLoc = () => {
        locModalSet({
          open: !locModals.open
        });
    }

    const addCookieForDarkMode = () => {
        if (cookie.load(darkMode) && cookie.save(darkMode) == true) {
            cookie.save(darkMode, true);
            setIsDarkMode(true);
        }else{
            cookie.save(darkMode, false);
        }
    }

    useEffect(() => {
        addCookieForDarkMode();
    }, []);

    const handleDarkModeToggle = () => {

        if (isDarkMode) {
            cookie.save(darkMode, false);
            setIsDarkMode(false);
        }else{
            // console.log(false);
            setIsDarkMode(true);
            cookie.save(darkMode, true);
        }
    }

    const handleSubmit = () =>{
        toggleLoc();
    }

    return (
        <div className="text-center mn-h-1">
            <div className="container mn-h-1 mx-auto my-5">
                <div className="container text-right pt-1 pb-4">
                    <SettingsIcon onClick={
                        (e) => {
                            toggle();
                        }
                    } />
                </div>
                <Modal size="sm" style={{ height: 30 }} open={modals.open} toggle={() => {modalSet({open: true})}}>
                    <ModalHeader>
                        <p className="text-left">
                            <CloseIcon onClick={() => {modalSet({open: false})}} />
                        </p>
                        <h5>Persona</h5>
                    </ModalHeader>
                    <ModalBody>
                        <h3>👋 Hello there!</h3>
                        <p>Let's personalise your settings.</p>
                        <p>
                            <h6 className="text-left">Settings</h6>
                            <p>
                                <FormCheckbox
                                    toggle
                                    checked={isDarkMode}
                                    onChange={(e) => {
                                        handleDarkModeToggle();
                                    }}>
                                    Enable Dark Mode
                                </FormCheckbox>
                            </p>
                        </p>
                    </ModalBody>
                </Modal>
                <Modal size="md" style={{ height: 30 }} centered={true} open={locModals.open} toggle={() => {locModalSet({open: true})}}>
                    <ModalBody className="p-2">
                        <h6 className="d-inline" style={{fontSize: 12}}>Select a prefered Location?</h6>
                        <div className="d-inline ml-5">
                            <a style={{fontSize: 10, marginRight: 6, color: grey[500], cursor: "pointer"}}>No</a>
                            <a 
                                style={{color: blue[300], fontSize: 10, cursor: "pointer"}}
                                onClick={() => {
                                    document.getElementById('vib').style.display = "block";
                                }}
                                >Yes</a>
                        </div>
                        
                        <div style={{display: "none", marginTop: 10}} id="vib">
                            <InputGroup size="lg">
                                <GooglePlacesAutocomplete
                                    apiKey="AIzaSyALbxSOuepEufVuCuZs9KksXWocvsCiIJA"
                                    selectProps={{
                                        loca,
                                        onChange: setLoca,
                                    }}
                                />
                                <Button theme="light" size="sm" onClick={() => {

                                }}
                                >Done</Button>
                            </InputGroup>
                        </div>
                    </ModalBody>
                </Modal>
                <h3 className="text-bold">Fixy</h3>
                <div className="container mt-5 w-sm-100">
                    <InputGroup>
                        <FormInput placeholder="What do you need ?" onChange={(e) => {
                            setQueryStr(e.target.value);
                        }} onKeyUp={(e) => {
                            if(e.keyCode === 13){
                                handleSubmit();
                            }
                        }}/>
                        <InputGroupAddon type="append">
                            <InputGroupText>
                                <SearchIcon onClick={() => {
                                    handleSubmit();
                                }}/>
                            </InputGroupText>
                        </InputGroupAddon>
                    </InputGroup>
                </div>
            </div>
        </div>
    )
}

export default HomeScreen;