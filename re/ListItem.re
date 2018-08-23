open BsReactNative;

let styles =
  Style.{
    "heading":
      style([
        color(String("white")),
        fontSize(Float(42.0)),
        fontWeight(`Bold),
      ]),
    "subHeading":
      style([
        color(String("white")),
        fontWeight(`_100),
        fontSize(Float(22.0)),
      ]),
  };
let component = ReasonReact.statelessComponent("ListItem");

let make = (~title, ~subtitle, _children) => {
  ...component,
  render: _self =>
    <>
      <Text style=styles##heading value=title />
      <Text style=styles##subHeading value=subtitle />
    </>,
};