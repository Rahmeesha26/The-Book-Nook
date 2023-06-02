const searchForm = $("find-it");

$searchForm.on("find-it", event => {
          event.preventDefault();

          const formData = new FormData(event.target);
          const who = formData.get("who")
          console.log("who")
})