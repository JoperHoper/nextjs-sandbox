import Link from 'next/link';

// Save as page.jsx in app/about
const About = () => {
    return (
        <main>
            <div className="About">
                <h1>About</h1>
                <p>This is the about page.
                    Nothing to see, go <Link href="/">home</Link>.</p>
            </div>
        </main>
    )
}

export default About;