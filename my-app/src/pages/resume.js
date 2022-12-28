import React from 'react';
import './resume.css';

const LINK_URL = "http://drive.google.com/file/d/13AED2lSjmTeHrgTqldp0KrED9i4lQb-H/view?usp=sharing"

export default function Resume() {
    return(
        <object data={LINK_URL} type='application/pdf' width='100%' height='100%'></object>
        );
}


