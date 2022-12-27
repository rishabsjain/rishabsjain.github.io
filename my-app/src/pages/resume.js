import React from 'react';


export default function Resume() {
    return(
        <React.Fragment>
        <head>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossorigin="anonymous"/>
            <link rel="stylesheet" href="./styles.css"/>
        </head>
        <body>
            <div class="graph-outline">
                <object data="resume.pdf?#zoom=85&scrollbar=0&toolbar=0&navpanes=0" type="application/pdf">
                <embed src="resume.pdf?#zoom=85&scrollbar=0&toolbar=0&navpanes=0" type="application/pdf" />
                </object>
            </div>   
        </body>
        </React.Fragment>
        );
}
