const accordion = (triggersSelector, btnsSelector) => {
  const btns = document.querySelectorAll(triggersSelector),
    blocks = document.querySelectorAll(btnsSelector);

  blocks.forEach((el) => {
    el.classList.add("animated", "fadeInDown");
  });

  btns.forEach((el) => {
    el.addEventListener("click", function () {
      if (!el.classList.contains("active")) {
        btns.forEach((el) => el.classList.remove("active", "active-style"));
        el.classList.add("active", "active-style");
      }
    });
  });
};

export default accordion;
