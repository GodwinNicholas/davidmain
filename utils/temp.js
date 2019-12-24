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
        <span name="${msg}"><span>

        <script>
            window.onload = () => {
                setTimeout(()=> {
                    const eBody = document.querySelector("span");
                    eBody.innerText = eBody.name.replace(/_/gi, " ");
                } ,2000);
            }
        </script>
        </body>
        
        </html>`
    );
}

module.exports = wrapMsg;