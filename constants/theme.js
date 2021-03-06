const waterMelonSugarTheme = {
  text: "gray",
  primary: "#85BE8C", //"#ff7676",
  accent: "#F1E6D6", // "#e7ffea",
  danger: "#ffcdc8",
  success: "#85BE8C",
  shadow: {
    elevation: 5,
    // overflow: "hidden",
    shadowColor: "gray",
    shadowOpacity: 0.26,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 2 }
  },
  light: "white",
  dark: "#222222",

  header: "#85BE8C",
  inactiveColor: "rgba(255, 255, 255, 0.6)",
  headerText: "white",
  background: "#f9f9f9", //#FFF9F0

  input: "white",
  card: "white",
  cardBorderRadius: 20,
  button: "#bc8f7d",
  buttonText: "white",
  buttonBorderRadius: 20,
  buttonRipple: "lightgray",
  badge: {
    borderRadius: 0,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderColor: "lightgray",
    // borderWidth: 1,
    color: "gray",
    minWidth: 70,
    textAlign: "center"
  },
  screen: {
    backgroundColor: "#fffbf5" // "#111111"
  },

  titleFontFamily: "montserrat-bold",
  titleFontSize: 20,
  titleFontColor: "#fffbf5", //"#333333",
  titleFontColorDark: "#333333",

  fontFamily: "montserrat",
  fontSize: 16,
  fontColor: "gray"
};

// selected theme
const Theme = waterMelonSugarTheme;

export default Theme;
