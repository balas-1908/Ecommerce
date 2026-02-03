function sidebar() {
  const categories = [
    "Fruits & Vegetables",
    "Meat & Fish",
    "Snacks",
    "Dairy",
    "Beverage",
    "Health & Beauty"
  ];

  return (
    <div className="bg-light p-3 vh-100">
      <h6 className="fw-bold mb-3">Categories</h6>
      <ul className="list-unstyled">
        {categories.map((cat, index) => (
          <li key={index} className="mb-2">
            <button className="btn btn-light w-100 text-start">
              {cat}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default sidebar;