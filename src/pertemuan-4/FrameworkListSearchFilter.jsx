import { useState } from "react";
import frameworkData from "./framework.json";

export default function FrameworkListSearchFilter() {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [selectedTag, setSelectedTag] = useState("");

	/*Inisialisasi DataForm*/
		const [dataForm, setDataForm] = useState({
			searchTerm: "",
			selectedTag: "",
			/*Tambah state lain beserta default value*/
			});
		
		/*Inisialisasi Handle perubahan nilai input form*/
		const handleChange = (evt) => {
			const { name, value } = evt.target;
			setDataForm({
				...dataForm,
				[name]: value,
			});
		};
  /** Deklrasai Logic Search & Filter **/
  const _searchTerm = dataForm.searchTerm.toLowerCase();
  const filteredFrameworks = frameworkData.filter((framework) => {
    const matchesSearch =
      framework.name.toLowerCase().includes(_searchTerm) ||
      framework.description.toLowerCase().includes(_searchTerm)||
        framework.details.developer.toLowerCase().includes(_searchTerm)||
        framework.details.releaseYear.toPrecision().includes(_searchTerm);

    const matchesTag = dataForm.selectedTag
      ? framework.tags.includes(dataForm.selectedTag)
      : true;

    return matchesSearch && matchesTag;
  });
  const allTags = [
    ...new Set(frameworkData.flatMap((framework) => framework.tags)),
  ];
  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto grid gap-6 md:grid-cols-2">
        <input 
                name = 'searchTerm'onChange={handleChange }
          type="text"
      
          placeholder="Search framework..."
          className="w-full p-2 border border-gray-300 rounded mb-4"
        />

        <select
                name = 'selectedTag'onChange={handleChange }
     
          className="w-full p-2 border border-gray-300 rounded mb-4"
        >
          <option value="">All Tags</option>
          {allTags.map((tag, index) => (
            <option key={index} value={tag}>
              {tag}
            </option>
          ))}
        </select>
        {filteredFrameworks .map((item) => (
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
                  Developer:{" "}
                  <span className="text-gray-900">
                    {item.details.developer}
                  </span>
                </p>
                <p className="text-sm font-medium text-gray-500 uppercase tracking-wider">
                  Released:{" "}
                  <span className="text-gray-900">
                    {item.details.releaseYear}
                  </span>
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
  );
}
