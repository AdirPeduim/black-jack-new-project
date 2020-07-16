import { Box } from "@material-ui/core";
import React from "react";

interface MyProps {
   winner:String;
}
interface MyState {
    
}

export class WinnerComponent extends React.Component <MyProps,MyState> {
  constructor(props: MyProps) {
    super(props);

  }

  render() {
    if (this.props.winner == "" )
    {
        return(<div> </div> )
    }else{
        return(
            <Box border={1} fontWeight="fontWeightBold" borderRadius="15%" fontSize = "25px" color="primary.main" width={1/8}>
            winnr: +{this.props.winner} </Box>
    );
    }
    
  }
}
export default WinnerComponent;