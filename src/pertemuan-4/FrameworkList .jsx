import frameworkData from "./framework.json";

export default function FrameworkList() {
    return (
        <div className="p-8 bg-gray-50 min-h-screen">
            <div className="max-w-4xl mx-auto grid gap-6 md:grid-cols-2">
                {frameworkData.map((item) => (
                    <div 
                        key={item.id} 
                        className="group flex flex-col justify-between border border-gray-200 p-6 rounded-2xl shadow-sm bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                    >
                        <div>
                            <h2 className="text-2xl font-extrabold text-purple-600 mb-2 tracking-tight">
                                {item.name}
                            </h2>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                {item.description}
                            </p>
                            
                            <div className="space-y-1 border-t pt-4 border-gray-100">
                                <p className="text-sm font-medium text-gray-500 uppercase tracking-wider">
                                    Developer: <span className="text-gray-900">{item.details.developer}</span>
                                </p>
                                <p className="text-sm font-medium text-gray-500 uppercase tracking-wider">
                                    Released: <span className="text-gray-900">{item.details.releaseYear}</span>
                                </p>
                            </div>
                        </div>

                        <div className="mt-6">
                            <a 
                                href={item.details.officialWebsite} 
                                className="inline-block w-full text-center py-2 px-4 bg-blue-50 text-purple-400 font-semibold rounded-lg group-hover:bg-gray-600 group-hover:text-white transition-colors duration-200"
                            >
                                Visit Official Website →
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}  