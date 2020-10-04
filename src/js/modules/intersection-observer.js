import { msQueryAll } from "making-stuffs-queries";

const targets = msQueryAll("[intersect]");

const options = {
  threshold: 0.1,
  root: null,
};

const callback = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      if (entry.target.classList.contains("fade-in")) {
        return;
      }
      entry.target.classList.add("fade-in");
    }
  });
};

const observer = new IntersectionObserver(callback, options);

if (targets && targets.length > 0) {
  targets.forEach((target) => {
    observer.observe(target);
  });
}
