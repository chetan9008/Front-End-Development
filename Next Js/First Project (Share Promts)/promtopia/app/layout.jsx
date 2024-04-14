import "@/styles/globals.css";
import { Children } from "react";

export const metadata = {
  title: "promtopia",
  description: "Explore the ai prompts",
};
const layout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <div className="main">
          <div className="gradient"></div>
        </div>
        <main className="app">{children}</main>
      </body>
    </html>
  );
};
export default layout;
