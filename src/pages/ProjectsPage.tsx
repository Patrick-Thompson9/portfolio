import { useEffect, useRef } from "react";
import Project from "../components/Project";

function ProjectsPage() {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("slide-in");
        }
      });
    });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div ref={ref} className="off-screen">
      <Project />
      <Project />
      <Project />
      <Project />
      <Project />
      <Project />
      {/* Add more Project components as needed */}
    </div>
  );
}

export default ProjectsPage;
