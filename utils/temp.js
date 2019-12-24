function wrapMsg(msg) {
    return (
        `<!DOCTYPE html>
        <html lang="en">
        
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <link href="https://fonts.googleapis.com/css?family=Roboto&display=swap" rel="stylesheet">
            <title>Email</title>
            <style>
            span{
                font-family: 'Roboto', sans-serif;
                font-size: 1rem;
            }
            </style>
        </head>
        
        <body>
        <span id="msg1">${msg}<span>

        <script>
                setTimeout(()=> {
                    const eBody = document.querySelector("#msg1");
                    eBody.innerText = "hello";
                } ,2000);
        </script>
        </body>
        
        </html>`
    );
}

module.exports = wrapMsg;