export const MenuItems = [
  {
    title: "Home",
    url: "/",
    cName: "nav-links",
    icon: "fa fa-home"
  },
  {
    title: "About",
    url: "/about",
    cName: "nav-links",
    icon: "fa-solid fa-circle-info"
  },
  {
    title: "Contact",
    url: "/contact",
    cName: "nav-links",
    icon: "fa-solid fa-address-book"
  },
  {
    title: "Donation",
    url: "/donation",
    cName: "nav-links",
    icon: "fas fa-donate",
    submenu:[
      {
        title:"Request Donation",
        url:"/donation/request"
      },
      {
        title:"View Donation",
        url:"/donation/view"
      }
    ]
  },
  {
    title: "News",
    url: "/news",
    cName: "nav-links",
    icon: "fa-solid fa-address-book"
  },
  
  {
    title: "Sign Up",
    url: "/signup",
    cName: "nav-links-mobile"
  }
];
