import Link from 'next/link';

export default function NewsPage() {
    return (
        <>
            <h1>The news page</h1>
            <ul>
                <li><Link href="/news/item1" >Item 1</Link></li>
                <li><Link href="/news/item2" >Item 2</Link></li>
            </ul>
        </>
    );
}