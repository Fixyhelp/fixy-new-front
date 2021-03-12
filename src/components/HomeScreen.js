import React, { useState, useEffect } from "react";
import cookie from 'react-cookies';
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

const HomeScreen = () => {

    const darkMode = 'isDarkMode';
    const [modals, modalSet] = useState({open: false});
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggle = () => {
        modalSet({
          open: !modals.open
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
                                    onChange={() => {
                                        handleDarkModeToggle();
                                    }}>
                                    Enable Dark Mode
                                </FormCheckbox>
                            </p>
                        </p>
                    </ModalBody>
                </Modal>
                <h3 className="text-bold">Fixy</h3>
                <div className="container mt-5 w-sm-100">
                    <InputGroup>
                        <FormInput placeholder="What do you need ?" />
                        <InputGroupAddon type="append">
                            <InputGroupText>
                                <SearchIcon />
                            </InputGroupText>
                        </InputGroupAddon>
                    </InputGroup>
                </div>
            </div>
        </div>
    )
}

export default HomeScreen;