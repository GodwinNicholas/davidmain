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
                height: 1rem;
                overflow: hidden;   
            }
            </style>
        </head>
        
        <body>
        <span class="msg1">${msg}<span>


        </body>
        
        </html>`
    );
}

module.exports = wrapMsg;