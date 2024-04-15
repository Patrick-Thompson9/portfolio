import reactLogo from "../assets/logos/react-logo.png";
import CSSLogo from "../assets/logos/css-logo.png";
import HTMLLogo from "../assets/logos/html-logo.png";
import pythonLogo from "../assets/logos/python-logo.png";
import TSLogo from "../assets/logos/ts-logo.png";
import tailwindLogo from "../assets/logos/tailwind-logo.png";
import djangoLogo from "../assets/logos/django-logo.svg";
import graphQLLogo from "../assets/logos/graphql-logo.png";
import exampleImage from "../assets/example-person.avif";
import KUTE from "kute.js";

function HomePage() {
  return (
    <section className="mt-10">
      <div className="flex flex-col space-y-5 items-center justify-center">
        <span
          className="lg:text-8xl text-5xl background-clip mix-blend-difference whitespace-nowrap dark:brightness-200
          bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text"
        >
          PATRICK THOMPSON
        </span>
        <img className="w-96" src={exampleImage}></img>
        <div className="flex items-center justify-center gap-5">
          <span className="text-4xl text-center">
            Tech <br />
            Stack
          </span>
          <div className="flex flex-col items-center justify-center gap-3">
            <div className="flex items-center justify-center gap-3">
              <img className="size-11" src={reactLogo} />
              <img className="size-10" src={TSLogo} />
              <img className="h-8 w-auto" src={tailwindLogo} />
              <img className="size-10" src={CSSLogo} />
              <img className="size-10 w-9" src={HTMLLogo} />
            </div>
            <div className="flex items-center justify-center gap-3">
              <img className="size-10" src={pythonLogo} />
              <img className="size-10" src={djangoLogo} />
              <img className="size-10" src={graphQLLogo} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomePage;
