"use client"
// save as components/PostsLimit.jsx
import { useRouter, usePathname, useSearchParams } from 'next/navigation'
// Client component allowing user to choose the number of posts displayed
// and set new value in search params
export default function PostsLimit(defaultLimit, pageNumber) {
    const searchParams = useSearchParams(); // next.js hook for search params
    const router = useRouter(); // next.js hook for client side navigation
    const pathname = usePathname(); // next.js hook for current URL path

    const limit = searchParams.has('limit') ?
        searchParams.get('limit') : defaultLimit;

    const pageNum = searchParams.has('pageNumber') ?
        searchParams.get('pageNumber') : pageNumber;

    const handleChangeLimit = (e) => {
        // change the route to the existing path plus the new search param
        router.replace(pathname + '?limit=' + e.target.value)
    }

    const numberOfPostsSelectDisplay = () => {
        const options = [5, 10, 20];
        const optionDisplay = options.map((options) => {
            return <option key={options}>{options}</option>;
        });
        return optionDisplay;
    }

    const selectIndividualOption = () => {
        let result = [];
        for (let i = 1; i <= limit; i++) {
            result.push(<option key={i}>{i}</option>);
        };
        return result;
    }

    const handleChangePage = (e) => {
        // change the route to the existing path plus the new search param
        router.replace(pathname + "/" + e.target.value)
    }

    return (
        <label className="PostsLimit">Number of posts:
            <select onChange={handleChangeLimit} value={limit}>
                {numberOfPostsSelectDisplay()}
            </select>
            <select onChange={handleChangePage} value={pageNum}>
                {selectIndividualOption()}
            </select>
        </label>
    )
}
// See next slide for changes to server-side Posts component