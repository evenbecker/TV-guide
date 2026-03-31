import './PageControls.css';

function PageControls({ page, setPage, totalResults }) {
    return (
        <div className="page-controls">
            <button className="page-controls__button" disabled={page <= 1} onClick={() => setPage(page - 1)}>
                Previous
            </button>
            <h2 className="text--subheading page-controls__current-page">Page {page}</h2>
            <button className="page-controls__button" disabled={page * 10 >= totalResults} onClick={() => setPage(page + 1)}>
                Next
            </button>
        </div>
    );
}

export default PageControls;
