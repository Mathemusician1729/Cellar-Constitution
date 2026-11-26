import React from 'react';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const ContactsListInternal = () => {
    return (
	   <div>
            <h2>Team</h2>
            <ul>
                <li>Lena</li>
                <li>Matthew</li>
                <li>Celeste</li>
            </ul>
        </div>
    )
}

export default ContactsListInternal
