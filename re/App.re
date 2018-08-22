open BsReactNative;

let isAndroid = Platform.equals(Platform.Android);

module Styles = {
  let container =
    Style.(
      style([
        flex(1.0),
        alignItems(Center),
        justifyContent(SpaceBetween),
        backgroundColor(String("#3f51b5")),
        paddingTop(isAndroid ? Pt(30.0) : Pt(0.0)),
        paddingBottom(Pt(10.0)),
      ])
    );

  let searchContainer =
    Style.(
      style([
        width(Pct(95.0)),
        paddingHorizontal(Pt(5.0)),
        paddingVertical(Pt(10.0)),
        borderWidth(0.7),
        borderColor(String("white")),
        borderRadius(3.0),
      ])
    );

  let searchText = Style.(style([color(String("white"))]));
};

module Main = {
  let component = ReasonReact.statelessComponent("Main");

  let make = _children => {
    ...component,
    render: _self =>
      <SafeAreaView style=Styles.container>
        <Text value="Reason works, fingers about hot reloading" />
        <View style=Styles.searchContainer>
          <Text style=Styles.searchText value="Enter your destination" />
        </View>
      </SafeAreaView>,
  };
};

let app = () => <Main />;