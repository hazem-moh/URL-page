// Page.jsx


const Page = ({ queryParams }) => {
    // Parse query parameters
    const params = new URLSearchParams(queryParams);

    // Get the value of the paramName query parameter
    const paramName = params.get('paramName');

    return (
        <div>
            <h2 className=' bg-gray-500 text-white text-4xl'>Page Component</h2>
            <p>This component receives and displays query parameters.</p>
            <p>Parameter value: {paramName}</p>
        </div>
    );
};

export default Page;
