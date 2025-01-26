
import { useState } from 'react';
import BlogSettingsContext from '../context/BlogSettingsContext';

export default function BlogSettingsProvider({ children }) {
    const [fontSize, setFontSize] = useState(16);
    const [lineHeight, setLineHeight] = useState(1.5);

    function updateFontSize(e) {
        setFontSize(parseInt(e.target.value, 10))
    }
    function updateLineHeight(e){
        setLineHeight(Number(e.target.value))
    }

    return (
        <BlogSettingsContext.Provider value={{ fontSize, updateFontSize, lineHeight, updateLineHeight }}>
            {children}
        </BlogSettingsContext.Provider>
    );
};

