const Activity = require('../models/Activity');

const getActivityFeed = async (req, res) => {
  try {
    const { lastId, limit = 10 } = req.query;
    const pageLimit = parseInt(limit);

    let query = {};
    
    if (lastId) {
      query._id = { $lt: lastId };
    }

    const activities = await Activity.find(query)
      .sort({ _id: -1 })
      .limit(pageLimit);

    const hasMore = activities.length === pageLimit;

    res.status(200).json({
      success: true,
      count: activities.length,
      data: activities,
      hasMore
    });
  } catch (error) {
    console.error('Error fetching activity feed:', error);
    res.status(500).json({
      success: false,
      message: 'Server error while fetching activities',
      error: error.message
    });
  }
};

module.exports = {
  getActivityFeed
};
