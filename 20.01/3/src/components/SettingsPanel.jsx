
import { useState } from 'react';
import useBlogSettings from '../hoocks/useBlogSettings';

export default function SettingsPanel() {
    const settings = useBlogSettings()
    return (
        <>
            <label>
                Размер шрифта:
                <select onChange={settings.updateFontSize}>
                    <option>12px</option>
                    <option>14px</option>
                    <option>16px</option>
                    <option >18px</option>
                    <option >20px</option>
                </select>
            </label>
            <label>
                Межстрочное расстояние:
                <select onChange={settings.updateLineHeight}>
                    <option >1</option>
                    <option >1.2</option>
                    <option >1.5</option>
                    <option >2</option>
                </select>
            </label>
        </>
    );
}
