$(window).scroll(() => {
    if($(document).scrollTop() > 50) {
        $(".nav").addClass("affix");
    } else {
        $(".nav").removeClass("affix");
    }
});

$(".navTrigger").click(() => {
    $(this).toggleClass("active");
    $("#mainListDiv").toggleClass("show_list");
    $("#mainListDiv").fadeIn();
});

let container, details;
window.addEventListener("load", () => {
  container = document.querySelector("#projectsContainer");
  details = container.parentElement.querySelector("#projectDetails");
});
function switchProject(newActive, detailSelector) {
  let old = Array.from(container.querySelectorAll("a")).find((a) =>
    a.classList.contains("current")
  );
  if (old) old.classList.remove("current");
  newActive.classList.add("current");
  Array.from(details.children).map((ch) => (ch.style.display = "none"));
  details.querySelector(detailSelector).style.display = "block";
}