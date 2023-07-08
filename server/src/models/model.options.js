const modelOptions = {
  toJSON: {
    // Enable virtuals for the toJSON() output
    virtuals: true,
    // Modify the output object before it's serialized to JSON
    transform: (_, obj) => {
      // Delete the _id property from the output object
      delete obj._id;
      return obj;
    },
  },
  toObject: {
    // Enable virtuals for the toObject() output
    virtuals: true,
    // Modify the output object before it's converted to a plain JavaScript object
    transform: (_, obj) => {
      // Delete the _id property from the output object
      delete obj._id;
      return obj;
    },
  },
  // Disable the version key (__v) in the MongoDB document
  versionKey: false,
  // Automatically add timestamps (createdAt, updatedAt) to the document
  timestamps: true,
};

module.exports = modelOptions;
