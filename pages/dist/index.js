"use strict";
exports.__esModule = true;
var google_1 = require("@next/font/google");
var Hero_1 = require("../components/Hero");
var SocialLinks_1 = require("../components/SocialLinks");
var Skills_1 = require("../components/Skills");
var Project_1 = require("../components/Project");
var Contact_1 = require("../components/Contact");
var Footer_1 = require("../components/Footer");
var inter = google_1.Inter({ subsets: ['latin'] });
function Home() {
    return (React.createElement("div", { className: "bg-gradient-to-br from-[#690a4a] via-[#100e2d] to-[#08624b]" },
        React.createElement(Hero_1["default"], null),
        React.createElement(SocialLinks_1["default"], null),
        React.createElement(Skills_1["default"], null),
        React.createElement(Project_1["default"], null),
        React.createElement(Contact_1["default"], null),
        React.createElement(Footer_1["default"], null)));
}
exports["default"] = Home;
