open BsReactNative;
let isAndroid = Platform.equals(Platform.Android);

module Styles = {
  open Style;
  let container =
    style([
      flex(1.0),
      alignItems(Stretch),
      justifyContent(SpaceBetween),
      backgroundColor(String("#3f51b5")),
      paddingTop(isAndroid ? Pt(30.0) : Pt(0.0)),
      paddingHorizontal(Pt(8.0)),
      paddingBottom(Pt(10.0)),
    ]);

  let searchContainer =
    style([
      alignSelf(Stretch),
      paddingHorizontal(Pt(5.0)),
      paddingVertical(Pt(10.0)),
      borderWidth(0.7),
      borderColor(String("white")),
      borderRadius(3.0),
    ]);

  let searchText = style([color(String("white")), fontSize(Float(16.0))]);

  let mainContent = style([flexGrow(1.0)]);
  let heading =
    style([
      color(String("white")),
      fontSize(Float(42.0)),
      fontWeight(`Bold),
    ]);

  let subHeading =
    style([
      color(String("white")),
      fontWeight(`_100),
      fontSize(Float(22.0)),
    ]);
};

module Main = {
  let component = ReasonReact.statelessComponent("Main");

  type dataStruct = {
    id: int,
    title: string,
    subtitle: string,
  };

  type listData = array(dataStruct);
  let dataKeyExtractor = (item, _index) => string_of_int(item.id);

  let renderListItem =
    FlatList.renderItem((data: FlatList.renderBag(dataStruct)) =>
      <ListItem title={data.item.title} subtitle={data.item.subtitle} />
    );

  let make = _children => {
    ...component,
    render: _self =>
      <SafeAreaView style=Styles.container>
        <View style=Styles.searchContainer>
          <TextInput
            style=Styles.searchText
            placeholder="Enter your destination"
            underlineColorAndroid="transparent"
          />
        </View>
        <View style=Styles.mainContent>
          <FlatList
            keyExtractor=dataKeyExtractor
            data=[|
              {id: 0, title: "Spoonfed", subtitle: "spoon me"},
              {
                id: 1,
                title: "RDG -> LDN",
                subtitle: "Arrive at 3.40, Platform 4",
              },
            |]
            renderItem=renderListItem
          />
        </View>
      </SafeAreaView>,
  };
};

let app = () => <Main />;