import StyledComponentsRegistry from "./registry";
import "./global.css";
import { ThemeProvider } from "@/components/ThemeProvider";

export const metadata = {
  title: "Styled Components Showcase",
  description: "Beautiful UI components built with styled-components",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <StyledComponentsRegistry>
          <ThemeProvider>
            {children}
          </ThemeProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}