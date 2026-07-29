(() => {
  const serviceRoutes = [
    "/kitchen-organizing",
    "/wardrobe-organizing",
    "/storage-room-organizing",
    "/kids-room-organizing",
    "/office-organizing",
    "/moving-organizing",
  ];

  const applyRefinements = () => {
    document.querySelectorAll(".service-grid .service").forEach((card, index) => {
      const link = card.querySelector("a");
      if (!link || !serviceRoutes[index]) return;
      link.href = serviceRoutes[index];
      link.textContent = "تفاصيل الخدمة ←";
    });

    const methodLabel = document.querySelector("#method .section-head .eyebrow");
    if (methodLabel) methodLabel.textContent = "منهج ترتيب";

    const assessmentText = document.querySelector(
      "#assessment .assessment-copy > p:last-child",
    );
    if (assessmentText) assessmentText.textContent = "احجزي معنا استشارة مجانية";

    const location = document.querySelector("footer > div:nth-of-type(3) > span");
    if (location) location.textContent = "الرياض . المملكة العربية السعودية";
  };

  applyRefinements();
  document.addEventListener("DOMContentLoaded", applyRefinements);
  window.addEventListener("load", applyRefinements);
  window.setTimeout(applyRefinements, 1000);
})();
