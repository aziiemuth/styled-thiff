import "./global.css";

export const metadata = {
  title: "Yuk Styling - Styled Components Variant",
  description: "Aplikasi demo penggunaan styled-components dengan berbagai varian styling.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}