require('dotenv').config();
const mongoose = require('mongoose');
const Activity = require('../models/Activity');

const activityTemplates = [
  { title: 'User logged in', description: 'User successfully logged into the system' },
  { title: 'Profile updated', description: 'User updated their profile information' },
  { title: 'Password changed', description: 'User changed their account password' },
  { title: 'New post created', description: 'User published a new blog post' },
  { title: 'Comment added', description: 'User commented on a post' },
  { title: 'File uploaded', description: 'User uploaded a new file to the system' },
  { title: 'Settings modified', description: 'User changed application settings' },
  { title: 'Notification received', description: 'System sent a notification to user' },
  { title: 'Friend request sent', description: 'User sent a friend request' },
  { title: 'Message received', description: 'User received a new message' },
  { title: 'Email verified', description: 'User verified their email address' },
  { title: 'Account activated', description: 'User account was activated' },
  { title: 'Subscription started', description: 'User started a new subscription' },
  { title: 'Payment processed', description: 'Payment was successfully processed' },
  { title: 'Order placed', description: 'User placed a new order' },
  { title: 'Item added to cart', description: 'User added an item to shopping cart' },
  { title: 'Review posted', description: 'User posted a product review' },
  { title: 'Photo uploaded', description: 'User uploaded a new photo' },
  { title: 'Video shared', description: 'User shared a video' },
  { title: 'Location updated', description: 'User location was updated' }
];

const seedDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to MongoDB');

    await Activity.deleteMany({});
    console.log('Cleared existing activities');

    const activities = [];
    const now = new Date();
    
    for (let i = 0; i < 60; i++) {
      const template = activityTemplates[i % activityTemplates.length];
      
      const daysAgo = Math.floor(Math.random() * 30);
      const hoursAgo = Math.floor(Math.random() * 24);
      const minutesAgo = Math.floor(Math.random() * 60);
      
      const createdAt = new Date(now);
      createdAt.setDate(createdAt.getDate() - daysAgo);
      createdAt.setHours(createdAt.getHours() - hoursAgo);
      createdAt.setMinutes(createdAt.getMinutes() - minutesAgo);

      activities.push({
        title: `${template.title} #${i + 1}`,
        description: template.description,
        createdAt
      });
    }

    const inserted = await Activity.insertMany(activities);
    console.log(`✓ Successfully seeded ${inserted.length} activities`);

    await mongoose.connection.close();
    console.log('Database connection closed');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
};

seedDatabase();
