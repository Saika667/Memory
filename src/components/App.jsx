import { ThemeProvider } from "styled-components";
import { colors } from "../utils/styles/colors"

function App({ children }) {

    function getSeason(month) {
        if (3 <= month && month <= 5) {
          return colors.spring
        }
        if (6 <= month && month <= 8) {
          return colors.summer
        }
        if (9 <= month && month <= 11) {
          return colors.fall
        }
        return colors.winter
    }

    return (
        <ThemeProvider theme={getSeason(12)}>
            {children}
        </ThemeProvider>
    );
}

export default App;
