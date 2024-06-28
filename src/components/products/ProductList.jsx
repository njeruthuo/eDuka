import data from "../../data";

const ProductList = () => {
  const getUniqueCategories = (data) => {
    const categories = new Set();
    data.forEach((item) => {
      categories.add(item.category);
    });
    return Array.from(categories);
  };

  const uniqueCategories = getUniqueCategories(data.data);

  return (
    <div className="flex flex-col sm:flex-row mt-4">
      <div className="hidden sm:block w-1/4 sm:pl-6">
        <div className="sticky top-[56px]">
          <h2 className="font-bold text-lg">Categories</h2>
          <div id="categories">
            <ul className="flex flex-col space-y-4 mt-4">
              {uniqueCategories.map((category) => {
                return <li key={category}>{category}</li>;
              })}
            </ul>
          </div>
        </div>
      </div>
      <div className="sm:w-3/4 w-auto">
        <h2 className="pl-4 font-bold text-lg">Products</h2>
        <div className="mt-4">
          <div className="container mx-auto">
            <div className="flex flex-wrap">
              {data.data.map((item) => {
                const { id, img, name, price } = item;
                return (
                  <div
                    className="w-full sm:w-1/2 lg:w-1/3 p-4 hover:cursor-pointer"
                    key={id}
                  >
                    <div className="bg-gray-200 p-2">
                      <img className="h-36 w-full" src={img} alt={name} />
                      <h2 className="text-gray-700 text-sm my-2">{name}</h2>
                      <p className="text-gray-500 text-xs">${price}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
