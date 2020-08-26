import item1 from "./images/banking_JS.jpg";
import item2 from "./images/googleBooks_JS.jpg";
import item3 from "./images/covid19Tracker_JS.jpg";
import item4 from "./images/pdj_React.jpg";
import item5 from "./images/login_React.jpg";
import iconJS from "./images/iconJS.svg";
import iconReact from "./images/iconReact.svg";

// import item4 from "./images/item4.jpg";
// import item5 from "./images/item5.jpg";
const cardsInfo = [
  {
    id: 1,
    name: "Banking App",
    image: item1,
    desc:
      "A simple application on Vanilla JS, built by using module architecture.",
    source: "https://github.com/mirovois/banking_app",
    link: "https://banking-app.netlify.app/",
    icon: iconJS,
  },
  {
    id: 2,
    name: "Google Books API",
    image: item2,
    desc:
      "A search application with requests to third-party API- Google Books API. Application was bundled using WebPAck",
    source: "https://github.com/mirovois/GoogleBooks_project",
    link: "https://googlebooks-api.netlify.app/",
    icon: iconJS,
  },
  {
    id: 3,
    name: "COVID-19 Tracker",
    image: item3,
    desc:
      "A simple application for monitoring COVID-19 stats up to date. Using external calls to API",
    source: "https://github.com/mirovois/banking_app",
    link: "https://github.com/mirovois/banking_app",
    icon: iconJS,
  },
  {
    id: 4,
    name: "Order service",
    image: item4,
    desc:
      "A simple responsive application, which helps a customer to order breakfast. Data is managed by Firebase firestore. Used Material UI for making components",
    source: "https://github.com/mirovois/react__breakfast-order-service",
    link: "https://order-service.netlify.app/",
    icon: iconReact,
  },
  {
    id: 5,
    name: "Login Form",
    image: item5,
    desc:
      "Form module for being able to login and register with all necessary validation ",
    source: "https://github.com/mirovois/reactJS_form-validation",
    link: "https://login-form-manipulation.netlify.app/",
    icon: iconReact,
  },
];
export default cardsInfo;
