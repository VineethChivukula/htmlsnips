import "../styles/basictemplate.css";
import CodeMirror from "@uiw/react-codemirror";
import { markdown, markdownLanguage } from "@codemirror/lang-markdown";
import { languages } from "@codemirror/language-data";
import { tokyoNight } from "@uiw/codemirror-theme-tokyo-night";

const code = `<!DOCTYPE html>
<html>
    <head>
        <title>Basic HTML Template</title>
    </head>
    <body>
        <h1>Hello, World!</h1>
    </body>
</html>`;

const BasicTemplate = () => {
    return (
        <div>
            <h1>The Basic HTML Template</h1>
            <CodeMirror
                width="50%"
                height="50%"
                value={code}
                theme={tokyoNight}
                extensions={[
                    markdown({
                        base: markdownLanguage,
                        codeLanguages: languages,
                    }),
                ]}
            />
        </div>
    );
};

export default BasicTemplate;
