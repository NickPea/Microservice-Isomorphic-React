"use strict";
//
Object.defineProperty(exports, "__esModule", { value: true });
exports.template = void 0;
var config_1 = require("../config");
var template = function (props) {
    return "\n        <!DOCTYPE html>\n        <html lang=\"" + props.lang + "\"}>\n        <head>\n            " + props.head + "\n            <meta charset=\"UTF-8\">\n            <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\n            <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n            <style>\n                @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;1,100&display=swap');\n            </style>\n            " + props.styles + "\n        </head>\n        <body>\n            <div id=\"" + config_1.config.ROOT_ELEMENT_ID + "\">" + props.render + "</div>\n            \n            <script>\n                window[\"" + config_1.config.SERVER_STATE_WINDOW_KEY + "\"] = JSON.parse('" + (JSON.stringify(props.state) || null) + "');\n\t\t\t</script>\n\n\t\t\t<script src=\"" + (props.bundle || null) + "\"></script>\n\t\t\t\n\t\t</body>\n\t\t</html>\n    ";
};
exports.template = template;
