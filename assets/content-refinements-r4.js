(() => {
  const serviceRoutes = [
    "/kitchen-organizing/",
    "/wardrobe-organizing/",
    "/storage-room-organizing/",
    "/kids-room-organizing/",
    "/office-organizing/",
    "/moving-organizing/",
  ];

  const serviceTitles = [
    "ترتيب وتنظيم المطابخ",
    "ترتيب وتنظيم غرف الملابس",
    "ترتيب وتنظيم المستودعات",
    "ترتيب وتنظيم غرف الأطفال",
    "ترتيب وتنظيم المكاتب",
    "ترتيب وتنظيم المنزل بعد الانتقال",
  ];

  const applyRefinements = () => {
    document.querySelectorAll(".service-grid .service").forEach((card, index) => {
      const title = card.querySelector("h3");
      const link = card.querySelector("a");
      if (title && serviceTitles[index]) {
        title.textContent = serviceTitles[index];
      }
      if (link && serviceRoutes[index]) {
        link.href = serviceRoutes[index];
        link.textContent = `${serviceTitles[index]} — التفاصيل ←`;
      }
    });


    const proofValues = [139, 230, 193, 700];
    document.querySelectorAll(".proof-stat strong").forEach((value, index) => {
      if (proofValues[index] !== undefined) value.textContent = String(proofValues[index]);
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
