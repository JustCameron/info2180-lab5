window.addEventListener('load', ()=>{

    let result = document.querySelector("div#result");
    //Country Lookup Button Listener
    document.querySelector("button#lookup").addEventListener("click", (event)=>{
        link = `world.php?country= ${document.querySelector("input#country").value.replace(/[-&/\#,+()$@|~%!.'":;*?<>{}]/g,'')}`.replace( /"[^-0-9+@#/%?~_|!:,.;()]"/g,'');
        ajxRequest(event);
    });
    //City Lookup Button Listener
    document.querySelector("button#cityLookup").addEventListener("click", (event)=>{
        link = `world.php?country= ${document.querySelector("input#country").value.replace(/[-&/\#,+()$@|~%!.'":;*?<>{}]/g,'')}&context=cities`.replace( /"[^-0-9+@#/%?~_|!:,.;()]"/g,'');
        ajxRequest(event);
    });
    //AJAX Request
    let ajxRequest = (event) =>{
        event.preventDefault();
        fetch(link, {method : 'GET'})
        .then(resp => resp.text())
        .then(respData => {
            result.innerHTML = respData;
        })
    }
});