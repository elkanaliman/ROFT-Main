/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      maxWidth:{
        container : "1440px"
      },
      screen :{
        xs: "320px",
        sm: "370 px",
        sml: "500 px",
        md: "670 px",
        mdl: "770 px",
        lg: "970 px",
        lgl: "1024 px",
        xl: "1280 px"
      },
      fontFamily : {
        titleFont :  'Roboto',
        bodyFont: 'sans-serif',
      },
      color : {
        amazon_light: '#232f3e',
        amazon_blue: '#2980B9',
        whiteText: '#ffffff',
        lightText: '#ccc',
        quantity_box: '#FOF2F2',
        footerBottom: '#131A22'
      },
      boxShadow : "0px 0px 32px 1px rgba(200,200,200,1)",
      amazonInput : "0 0 3px 2px rgb(228 121 17 / 50%)",
    },
  },
  plugins: [],
}
