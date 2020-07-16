import React from "react";
import { ScoreBoardComponent } from "./ScoreBoardComponent";
import CardComponent from "./CardComponent";
import {Player} from "../Entities/Player";

interface MyProps {
  player: Player;
}

interface MyState {
    player: Player;
}
class PlayerComponent extends React.Component<MyProps, MyState> {
  constructor(props: MyProps) {
    super(props);

    this.state = {
        player: props.player
    };

  }
  render() {
    return (
      <div>
        <ScoreBoardComponent
          score={this.props.player.getScore()}
          player={this.props.player.getTypePlyer()}
        />
        {
          this.state.player.getCards().map((card) => <CardComponent card={card}/> )
        }
      </div>
    );
  }
}
export default PlayerComponent;
