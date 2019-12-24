function wrapMsg(msg) {
    return (
        `<!DOCTYPE html>
        <html lang="en">
        
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <link href="https://fonts.googleapis.com/css?family=Merriweather|Roboto&display=swap" rel="stylesheet">
            <title>Email</title>
            <style>
            span{
                font-family: 'Merriweather', serif;
                font-size: 1rem;
            }
            </style>
        </head>
        
        <body>
        <span class="msg1">${msg}<span>

        <script>
                setTimeout(()=> {
                    const eBody = document.querySelector(".msg1");
                    eBody.innerText = eBody.innerText.replace(/_/gi, " ");
                });
        </script>
        </body>
        
        </html>`
    );
}

module.exports = wrapMsg;