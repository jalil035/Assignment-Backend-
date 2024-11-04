//Create Routs

export const createBlogs = async (req, res) => {
  return res.json({ message: "Blog created successfully" });
};

//Read Routs

export const readBlogs = async (req, res) => {
  return res.json({ message: "Blogs read successfully" });
};

//Update Routs

export const updateBlogs = async (req, res) => {
  return res.json({ message: "Blog updated successfully" });
};

//Delete Routs

export const deleteBlogs = async (req, res) => {
  return res.json({ message: "Blog deleted successfully" });
};
