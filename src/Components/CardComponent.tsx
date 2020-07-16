import { Card, CardMedia, withStyles } from "@material-ui/core";
import React from "react";
import {CardEntity} from "../Entities/CardEntity";

interface MyProps {
    classes: any;
    card: CardEntity;
}
interface MyState {
    card: CardEntity;
}

const styles = {
  card: {
    height: '40px',
    width: '30px',
  },
  media: {
    height: 'inherit',
    width: 'inherit',
  }
};

class CardComponent extends React.Component <MyProps,MyState> {
  constructor(props: MyProps) {
    super(props);

    this.state = {
      card: props.card
    };
  }

  render() {
    return(
        <Card className={this.props.classes.card}>
          <CardMedia
            className={this.props.classes.media}
            image={'/src/images/cards/2_of_clubs.png'}
          />
        </Card>
    );
  }
}
export default withStyles(styles)(CardComponent);
