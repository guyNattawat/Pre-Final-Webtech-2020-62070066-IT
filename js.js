function fin(){
    var ket2 = document.getElementById("shr");
    jQuery.getJSON('ezquiz.json', (data) => {
    data.tracks.items.forEach(music => {
        if $("#shr") in  ${music.album.name}{
            $('#musicBlock').append(`
            <div class="col-4">
                <img src="${music.album.images[0].url}" class="w-100 rounded"  alt="poster-${music.album.name}" draggable="false">
                <h5 class="mt-2 text-muted">
                    ${music.album.name}
                </h5>
                <div class="text-muted">
                    Artist : ${music.album.artists[0].name}
                </div>
                <div class="text-muted">
                    Release date : ${music.album.release_date}
                </div>
                <div class="text-muted">
                    Avaliable : ${music.album.available_markets.length} countries
                </div>
            </div>
        `);
        } 
    })
})
}