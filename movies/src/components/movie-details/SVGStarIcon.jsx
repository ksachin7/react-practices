function EmptyStarIcon() {
    return (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            className='ionicon'
            viewBox='0 0 24 24'
            width={24}
        >
            <path
                fill='gray'
                d='M12 2l2.4 7.5h7.6l-6 4.8 2.4 7.5-6-4.8-6 4.8 2.4-7.5-6-4.8h7.6z'
            />
        </svg>
    );
}

function FilledStarIcon() {
    return (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            className='ionicon'
            viewBox='0 0 24 24'
            width={24}
        >
            <path
                fill='gold'
                d='M12 2l2.4 7.5h7.6l-6 4.8 2.4 7.5-6-4.8-6 4.8 2.4-7.5-6-4.8h7.6z'
            />
        </svg>
    );
}

export { EmptyStarIcon, FilledStarIcon };
