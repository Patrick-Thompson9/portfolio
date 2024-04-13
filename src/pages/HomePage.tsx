import reactLogo from "../assets/logos/react-logo.png";
import CSSLogo from "../assets/logos/css-logo.png";
import HTMLLogo from "../assets/logos/html-logo.png";
import pythonLogo from "../assets/logos/python-logo.png";
import TSLogo from "../assets/logos/ts-logo.png";
import tailwindLogo from "../assets/logos/tailwind-logo.png";
import djangoLogo from "../assets/logos/django-logo.svg";

function HomePage() {
  return (
    <section>
      <div className="text-8xl">Home Page</div>
      <ul>
        Here are my projects
        <li>React Job Website</li>
        <li>This Portfolio Website</li>
      </ul>
      <div className="flex items-center justify-center gap-10">
        <span className="text-4xl">Tech Stack</span>
        <div className="flex-col space-y-5">
          <div className="flex items-center justify-center gap-3">
            <img className="size-11" src={reactLogo} />
            <img className="size-10" src={TSLogo} />
            <img className="h-8 w-auto" src={tailwindLogo} />
            <img className="size-10" src={CSSLogo} />
            <img className="size-10 w-9" src={HTMLLogo} />
          </div>
          <div className="flex items-center justify-center gap-3">
            <div className="flex items-center justify-center gap-3">
              <img className="size-10" src={pythonLogo} />
              <img className="size-10" src={djangoLogo} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomePage;
