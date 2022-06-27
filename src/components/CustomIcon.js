import React, {createElement } from "react";
import * as MuiIcons from  '@mui/icons-material';
  
  const  CustomIcon=(props)=>{
    return (
        createElement(MuiIcons[props.iconName],{style:{...props.styling}, className:props.className})
    )
  }

  export default CustomIcon;