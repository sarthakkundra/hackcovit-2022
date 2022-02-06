import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration
} from "remix";
import type { MetaFunction } from "remix";
// import './styles/output.css';
import './tailwind.css';

export const meta: MetaFunction = () => {
  return { title: "New Remix App" };
};

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <div className="flex justify-center items-center"><p className="text-3xl" style={{color: 'red'}}>HELLO</p></div>
        {process.env.NODE_ENV === "development" && <LiveReload />}
      </body>
    </html>
  );
}
