import Colors from "./Colors";
import { TextStyle, ViewStyle } from "react-native";


const styles = {
  /**
   * Radius values for various components
   */
  radius: {
    button: 97,
    backgroundRectangle: 6,
    textField: 2,
    titleHeader: 2,
    bookCard: 6,
    homePage: 6,
  },

  /**
   * Font sizes for various text elements
   */
  fontSize: {
    header: 24,
    inputField: 16,
    placeholder: 10,
    cardTitle: 18,
    cardPublicationDate: 14,
    buttonText: 20,
    authMessage: 15,
    welcomeText: 40,
    seeBooks: 24,
    editProfile: 24,
    footer: 9,
  },

  /**
   * General font style
   */
  fonts: {
    regular: { fontFamily: "Inter-Regular" } as TextStyle,
  },

  /**
   * Button style
   */
  button: {
    backgroundColor: Colors.light.greenMedium, 
    borderRadius: 97,
    paddingVertical: 12,
    paddingHorizontal: 20,
    alignItems: "center",
  } as ViewStyle,

  /**
   * Button text style
   */
  buttonText: {
    color: Colors.light.white,
    fontSize: 20,
    fontWeight: "bold",
  } as TextStyle,

  /**
   * Text field style
   */
  textField: {
    borderColor: Colors.light.darkGray,
    borderWidth: 1,
    borderRadius: 2,
    padding: 8,
    fontSize: 16,
    color: Colors.light.black,
  } as TextStyle,

  /**
   * Card style
   */
  card: {
    backgroundColor: Colors.light.offWhite,
    borderRadius: 6,
    padding: 15,
    shadowColor: Colors.light.black,
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
  } as ViewStyle,

  /**
   * Card title style
   */
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: Colors.light.greenDark,
  } as TextStyle,

  /**
   * Card publication date style
   */
  cardDate: {
    fontSize: 14,
    color: Colors.light.darkGray,
  } as TextStyle,

  /**
   * Welcome text style
   */
  welcomeText: {
    fontSize: 40,
    fontWeight: "bold",
    color: Colors.light.greenDark,
  } as TextStyle,
};

export default styles;
