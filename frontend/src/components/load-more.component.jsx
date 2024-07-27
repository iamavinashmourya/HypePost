const LoadMoreDataBtn = ({ state, fetchDataFun }) => {
    if (state && state.results && state.results.length < state.totalDocs) {
        return (
            <button
                onClick={() => fetchDataFun({ page: state.page + 1 })}
                className="text-dark-grey p-2 px-3 hover:bg-grey/30 rounded-md flex items-center gap-2"
            >
                Load More
            </button>
        );
    }

    return null; 
};

export default LoadMoreDataBtn;
