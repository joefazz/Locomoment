'use strict';

var Block = require("bs-platform/lib/js/block.js");
var Curry = require("bs-platform/lib/js/curry.js");
var ReasonReact = require("reason-react/lib/js/src/ReasonReact.js");
var Js_primitive = require("bs-platform/lib/js/js_primitive.js");
var Text$BsReactNative = require("bs-react-native/lib/js/src/components/text.js");
var View$BsReactNative = require("bs-react-native/lib/js/src/components/view.js");
var Style$BsReactNative = require("bs-react-native/lib/js/src/style.js");
var Platform$BsReactNative = require("bs-react-native/lib/js/src/platform.js");
var SafeAreaView$BsReactNative = require("bs-react-native/lib/js/src/components/safeAreaView.js");

var isAndroid = Platform$BsReactNative.equals(/* Android */0);

var container = Style$BsReactNative.style(/* :: */[
      Style$BsReactNative.flex(1.0),
      /* :: */[
        Style$BsReactNative.alignItems(/* Center */2),
        /* :: */[
          Style$BsReactNative.justifyContent(/* SpaceBetween */5),
          /* :: */[
            Style$BsReactNative.backgroundColor(/* String */Block.__(0, ["#3f51b5"])),
            /* :: */[
              Style$BsReactNative.paddingTop(isAndroid ? /* Pt */Block.__(0, [30.0]) : /* Pt */Block.__(0, [0.0])),
              /* :: */[
                Style$BsReactNative.paddingBottom(/* Pt */Block.__(0, [10.0])),
                /* [] */0
              ]
            ]
          ]
        ]
      ]
    ]);

var searchContainer = Style$BsReactNative.style(/* :: */[
      Style$BsReactNative.width(/* Pct */Block.__(1, [95.0])),
      /* :: */[
        Style$BsReactNative.paddingHorizontal(/* Pt */Block.__(0, [5.0])),
        /* :: */[
          Style$BsReactNative.paddingVertical(/* Pt */Block.__(0, [10.0])),
          /* :: */[
            Style$BsReactNative.borderWidth(0.7),
            /* :: */[
              Style$BsReactNative.borderColor(/* String */Block.__(0, ["white"])),
              /* :: */[
                Style$BsReactNative.borderRadius(3.0),
                /* [] */0
              ]
            ]
          ]
        ]
      ]
    ]);

var searchText = Style$BsReactNative.style(/* :: */[
      Style$BsReactNative.color(/* String */Block.__(0, ["white"])),
      /* [] */0
    ]);

var Styles = /* module */[
  /* container */container,
  /* searchContainer */searchContainer,
  /* searchText */searchText
];

var component = ReasonReact.statelessComponent("Main");

function make() {
  return /* record */[
          /* debugName */component[/* debugName */0],
          /* reactClassInternal */component[/* reactClassInternal */1],
          /* handedOffState */component[/* handedOffState */2],
          /* willReceiveProps */component[/* willReceiveProps */3],
          /* didMount */component[/* didMount */4],
          /* didUpdate */component[/* didUpdate */5],
          /* willUnmount */component[/* willUnmount */6],
          /* willUpdate */component[/* willUpdate */7],
          /* shouldUpdate */component[/* shouldUpdate */8],
          /* render */(function () {
              return ReasonReact.element(undefined, undefined, Curry.app(SafeAreaView$BsReactNative.make, [
                              undefined,
                              undefined,
                              undefined,
                              undefined,
                              undefined,
                              undefined,
                              undefined,
                              undefined,
                              undefined,
                              Js_primitive.some(container),
                              undefined,
                              undefined,
                              undefined,
                              undefined,
                              undefined,
                              undefined,
                              undefined,
                              undefined,
                              undefined,
                              undefined,
                              /* array */[
                                ReasonReact.element(undefined, undefined, Text$BsReactNative.make(undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, "Reason works, fingers about hot reloading", /* array */[])),
                                ReasonReact.element(undefined, undefined, View$BsReactNative.make(undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, Js_primitive.some(searchContainer), undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined)(/* array */[ReasonReact.element(undefined, undefined, Text$BsReactNative.make(undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, Js_primitive.some(searchText), undefined, undefined, undefined, undefined, undefined, undefined, "Enter your destination", /* array */[]))]))
                              ]
                            ]));
            }),
          /* initialState */component[/* initialState */10],
          /* retainedProps */component[/* retainedProps */11],
          /* reducer */component[/* reducer */12],
          /* jsElementWrapped */component[/* jsElementWrapped */13]
        ];
}

var Main = /* module */[
  /* component */component,
  /* make */make
];

function app() {
  return ReasonReact.element(undefined, undefined, make(/* array */[]));
}

exports.isAndroid = isAndroid;
exports.Styles = Styles;
exports.Main = Main;
exports.app = app;
/* isAndroid Not a pure module */
