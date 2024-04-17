import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";
import { buttonClasses } from "../layouts/MainLayout";

function NotFoundPage() {
  return (
    <section className="text-center flex flex-col justify-center items-center h-96">
      <FontAwesomeIcon
        icon={faTriangleExclamation}
        className="size-32 text-amber-400 m-5"
      />
      <h1 className="text-6xl font-bold mb-4">404 Not Found</h1>
      <p className="text-xl mb-5">This page does not exist</p>
      <Link to="/" className={buttonClasses}>
        Go Back
      </Link>
    </section>
  );
}

export default NotFoundPage;
