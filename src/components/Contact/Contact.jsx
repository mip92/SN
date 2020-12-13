import React from 'react';
import s from './Contact.module.css';
import facebook from "../../asets/social_icons/Social Icons by Dreamstale (6).png";
import website from "../../asets/social_icons/Social Icons by Dreamstale (1).png";
import vk from "../../asets/social_icons/vk.png"
import twitter from "../../asets/social_icons/Social Icons by Dreamstale (5).png";
import instagram from "../../asets/social_icons/Social Icons by Dreamstale (33).png";
import youtube from "../../asets/social_icons/Social Icons by Dreamstale (35).png";
import github from "../../asets/social_icons/25231.svg";

const Contact =({contactTitle, value})=>{
    let src
    if (contactTitle=='facebook') src=facebook
    else if(contactTitle=='website') src=website
    else if(contactTitle=='vk') src=vk
    else if(contactTitle=='twitter') src=twitter
    else if(contactTitle=='instagram') src=instagram
    else if(contactTitle=='youtube') src=youtube
    else if(contactTitle=='github') src=github
    return (<span>{contactTitle  ? <a href={`http://` + `${value}`}><img src={src}/></a> : ''}</span>
    )
}

export default Contact;