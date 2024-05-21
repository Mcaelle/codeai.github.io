document.addEventListener('DOMContentLoaded', function() {
    const htmlEditor = document.getElementById('html-editor');
    const cssEditor = document.getElementById('css-editor');
    const jsEditor = document.getElementById('js-editor');
    const output = document.getElementById('output');

    function updateOutput() {
        const html = htmlEditor.value;
        const css = `<style>${cssEditor.value}</style>`;
        const js = `<script>${jsEditor.value}<\/script>`;
        const srcdoc = `${html}${css}${js}`;
        output.srcdoc = srcdoc;
    }

    htmlEditor.addEventListener('input', updateOutput);
    cssEditor.addEventListener('input', updateOutput);
    jsEditor.addEventListener('input', updateOutput);

    // Initial content for demonstration
    htmlEditor.value = '<h1>Hello World</h1>';
    cssEditor.value = 'h1 { color: red; }';
    jsEditor.value = 'console.log("Hello World");';
    updateOutput();
});
