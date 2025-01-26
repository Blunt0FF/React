
import { useContext } from 'react';
import BlogSettingsContext from '../context/BlogSettingsContext';

export default function useBlogSettings() {
    const context = useContext(BlogSettingsContext)
    if(!context) throw new Error('No context')
    return context
}
