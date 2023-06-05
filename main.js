const { JSDOM } = require( "jsdom" );
const { window } = new JSDOM( "" );
const $ = require( "jquery" )( window );


const searchForm = $("find-it");

$searchForm.on("find-it", event => {
          event.preventDefault();

          const formData = new FormData(event.target);

          const who = formData.get("who").toLocaleLowerCase();

          const url = `https://openlibrary.org/dev/docs/api/search.json?${who}`


          console.log(img)

          const $photo = $('.parent')
          
          fetch(url)
          .then(response => {
                    return response.json();
          })
          .then(data => {
                    $photo.html(`<img src=${data.title.front_default} alt=${data.author} alt=${data.genre}>`);
                    $info-box.html(
                             ` <div>
                                        <b>title: </b> ${data.title}
                              </div>
                              <div>
                              <div>
                                        <b>name: </b> ${data.name}
                              </div>
                                        <b>date: </b> ${data.date}
                              </div>
                              <div>
                                        <b>isbn: </b> ${data.isbn}
                              </div>`
                    )
          })
});