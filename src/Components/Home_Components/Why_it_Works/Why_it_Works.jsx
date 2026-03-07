export default function StepCard() {
    return (
        <div className="relative bg-amber-200 rounded-ee-selector shadow-md p-6 w-full max-w-md mx-auto">
            {/* Step Number */}
            <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold text-lg">
                    1
                </div>
                <h3 className="text-xl font-semibold text-gray-800">Create Account</h3>
            </div>

            {/* Description */}
            <p className="mt-3 text-gray-600 text-sm">
                Phasellus dictum eros eget erat tincidunt bibendum.
            </p>

            {/* Right Middle Triangle */}
            <div className="absolute right-0 top-1/2 transform -translate-y-1/2 
                      w-0 h-0 border-t-[40px] border-b-[40px] 
                      border-l-[40px] border-l-orange-500 
                      border-t-transparent border-b-transparent"></div>
        </div>
    );
}
