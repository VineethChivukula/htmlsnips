import "../styles/basictemplate.css";
import CodeMirror from '@uiw/react-codemirror';

const BasicTemplate = () => {
    return (
        <div>
            <h1>The Basic HTML Template</h1>
            <CodeMirror
                width="30%"
                // theme={"ayu-dark"}
                value={`<!DOCTYPE html>
<html>
    <head>
        <title>Basic HTML Template</title>
    </head>
    <body>
        <h1>Hello, World!</h1>
    </body>
</html>`
    }
            />
        </div>
    );
};

export default BasicTemplate;
