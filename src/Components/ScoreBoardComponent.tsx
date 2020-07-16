import React from "react";
import { Box } from "@material-ui/core";


interface MyProps {
  score:Number;
  player:String;
}
interface MyState {
    
}

export class ScoreBoardComponent extends React.Component <MyProps,MyState> {
    constructor(props: MyProps) {
      super(props);
  
      this.state = {
      };
    }
    render() {
      return(
        <Box border={1} borderRadius="borderRadius" fontSize = "25px" color="primary.main" width={1/4}>
           {this.props.player} score: {Number(this.props.score)} </Box>
      );
    }
  }
  export default ScoreBoardComponent;