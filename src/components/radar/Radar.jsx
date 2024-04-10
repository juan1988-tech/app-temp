import React from "react";
import '../../styles/components/radar.css'; 

const Radar = () =>{
// const position = {lat: 61.2176, lng: -149.8997};

    return(
        <React.Fragment>
        <h4 className="radar-first-title">Radar</h4>
        <iframe className="radar-google-map" 
            id="radar"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d254508.39472384987!2d-74.27262085356604!3d4.648620635328092!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9bfd2da6cb29%3A0x239d635520a33914!2zQm9nb3TDoQ!5e0!3m2!1ses-419!2sco!4v1712707312026!5m2!1ses-419!2sco"
            style={{ border: "0" }}
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade">
        </iframe>
        </React.Fragment>
    )
}

export default Radar;