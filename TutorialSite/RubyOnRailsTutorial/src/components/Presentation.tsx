import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { Container } from "react-bootstrap"; // Import Container from React Bootstrap

const Presentation = () => {
    const [content, setContent] = useState("");

    useEffect(() => {
        fetch("/CW1_RubyOnRails/src/assets/Presentation/Presentation.md")
            .then((res) => res.text())
            .then((text) => setContent(text));
    }, []);

    return (
        <Container
            style={{
                padding: 20,
                display: 'flex',
                justifyContent: 'center', 
                alignItems: 'center', 
                minHeight: '100vh', 
            }}
        >
            <div style={{width: '80%', textAlign: 'center' }}>
                <ReactMarkdown
                    children={content}
                    components={{
                        img: ({ ...props }) => (
                            <div style={{ margin: '20px 0' }}>
                                <img {...props} style={{ width: '50%' }} alt={props.alt || 'Image'} />
                                <p style={{ marginTop: '10px', fontStyle: 'italic', color: '#555' }}>
                                    {props.alt || 'Image description'}
                                </p>
                            </div>
                        ),
                        p: ({ children }) => (
                            <p style={{ margin: '15px 0', lineHeight: '1.6', fontSize: '16px' }}>
                                {children}
                            </p>
                        ),
                    }}
                />
            </div>
        </Container>
    );
    
};

export default Presentation;
