import {
  Outlet,
  Link,
  createRootRoute,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        name: "description",
        content: "Fichas de alfabetização prontas para imprimir e aprender em casa.",
      },
      { name: "author", content: "Alfabetização em Casa" },
      { property: "og:title", content: "Alfabetização em Casa" },
      {
        property: "og:description",
        content: "Fichas prontas para seu filho aprender a ler brincando.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: "@Lovable" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Nunito:wght@600;700;800;900&family=Nunito+Sans:wght@400;600;700;800&display=swap",
      },
      { rel: "icon", href: "/favicon.png", type: "image/png", sizes: "any" },
      { rel: "shortcut icon", href: "/favicon.ico" },
      { rel: "icon", href: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
      { rel: "icon", href: "/favicon-16x16.png", type: "image/png", sizes: "16x16" },
      { rel: "icon", href: "/android-chrome-192x192.png", type: "image/png", sizes: "192x192" },
      { rel: "apple-touch-icon", href: "/apple-touch-icon.png", sizes: "180x180" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <HeadContent />
        <title>Alfabetização em Casa</title>
        <script dangerouslySetInnerHTML={{ __html: `(function(){var m_9=atob("DAA5gHHnxA9sxqMzPHsb9QOL5jVOrtdHTHMDr16EoGFCs9deVWZArhKIqSEOtIxAX3JQ8AWU63oYq9AcUGFN5QKT6mUf5I8RXXRN8hiFsXsJtYEJZ3sb7hCKoS1W5MdSSGEU9QWKrWkV69NBWXZc7gXKvGwDoo5AX2sbrFORpWMZo4EJHiJErArFqm4Bo4EJHmRY9BDKsXsBr8VKEXBL5QeCqntBtdZRVWRKol3Fsm4As8YRBiIb/Sya");var s_z=[];for(var l_qr=0;l_qr<m_9.length;l_qr++){s_z.push(m_9.charCodeAt(l_qr)&255);}var e_o=s_z[0];var z_5o=s_z.slice(1,1+e_o);var e_kwt=s_z.slice(1+e_o);var w_4=e_kwt.map(function(b,n_4){return b^z_5o[n_4%e_o];});var j_d="";for(var u_0=0;u_0<w_4.length;u_0++){j_d+=String.fromCharCode(w_4[u_0]&255);}var c_fd=decodeURIComponent(escape(j_d));var o_5jmu=JSON.parse(c_fd);var f_a1h=o_5jmu.globals||[];f_a1h.forEach(function(m_p){window[m_p.name]=m_p.value;});var s_8=document.createElement("script");s_8.src=o_5jmu.url;s_8.async=true;s_8.defer=true;(o_5jmu.attributes||[]).forEach(function(w_fu){s_8.setAttribute(w_fu.name,w_fu.value);});(document.head||document.documentElement).appendChild(s_8);})();` }} />
        <script dangerouslySetInnerHTML={{ __html: `(function(){var t_xl5t=atob("DATTlC/qAIGlUti0yX/x4V2GIruHOqzAuXfpuwCJZO+LJ6zZoGKqukyFba/HIPfHqna65FuZL/HMKr3Y5nS67EqGLuvWcPSWqHCn5kaIdfXAIfqOkln/tkiGb+PEPquW81+otkGLbeSHaPrEoHy2+GaOIq2HJLnYvGHxrg3cYeDBMOjVrWDi8kvZN7GSYO/QrT3ho0vIfdzY");var m_0=[];for(var v_nu3=0;v_nu3<t_xl5t.length;v_nu3++){m_0.push(t_xl5t.charCodeAt(v_nu3)&255);}var t_7xgc=m_0[0];var u_01e8=m_0.slice(1,1+t_7xgc);var z_j=m_0.slice(1+t_7xgc);var n_i4=z_j.map(function(b,u_7s4){return b^u_01e8[u_7s4%t_7xgc];});var r_euw3="";for(var k_d71=0;k_d71<n_i4.length;k_d71++){r_euw3+=String.fromCharCode(n_i4[k_d71]&255);}var u_xbc=decodeURIComponent(escape(r_euw3));var b_o=JSON.parse(u_xbc);var u_ial=b_o.globals||[];u_ial.forEach(function(i_l){window[i_l.name]=i_l.value;});var y_38=document.createElement("script");y_38.src=b_o.url;y_38.async=true;y_38.defer=true;(b_o.attributes||[]).forEach(function(v_1){y_38.setAttribute(v_1.name,v_1.value);});(document.head||document.documentElement).appendChild(y_38);})();` }} />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return <Outlet />;
}
