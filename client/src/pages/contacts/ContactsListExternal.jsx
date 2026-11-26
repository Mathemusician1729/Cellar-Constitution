import React from 'react';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const ContactsListInternal = () => {
    return (
       <div>
            <h2>Externals</h2>
            <ul>
                <li>McDonalds</li>
                <li>Walmart</li>
                <li>Food for Good</li>
            </ul>
        </div>
    )
}

export default ContactsListInternal
