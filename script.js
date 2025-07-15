gsap.from("body", { opacity: 0, duration: 1.2, ease: "power2.out" });
gsap.from("header, nav, h1, h2", {
  y: -50,
  opacity: 0,
  duration: 1.5,
  stagger: 0.3,
  ease: "back.out(1.7)"
});
gsap.utils.toArray("section").forEach(section => {
  gsap.from(section, {
    scrollTrigger: section,
    y: 50,
    opacity: 0,
    duration: 1.2,
    ease: "power1.out"
  });
});
