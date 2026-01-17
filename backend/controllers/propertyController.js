const Property = require("../models/Property");

// GET /api/properties
exports.getProperties = async (req, res) => {
  try {
    const { location, price } = req.query;

    let filter = {};

    // 🔍 Location filter (same as frontend includes())
    if (location) {
      filter.location = { $regex: location, $options: "i" };
    }

    // 💰 Price filter (<= selected price)
    if (price) {
      filter.price = { $lte: Number(price) };
    }

    const properties = await Property.find(filter);
    res.json(properties);
  } catch (err) {
    res.status(500).json({ message: "Server Error" });
  }
};
