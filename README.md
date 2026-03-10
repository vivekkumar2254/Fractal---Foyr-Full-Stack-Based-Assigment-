# 📱 Infinite Scroll Activity Feed

A full-stack web application featuring an infinite scroll activity feed with cursor-based pagination. Built with Vue 3, Express.js, and MongoDB.


### Prerequisites

- Node.js (v16 or higher)
- MongoDB (local installation or MongoDB Atlas account)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd Fractal
   ```

2. **Set up the Backend**
   ```bash
   cd backend
   npm install
   ```

3. **Configure Environment Variables**
   
   Create a `.env` file in the `backend` directory:
   ```env
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/activity-feed
   NODE_ENV=development
   ```

4. **Seed the Database (Optional)**
   ```bash
   npm run seed
   ```

5. **Start the Backend Server**
   ```bash
   npm run dev
   ```
   The backend will run on `http://localhost:5000`

6. **Set up the Frontend**
   
   Open a new terminal:
   ```bash
   cd frontend
   npm install
   ```

7. **Start the Frontend Development Server**
   ```bash
   npm run dev
   ```
   The frontend will run on `http://localhost:5173`

## 📡 API Endpoints

### Get Activity Feed
```
GET /api/feed
```

**Query Parameters:**
- `limit` (optional): Number of items per page (default: 10)
- `cursor` (optional): Cursor for pagination

**Response:**
```json
{
  "success": true,
  "data": [...],
  "pagination": {
    "nextCursor": "...",
    "hasMore": true
  }
}
```

### Health Check
```
GET /health
```

## 🎨 Key Components

### ActivityFeed.vue
Main component that implements infinite scroll functionality using Intersection Observer API.

### ActivityCard.vue
Displays individual activity items with user information, timestamps, and content.

### LoadingSkeleton.vue
Provides visual feedback during data loading for better user experience.

## 🔧 Development Scripts

### Backend
```bash
npm start        # Start production server
npm run dev      # Start development server with nodemon
npm run seed     # Seed database with sample data
```

### Frontend
```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
```

## 🌐 Environment Variables

### Backend (.env)
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/activity-feed
NODE_ENV=development
```

## 📚 Database Schema

### Activity Model
```javascript
{
  user: {
    name: String,
    avatar: String,
    username: String
  },
  action: String,
  timestamp: Date,
  content: {
    type: String,
    description: String
  }
}
```

## 🎯 Features Implementation

### Cursor-Based Pagination
The application uses cursor-based pagination instead of offset-based pagination for better performance with large datasets.

### Infinite Scroll
Implemented using the Intersection Observer API to detect when users reach the bottom of the feed and automatically load more content.

### Optimistic Loading
Loading skeletons are shown while fetching data to maintain a smooth user experience.

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

- Vue.js team for the amazing framework
- Express.js community
- MongoDB team
- Tailwind CSS team

---

**Happy Coding! 🚀**
