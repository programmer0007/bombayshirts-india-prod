(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __esm = (fn, res) => function __init() {
    return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
  };
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));
  var __async = (__this, __arguments, generator) => {
    return new Promise((resolve, reject) => {
      var fulfilled = (value) => {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      };
      var rejected = (value) => {
        try {
          step(generator.throw(value));
        } catch (e) {
          reject(e);
        }
      };
      var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
      step((generator = generator.apply(__this, __arguments)).next());
    });
  };

  // node_modules/@remote-ui/core/build/esm/component.mjs
  function createRemoteComponent(componentType) {
    return componentType;
  }
  var init_component = __esm({
    "node_modules/@remote-ui/core/build/esm/component.mjs"() {
    }
  });

  // node_modules/@remote-ui/core/build/esm/index.mjs
  var init_esm = __esm({
    "node_modules/@remote-ui/core/build/esm/index.mjs"() {
      init_component();
    }
  });

  // node_modules/@remote-ui/core/index.mjs
  var init_core = __esm({
    "node_modules/@remote-ui/core/index.mjs"() {
      init_esm();
    }
  });

  // node_modules/@shopify/post-purchase-ui-extensions/build/esm/components/BlockStack/BlockStack.mjs
  var BlockStack;
  var init_BlockStack = __esm({
    "node_modules/@shopify/post-purchase-ui-extensions/build/esm/components/BlockStack/BlockStack.mjs"() {
      init_core();
      BlockStack = createRemoteComponent("BlockStack");
    }
  });

  // node_modules/@shopify/post-purchase-ui-extensions/build/esm/components/BlockStack/index.mjs
  var init_BlockStack2 = __esm({
    "node_modules/@shopify/post-purchase-ui-extensions/build/esm/components/BlockStack/index.mjs"() {
      init_BlockStack();
    }
  });

  // node_modules/@shopify/post-purchase-ui-extensions/build/esm/components/Button/Button.mjs
  var Button;
  var init_Button = __esm({
    "node_modules/@shopify/post-purchase-ui-extensions/build/esm/components/Button/Button.mjs"() {
      init_core();
      Button = createRemoteComponent("Button");
    }
  });

  // node_modules/@shopify/post-purchase-ui-extensions/build/esm/components/Button/index.mjs
  var init_Button2 = __esm({
    "node_modules/@shopify/post-purchase-ui-extensions/build/esm/components/Button/index.mjs"() {
      init_Button();
    }
  });

  // node_modules/@shopify/post-purchase-ui-extensions/build/esm/components/CalloutBanner/CalloutBanner.mjs
  var CalloutBanner;
  var init_CalloutBanner = __esm({
    "node_modules/@shopify/post-purchase-ui-extensions/build/esm/components/CalloutBanner/CalloutBanner.mjs"() {
      init_core();
      CalloutBanner = createRemoteComponent("CalloutBanner");
    }
  });

  // node_modules/@shopify/post-purchase-ui-extensions/build/esm/components/CalloutBanner/index.mjs
  var init_CalloutBanner2 = __esm({
    "node_modules/@shopify/post-purchase-ui-extensions/build/esm/components/CalloutBanner/index.mjs"() {
      init_CalloutBanner();
    }
  });

  // node_modules/@shopify/post-purchase-ui-extensions/build/esm/components/Heading/Heading.mjs
  var Heading;
  var init_Heading = __esm({
    "node_modules/@shopify/post-purchase-ui-extensions/build/esm/components/Heading/Heading.mjs"() {
      init_core();
      Heading = createRemoteComponent("Heading");
    }
  });

  // node_modules/@shopify/post-purchase-ui-extensions/build/esm/components/Heading/index.mjs
  var init_Heading2 = __esm({
    "node_modules/@shopify/post-purchase-ui-extensions/build/esm/components/Heading/index.mjs"() {
      init_Heading();
    }
  });

  // node_modules/@shopify/post-purchase-ui-extensions/build/esm/components/Image/Image.mjs
  var Image;
  var init_Image = __esm({
    "node_modules/@shopify/post-purchase-ui-extensions/build/esm/components/Image/Image.mjs"() {
      init_core();
      Image = createRemoteComponent("Image");
    }
  });

  // node_modules/@shopify/post-purchase-ui-extensions/build/esm/components/Image/index.mjs
  var init_Image2 = __esm({
    "node_modules/@shopify/post-purchase-ui-extensions/build/esm/components/Image/index.mjs"() {
      init_Image();
    }
  });

  // node_modules/@shopify/post-purchase-ui-extensions/build/esm/components/Layout/Layout.mjs
  var Layout;
  var init_Layout = __esm({
    "node_modules/@shopify/post-purchase-ui-extensions/build/esm/components/Layout/Layout.mjs"() {
      init_core();
      Layout = createRemoteComponent("Layout");
    }
  });

  // node_modules/@shopify/post-purchase-ui-extensions/build/esm/components/Layout/index.mjs
  var init_Layout2 = __esm({
    "node_modules/@shopify/post-purchase-ui-extensions/build/esm/components/Layout/index.mjs"() {
      init_Layout();
    }
  });

  // node_modules/@shopify/post-purchase-ui-extensions/build/esm/components/TextBlock/TextBlock.mjs
  var TextBlock;
  var init_TextBlock = __esm({
    "node_modules/@shopify/post-purchase-ui-extensions/build/esm/components/TextBlock/TextBlock.mjs"() {
      init_core();
      TextBlock = createRemoteComponent("TextBlock");
    }
  });

  // node_modules/@shopify/post-purchase-ui-extensions/build/esm/components/TextBlock/index.mjs
  var init_TextBlock2 = __esm({
    "node_modules/@shopify/post-purchase-ui-extensions/build/esm/components/TextBlock/index.mjs"() {
      init_TextBlock();
    }
  });

  // node_modules/@shopify/post-purchase-ui-extensions/build/esm/components/TextContainer/TextContainer.mjs
  var TextContainer;
  var init_TextContainer = __esm({
    "node_modules/@shopify/post-purchase-ui-extensions/build/esm/components/TextContainer/TextContainer.mjs"() {
      init_core();
      TextContainer = createRemoteComponent("TextContainer");
    }
  });

  // node_modules/@shopify/post-purchase-ui-extensions/build/esm/components/TextContainer/index.mjs
  var init_TextContainer2 = __esm({
    "node_modules/@shopify/post-purchase-ui-extensions/build/esm/components/TextContainer/index.mjs"() {
      init_TextContainer();
    }
  });

  // node_modules/@shopify/post-purchase-ui-extensions/build/esm/components/View/View.mjs
  var View;
  var init_View = __esm({
    "node_modules/@shopify/post-purchase-ui-extensions/build/esm/components/View/View.mjs"() {
      init_core();
      View = createRemoteComponent("View");
    }
  });

  // node_modules/@shopify/post-purchase-ui-extensions/build/esm/components/View/index.mjs
  var init_View2 = __esm({
    "node_modules/@shopify/post-purchase-ui-extensions/build/esm/components/View/index.mjs"() {
      init_View();
    }
  });

  // node_modules/@shopify/post-purchase-ui-extensions/build/esm/components/index.mjs
  var init_components = __esm({
    "node_modules/@shopify/post-purchase-ui-extensions/build/esm/components/index.mjs"() {
      init_BlockStack2();
      init_Button2();
      init_CalloutBanner2();
      init_Heading2();
      init_Image2();
      init_Layout2();
      init_TextBlock2();
      init_TextContainer2();
      init_View2();
    }
  });

  // node_modules/@shopify/post-purchase-ui-extensions/build/esm/extend.mjs
  var extend;
  var init_extend = __esm({
    "node_modules/@shopify/post-purchase-ui-extensions/build/esm/extend.mjs"() {
      extend = function extend2() {
        var _self$shopify;
        return (_self$shopify = self.shopify).extend.apply(_self$shopify, arguments);
      };
    }
  });

  // node_modules/@shopify/post-purchase-ui-extensions/build/esm/index.mjs
  var init_esm2 = __esm({
    "node_modules/@shopify/post-purchase-ui-extensions/build/esm/index.mjs"() {
      init_components();
      init_extend();
    }
  });

  // node_modules/@shopify/post-purchase-ui-extensions/index.mjs
  var init_post_purchase_ui_extensions = __esm({
    "node_modules/@shopify/post-purchase-ui-extensions/index.mjs"() {
      init_esm2();
    }
  });

  // extensions/post-purchase-ui/src/index.js
  var require_src = __commonJS({
    "extensions/post-purchase-ui/src/index.js"(exports) {
      init_post_purchase_ui_extensions();
      extend("Checkout::PostPurchase::ShouldRender", (_0) => __async(exports, [_0], function* ({ storage }) {
        const initialState = yield getRenderData();
        const render = true;
        if (render) {
          yield storage.update(initialState);
        }
        return {
          render
        };
      }));
      function getRenderData() {
        return __async(this, null, function* () {
          return {
            couldBe: "anything"
          };
        });
      }
      extend(
        "Checkout::PostPurchase::Render",
        (root, { extensionPoint, storage }) => {
          const initialState = storage.initialData;
          root.appendChild(
            root.createComponent(BlockStack, { spacing: "loose" }, [
              root.createComponent(
                CalloutBanner,
                { title: "Post-purchase extension template" },
                "Use this template as a starting point to build a great post-purchase extension."
              ),
              root.createComponent(
                Layout,
                {
                  maxInlineSize: 0.95,
                  media: [
                    { viewportSize: "small", sizes: [1, 30, 1] },
                    { viewportSize: "medium", sizes: [300, 30, 0.5] },
                    { viewportSize: "large", sizes: [400, 30, 0.33] }
                  ]
                },
                [
                  root.createComponent(View, {}, [
                    root.createComponent(Image, {
                      source: "https://cdn.shopify.com/static/images/examples/img-placeholder-1120x1120.png"
                    })
                  ]),
                  root.createComponent(View),
                  root.createComponent(BlockStack, { spacing: "xloose" }, [
                    root.createComponent(TextContainer, {}, [
                      root.createComponent(Heading, {}, "Post-purchase extension"),
                      root.createComponent(
                        TextBlock,
                        {},
                        "Here you can cross-sell other products, request a product review based on a previous purchase, and much more."
                      )
                    ]),
                    root.createComponent(
                      Button,
                      {
                        submit: true,
                        onPress: () => {
                          console.log(
                            `Extension point ${extensionPoint}`,
                            initialState
                          );
                        }
                      },
                      "Primary button"
                    )
                  ])
                ]
              )
            ])
          );
          root.mount();
        }
      );
    }
  });

  // <stdin>
  var import_src = __toESM(require_src());
})();
