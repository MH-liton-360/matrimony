const Loading = () => {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-white/60 backdrop-blur-md z-50">
            <div className="flex flex-col items-center gap-4">

                {/* Spinner */}
                <span className="loading loading-spinner loading-lg text-primary"></span>

                {/* Text */}
                <p className="text-gray-700 font-medium animate-pulse">
                    Loading, please wait...
                </p>
            </div>
        </div>
    );
};

export default Loading;