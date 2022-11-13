document.addEventListener("DOMContentLoaded", function(){
  document.querySelectorAll('.how__steps-link').forEach(function(tabsBtn){
    tabsBtn.addEventListener("click", function(event) {
      const path = event.currentTarget.dataset.path
      document.querySelectorAll(".how__steps-link").forEach(function(tabContent){
        tabContent.classList.remove("how__step-active")
      })
      document.querySelector(`[data-path="${path}"]`).classList.add("how__step-active");
      document.querySelectorAll(".hov__content").forEach(function(tabContent){
        tabContent.classList.remove("hov__content-active")
      })
      document.querySelector(`[data-target="${path}"]`).classList.add("hov__content-active")
    })
  })
})
