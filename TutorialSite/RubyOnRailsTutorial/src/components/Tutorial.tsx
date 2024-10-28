import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm"; // For GitHub Flavored Markdown support
import rehypeHighlight from "rehype-highlight"; // For syntax highlighting
import 'highlight.js/styles/github.css';
import './Tutorial.css' // You can choose a style from highlight.js

const Tutorial = () => {
    const [content, setContent] = useState("");

    useEffect(() => {
        fetch("/CW1_RubyOnRails/src/assets/Tutorial/GettingStuffDone.md")
            .then((res) => res.text())
            .then((text) => setContent(text));
    }, []);

    return (
        <div style={{ padding: 20 }}>
            <ReactMarkdown
                children={content}
                remarkPlugins={[remarkGfm]}
                rehypePlugins={[rehypeHighlight]} // Add rehype-highlight here
            />
        </div>
    );
};

export default Tutorial;
