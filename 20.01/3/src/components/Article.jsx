import useBlogSettings from '../hoocks/useBlogSettings';


export default function Article() {
    const settings = useBlogSettings()
    return (
        <article style={{fontSize: settings.fontSize, lineHeight:settings.lineHeight} }>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero, velit!</p>
            <p>Lorem ipsum dolor sit amet.</p>
        </article>
   );
} 