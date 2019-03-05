import React from "react";
//Files
import { data } from "../resumeInfo";
class Slider extends React.Component {
  render() {
    console.log(data);
    return (
      <div>
        {data.images.map(ele => (
          <img src={require(`../assets/${ele.title}.png`)} alt="alt" />
        ))}
      </div>
    );
  }
}
export default Slider;
