import "tailwindcss/tailwind.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <div id="toast"></div>

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
