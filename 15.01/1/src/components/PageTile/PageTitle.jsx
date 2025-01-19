import { useEffect } from 'react';

export default function PageTitle({ title }) {
  useEffect(() => {
    document.title = title;
  }, [title])

  return <p>Страница обновила заголовк на {title}</p>
}