import Handlebars from "handlebars";
import users from "./data/users.js";
import usersSource from "bundle-text:./templates/template.hbs";

const usersTemplate = Handlebars.compile(usersSource);

const usersHtml = usersTemplate(users);

const usersContainer = document.querySelector("#users__container");

usersContainer.innerHTML = usersHtml;
