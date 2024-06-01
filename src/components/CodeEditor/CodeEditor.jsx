import {useRef, useState} from 'react';
import Editor from '@monaco-editor/react';
import './style.css';

const CodeEditor = () => {
    const [code, setCode] = useState('console.log("oO08 iIlL1 g9qCGQ ~-+=>");\n' + '\n' + '\n' + 'function updateGutters(cm) {\n' + '    var gutters = cm.display.gutters,\n' + '        __specs = cm.options.gutters;\n' + '\n' + '    removeChildren(gutters);\n' + '\n' + '    for (var i = 0; i < specs.length; ++i) {\n' + '        var gutterClass = __specs[i];\n' + '        var gElt = gutters.appendChild(\n' + '            elt(\n' + '                "div",\n' + '                null,\n' + '                "CodeMirror-gutter " + gutterClass\n' + '            )\n' + '        );\n' + '        if (gutterClass == "CodeMirror-linenumbers") {\n' + '            cm.display.lineGutter = gElt;\n' + '            gElt.style.width = (cm.display.lineNumWidth || 1) + "px";\n' + '        }\n' + '    }\n' + '    gutters.style.display = i ? "" : "none";\n' + '    updateGutterSpace(cm);\n' + '\n' + '    return false;\n' + '}\n');
    const [isFullscreen, setIsFullscreen] = useState(false);
    const [copyMessage, setCopyMessage] = useState('');
    const editorRef = useRef(null);
    const containerRef = useRef(null);

    const handleEditorChange = (value) => {
        setCode(value);
    };

    const handleEditorDidMount = (editor) => {
        editorRef.current = editor;
    };

    const copyToClipboard = () => {
        const editor = editorRef.current;
        if (editor) {
            const code = editor.getValue();
            navigator.clipboard.writeText(code).then(() => {
                setCopyMessage('Code copied to clipboard!');
                setTimeout(() => setCopyMessage(''), 3000); // Clear the message after 3 seconds
            }).catch(err => {
                console.error('Failed to copy text: ', err);
            });
        }
    };

    const toggleFullscreen = () => {
        if (!isFullscreen) {
            if (containerRef.current.requestFullscreen) {
                containerRef.current.requestFullscreen();
            } else if (containerRef.current.mozRequestFullScreen) { // Firefox
                containerRef.current.mozRequestFullScreen();
            } else if (containerRef.current.webkitRequestFullscreen) { // Chrome, Safari and Opera
                containerRef.current.webkitRequestFullscreen();
            } else if (containerRef.current.msRequestFullscreen) { // IE/Edge
                containerRef.current.msRequestFullscreen();
            }
        } else {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            } else if (document.mozCancelFullScreen) { // Firefox
                document.mozCancelFullScreen();
            } else if (document.webkitExitFullscreen) { // Chrome, Safari and Opera
                document.webkitExitFullscreen();
            } else if (document.msExitFullscreen) { // IE/Edge
                document.msExitFullscreen();
            }
        }
        setIsFullscreen(!isFullscreen);
    };

    return (<div ref={containerRef} className={`editor-container ${isFullscreen ? 'fullscreen' : ''}`}>
        <div className="toolbar">
            <button className="toolbar-button" onClick={copyToClipboard}><img src="./copy.svg" alt=""/></button>
            <button className="toolbar-button" onClick={toggleFullscreen}>
                {isFullscreen ? <img src="./size.svg" alt=""/> : <img src="./size.svg" alt=""/>}
            </button>
        </div>
        {copyMessage && <p className="copy-message">{copyMessage}</p>}
        <Editor
            height="560px "
            defaultLanguage="javascript"
            value={code}
            onChange={handleEditorChange}
            theme="vs-dark"
            onMount={handleEditorDidMount}

            options={{
                padding: {top: 20, bottom: 10},
                minimap: {enabled: false}
            }}
        />
    </div>);
};

export default CodeEditor;
